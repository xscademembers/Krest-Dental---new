import { randomUUID } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { ObjectId } from "mongodb";
import { LEADS_COLLECTION, getCollection, type LeadDoc } from "@/lib/mongodb";

export type StoredLead = Omit<LeadDoc, "_id"> & { _id: string };

const FILE_PATH = path.join(process.cwd(), "data", "leads.json");

function reviveLead(raw: StoredLead): StoredLead {
  return {
    ...raw,
    createdAt:
      raw.createdAt instanceof Date ? raw.createdAt : new Date(String(raw.createdAt)),
  };
}

async function readFileLeads(): Promise<StoredLead[]> {
  try {
    const raw = await fs.readFile(FILE_PATH, "utf8");
    const parsed = JSON.parse(raw) as StoredLead[];
    if (!Array.isArray(parsed)) return [];
    return parsed.map(reviveLead);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function writeFileLeads(leads: StoredLead[]): Promise<void> {
  await fs.mkdir(path.dirname(FILE_PATH), { recursive: true });
  await fs.writeFile(FILE_PATH, JSON.stringify(leads, null, 2), "utf8");
}

let fileMigrationDone = false;

async function migrateFileLeadsToMongo(): Promise<void> {
  if (fileMigrationDone) return;
  fileMigrationDone = true;

  const fileLeads = await readFileLeads();
  if (fileLeads.length === 0) return;

  try {
    const col = await getCollection<LeadDoc>(LEADS_COLLECTION);
    for (const lead of fileLeads) {
      const { _id: _unused, ...doc } = lead;
      await col.insertOne({
        ...doc,
        createdAt: reviveLead(lead).createdAt,
      });
    }
    await writeFileLeads([]);
    console.info(`[leads-store] Migrated ${fileLeads.length} local file lead(s) to MongoDB`);
  } catch (err) {
    fileMigrationDone = false;
    console.warn("[leads-store] Could not migrate file leads to MongoDB:", err);
  }
}

async function insertMongoLead(doc: LeadDoc): Promise<string> {
  await migrateFileLeadsToMongo();
  const col = await getCollection<LeadDoc>(LEADS_COLLECTION);
  const result = await col.insertOne(doc);
  return result.insertedId.toString();
}

export async function insertLead(
  doc: LeadDoc,
): Promise<{ id: string; storage: "mongo" | "file" }> {
  try {
    const id = await insertMongoLead(doc);
    return { id, storage: "mongo" };
  } catch (err) {
    console.warn("[leads-store] Mongo insert failed, saving to local file:", err);
    const leads = await readFileLeads();
    const id = randomUUID();
    leads.unshift({ ...doc, _id: id });
    await writeFileLeads(leads);
    return { id, storage: "file" };
  }
}

export async function listLeads(limit = 500): Promise<StoredLead[]> {
  try {
    await migrateFileLeadsToMongo();
    const col = await getCollection<LeadDoc>(LEADS_COLLECTION);
    const mongoLeads = await col.find({}).sort({ createdAt: -1 }).limit(limit).toArray();
    return mongoLeads.map((lead) => ({
      ...lead,
      _id: lead._id!.toString(),
    }));
  } catch (err) {
    console.warn("[leads-store] Mongo list failed, reading local file:", err);
    const fileLeads = await readFileLeads();
    return fileLeads
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }
}

export async function deleteLead(id: string): Promise<boolean> {
  let deleted = false;

  if (ObjectId.isValid(id)) {
    try {
      const col = await getCollection<LeadDoc>(LEADS_COLLECTION);
      const result = await col.deleteOne({ _id: new ObjectId(id) });
      deleted = (result.deletedCount ?? 0) > 0;
    } catch (err) {
      console.warn("[leads-store] Mongo delete failed:", err);
    }
  }

  const fileLeads = await readFileLeads();
  const next = fileLeads.filter((lead) => lead._id !== id);
  if (next.length < fileLeads.length) {
    await writeFileLeads(next);
    deleted = true;
  }

  return deleted;
}
