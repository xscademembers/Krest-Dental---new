import { INSTAGRAM_POSTS } from "@/lib/krest-content";

const INSTAGRAM_URL = "https://www.instagram.com/krestdental/";

export function InstagramStrip() {
  return (
    <section
      aria-label="Krest Dental on Instagram"
      className="bg-cream py-16 lg:py-24"
    >
      <div className="krest-site">
        <header className="text-center">
          <h2 className="text-krest-display-sm">
            Follow Us on Instagram
          </h2>
          <p className="mt-[18px] font-accent text-[var(--krest-text-ig-handle)] tracking-wide text-taupe">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-taupe/50 underline-offset-[5px] transition-colors hover:text-copper hover:decoration-copper"
            >
              @Krestdental
            </a>
          </p>
        </header>

        {/*
          Wix pro-gallery:
          - 1265×656 outer, padding 16px sides / 32px bottom / 0 top
          - 5 items per row, 88px spacing, 4:3 crop
        */}
        <div className="instagram-pro-gallery mx-auto mt-12 box-border w-full max-w-[1265px] pt-0 max-lg:px-0 max-lg:pb-0 lg:mt-[98px] lg:min-h-[656px] lg:px-4 lg:pb-8">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5 lg:gap-[88px]">
            {INSTAGRAM_POSTS.map((post, idx) => (
              <li key={post.src}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block aspect-[4/3] overflow-hidden bg-white"
                >
                  <img
                    src={post.src}
                    alt={post.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    width={414}
                    height={312}
                    loading={idx < 5 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={idx < 5 ? "high" : undefined}
                    draggable={false}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
