import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { works } from "@/lib/nail-works";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ofelia Nail Lounge" },
      { name: "description", content: "Nine recent folios from the Ofelia atelier — hand-set jewelry, sculpted florals, chromatic glaze." },
      { property: "og:title", content: "Gallery — Ofelia Nail Lounge" },
      { property: "og:description", content: "Nine recent folios from the Ofelia atelier." },
      { property: "og:image", content: works[2].src },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <div className="bg-ivory text-ink">
      <Header />

      <section className="pt-32 md:pt-44 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow">The Folio · MMXXVI</div>
              <h1 className="editorial-h mt-6 text-[clamp(3rem,8vw,6.5rem)]">
                Nine recent<br /><span className="italic">studies</span> in nail.
              </h1>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-[15px] text-mute leading-relaxed max-w-md md:ml-auto">
                Curated like a beauty editorial — each set photographed on the day
                of completion. Hover for the technical notes. Tap a work to read
                the full caption.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 md:pb-44">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 space-y-20 md:space-y-28">
          {works.map((w, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={w.id}
                className="grid grid-cols-12 gap-6 md:gap-10 items-center"
              >
                <figure
                  className={`col-span-12 md:col-span-7 aspect-[4/5] overflow-hidden bg-cream relative group ${
                    reverse ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={w.src}
                    alt={w.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </figure>
                <div className={`col-span-12 md:col-span-5 ${reverse ? "md:order-1 md:pr-10" : "md:pl-10"}`}>
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-mute">
                    <span>Folio Nº {w.id}</span>
                    <span>{w.collection}</span>
                  </div>
                  <h2 className="editorial-h mt-5 text-[clamp(2rem,4.5vw,3.5rem)]">
                    {w.title.split(" ").map((word, idx) => (
                      <span key={idx} className={idx === w.title.split(" ").length - 1 ? "italic" : ""}>
                        {word}{" "}
                      </span>
                    ))}
                  </h2>
                  <p className="mt-5 text-[15px] text-ink/80 leading-relaxed">{w.notes}</p>

                  <dl className="mt-8 grid grid-cols-1 gap-3 text-[13px]">
                    <div className="flex gap-4 border-t border-line pt-3">
                      <dt className="w-28 text-[10px] uppercase tracking-[0.28em] text-mute pt-0.5">Technique</dt>
                      <dd className="flex-1">{w.technique}</dd>
                    </div>
                    <div className="flex gap-4 border-t border-line pt-3">
                      <dt className="w-28 text-[10px] uppercase tracking-[0.28em] text-mute pt-0.5">Artist</dt>
                      <dd className="flex-1 font-display italic text-lg leading-none">{w.artist}</dd>
                    </div>
                    <div className="flex gap-4 border-t border-line pt-3 items-center">
                      <dt className="w-28 text-[10px] uppercase tracking-[0.28em] text-mute">Palette</dt>
                      <dd className="flex-1 flex gap-1.5">
                        {w.palette.map((c) => (
                          <span
                            key={c}
                            className="h-5 w-5 rounded-full border border-line"
                            style={{ backgroundColor: c }}
                            title={c}
                          />
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
