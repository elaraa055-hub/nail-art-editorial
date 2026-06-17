import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { works } from "@/lib/nail-works";

export const Route = createFileRoute("/artistry")({
  head: () => ({
    meta: [
      { title: "Artistry & Services — Ofelia Nail Lounge" },
      { name: "description", content: "Hand-set jewelry, sculpted florals, structured gel and acrylic, chromatic glaze. Services at the Ofelia atelier in Louisville." },
      { property: "og:title", content: "Artistry & Services — Ofelia Nail Lounge" },
      { property: "og:description", content: "Hand-set jewelry, sculpted florals, chromatic glaze." },
      { property: "og:image", content: works[6].src },
    ],
  }),
  component: Artistry,
});

const chapters = [
  {
    n: "I",
    title: "Structured systems",
    img: works[5].src,
    items: [
      "Builder Gel manicure",
      "Acrylic overlay (natural length)",
      "Soft gel extensions — almond, square, coffin, stiletto",
      "Apex rebalance & infill (3 – 4 wk cycle)",
    ],
    note:
      "Every set begins with a dry, e-file prep and a structural apex tailored to your nail bed. No drill burn. No MMA. No shortcuts.",
  },
  {
    n: "II",
    title: "Couleur — chromatic glaze",
    img: works[7].src,
    items: [
      "Single-tone gel polish",
      "Cat-eye magnetic chromes",
      "Airbrushed auras & ombré",
      "Glass, jelly & milky bases",
      "Mirror chrome & velvet finishes",
    ],
    note:
      "Custom-mixed shades pulled from the season. Bring a reference, a fabric swatch, or a colour from memory.",
  },
  {
    n: "III",
    title: "Atelier nail art",
    img: works[2].src,
    items: [
      "Hand-painted florals & baroque",
      "Sculpted 3D blossoms",
      "Pressed botanicals in clear gel",
      "Tweed, houndstooth & couture textures",
      "Hand-stamped lace",
    ],
    note:
      "Designed at the chair, never traced. Each nail composed individually — no two ever read the same.",
  },
  {
    n: "IV",
    title: "Hand-set jewelry",
    img: works[0].src,
    items: [
      "Swarovski crystal pavé",
      "Fresh-water pearls & gold caviar",
      "24k gold flake & wire filigree",
      "Charm work — stars, hearts, monograms",
    ],
    note:
      "All hardware placed by tweezer, sealed under structural gel for three to four weeks of wear.",
  },
];

function Artistry() {
  return (
    <div className="bg-ivory text-ink">
      <Header />

      <section className="pt-32 md:pt-44 pb-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow">Services · The four chapters</div>
            <h1 className="editorial-h mt-6 text-[clamp(3rem,8vw,6.5rem)]">
              An <span className="italic">artistry</span><br />menu, not a price list.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-[15px] text-mute leading-relaxed">
              We compose every set to the wearer, so pricing is given in
              consultation. The chapters below describe what is possible.
              Reserve, share a reference, and we'll build the quote with you.
            </p>
            <Link
              to="/visit"
              className="mt-6 inline-flex text-[11px] uppercase tracking-[0.32em] border-b border-ink pb-1 hover:text-gold-deep hover:border-gold-deep"
            >
              Request a quote →
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-32 md:pb-44 space-y-24 md:space-y-32">
        {chapters.map((c, i) => {
          const reverse = i % 2 === 1;
          return (
            <article key={c.n} className="mx-auto max-w-[1280px] px-6 md:px-10">
              <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
                <figure className={`col-span-12 md:col-span-6 aspect-[4/5] overflow-hidden bg-cream ${reverse ? "md:order-2" : ""}`}>
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                </figure>
                <div className={`col-span-12 md:col-span-6 ${reverse ? "md:order-1 md:pr-8" : "md:pl-8"}`}>
                  <div className="flex items-baseline gap-6">
                    <span className="font-display italic text-gold-deep text-5xl">{c.n}</span>
                    <div className="eyebrow">Chapter</div>
                  </div>
                  <h2 className="editorial-h mt-4 text-[clamp(2rem,5vw,3.5rem)]">{c.title}</h2>
                  <p className="mt-5 text-[15px] text-ink/80 leading-relaxed max-w-lg">{c.note}</p>
                  <ul className="mt-8 divide-y divide-line border-t border-line">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center justify-between py-3.5 text-[15px]">
                        <span>{it}</span>
                        <span className="text-[10px] uppercase tracking-[0.32em] text-mute">On enquiry</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="py-24 md:py-32 bg-cream/60 border-y border-line/70">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 text-center">
          <div className="eyebrow">Before you sit</div>
          <h2 className="editorial-h mt-5 text-[clamp(2rem,5vw,3.5rem)]">A short <span className="italic">house etiquette</span>.</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              ["Allow the time", "Couture sets take 2 – 4 hours. Please plan accordingly; we never rush."],
              ["Bring references", "Screenshots welcome. We adapt, never copy — the set will be yours alone."],
              ["Removal first", "Old gel/acrylic is removed in-house with care. Bookings include this time."],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-ink pt-5">
                <div className="font-display text-2xl">{t}</div>
                <p className="mt-2 text-[14px] text-mute leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
