import dns from "node:dns";
import { MongoClient, type Db, type Collection, type Document } from "mongodb";
import { getEnv } from "@/lib/server-env";

/** Avoid repeat dns.setServers calls (Node warns if servers change mid-flight). */
let dnsConfigured = false;

/**
 * `mongodb+srv://` URIs need an SRV DNS lookup. On some Windows setups the OS
 * resolver returns ECONNREFUSED for that query (broken / intercepted DNS).
 * In dev we default to public DNS; in prod use `MONGODB_DNS_SERVERS` if needed.
 */
function configureDnsForMongoSrv(uri: string): void {
  if (dnsConfigured) return;
  const custom = getEnv("MONGODB_DNS_SERVERS");
  if (custom) {
    const list = custom
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (list.length > 0) {
      dns.setServers(list);
      dns.setDefaultResultOrder("ipv4first");
      dnsConfigured = true;
    }
    return;
  }
  if (uri.startsWith("mongodb+srv://") && import.meta.env.DEV) {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
    dns.setDefaultResultOrder("ipv4first");
    dnsConfigured = true;
  }
}

/**
 * Module-level singleton so we open ONE MongoClient per server process.
 * Astro's Node adapter keeps the process alive between requests, so this
 * pool is reused across handlers (no reconnect on every form submission).
 */
type MongoState = { client: MongoClient; db: Db };

let cached: Promise<MongoState> | undefined;

async function buildClient(): Promise<MongoState> {
  const uri = getEnv("MONGODB_URI");
  if (!uri) {
    throw new Error(
      "MONGODB_URI is not set. Add it to .env (see .env.example) and restart the server.",
    );
  }
  configureDnsForMongoSrv(uri);
  const dbName = getEnv("MONGODB_DB") || "krest";
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 8_000,
    connectTimeoutMS: 8_000,
  });
  try {
    await client.connect();
    return { client, db: client.db(dbName) };
  } catch (err) {
    cached = undefined;
    throw err;
  }
}

export function getMongo(): Promise<MongoState> {
  if (!cached) cached = buildClient();
  return cached;
}

export async function getCollection<T extends Document = Document>(
  name: string,
): Promise<Collection<T>> {
  const { db } = await getMongo();
  return db.collection<T>(name);
}

export const LEADS_COLLECTION =
  getEnv("MONGODB_COLLECTION_LEADS") || "leads";

export type LeadDoc = {
  _id?: import("mongodb").ObjectId;
  name: string;
  phone: string;
  email: string;
  interest?: string;
  message?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
    gclid?: string;
    fbclid?: string;
  };
  meta?: {
    ip?: string;
    userAgent?: string;
    referer?: string;
  };
  createdAt: Date;
};
