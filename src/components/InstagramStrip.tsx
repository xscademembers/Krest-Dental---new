import { INSTAGRAM_POSTS } from "@/lib/krest-content";

const INSTAGRAM_URL = "https://www.instagram.com/krestdental/";

export function InstagramStrip() {
  return (
    <section
      aria-label="Krest Dental on Instagram"
      className="py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-[25px]">
        <div className="mb-10 text-center">
          <h2 className="font-display text-[36px] font-normal leading-[1.1] tracking-[-0.02em] text-copper sm:text-[44px] lg:text-[52px]">
            Follow Us on Instagram
          </h2>
          <p className="mt-2 font-accent text-[18px] tracking-wide text-taupe">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-copper"
            >
              @Krestdental
            </a>
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <li key={post.src}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] overflow-hidden rounded-md ring-1 ring-copper/10"
              >
                <img
                  src={post.src}
                  alt={post.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={300}
                  loading={idx < 4 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={idx < 4 ? "high" : undefined}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
