import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { works } from "@/lib/nail-works";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "The Atelier — Ofelia Nail Lounge" },
      { name: "description", content: "The story behind Ofelia Nail Lounge — a family-owned nail atelier on Bardstown Road, Louisville. Meet Michael and Destiny." },
      { property: "og:title", content: "The Atelier — Ofelia Nail Lounge" },
      { property: "og:description", content: "A family-owned atelier on Bardstown Road, Louisville." },
      { property: "og:image", content: works[4].src },
    ],
  }),
  component: Atelier,
});

function Atelier() {
  return (
    <div className="bg-ivory text-ink">
      <Header />

      {/* Manifesto */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 text-center">
          <div className="eyebrow">The Atelier</div>
          <h1 className="editorial-h mt-6 text-[clamp(2.75rem,8vw,6.5rem)]">
            A small room<br />on <span className="italic">Bardstown Road</span>.
          </h1>
          <p className="mt-10 max-w-2xl mx-auto text-[17px] leading-[1.7] text-ink/85">
            Ofelia is named for a mother, and the atelier still moves at the pace
            of someone who learned to do things slowly and well. We are
            family-owned, intentionally small, and built around two artists —
            Michael and Destiny — who treat every nail like a tiny commission.
          </p>
        </div>
      </section>

      {/* Editorial image band */}
      <section className="px-0">
        <div className="grid grid-cols-12 gap-2 md:gap-3 px-2 md:px-3">
          <figure className="col-span-7 aspect-[4/5] overflow-hidden bg-cream">
            <img src={works[4].src} alt="" className="w-full h-full object-cover" loading="lazy" />
          </figure>
          <figure className="col-span-5 aspect-[4/5] overflow-hidden bg-cream">
            <img src={works[1].src} alt="" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 grid grid-cols-12 gap-10">
          <aside className="col-span-12 md:col-span-3">
            <div className="eyebrow">Our story</div>
          </aside>
          <div className="col-span-12 md:col-span-9 space-y-8 text-[16px] leading-[1.85] text-ink/85 font-body">
            <p className="font-display text-3xl md:text-4xl leading-snug text-ink not-italic">
              We didn't open a nail salon. We opened a room where one person, at one chair,
              is given the time it actually takes to do something beautiful.
            </p>
            <p>
              The work at Ofelia begins with a conversation — about the length of your week,
              the shape of your hand, the colour you keep coming back to. From there we sculpt,
              paint, and set. Some sets are quiet single-tones. Others carry pressed botanicals,
              hand-stamped lace, or hundreds of crystals laid by tweezer.
            </p>
            <p>
              Our regulars come every three to four weeks; many have been with us since the
              beginning. We are proud of the 4.9 — earned, line by line, in 201+ reviews —
              and prouder still of the quiet repeat visits that don't appear online.
            </p>
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="bg-ink text-ivory py-24 md:py-36 grain relative">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="eyebrow text-ivory/60">The hands</div>
          <h2 className="editorial-h mt-5 text-[clamp(2.25rem,6vw,5rem)]">Two artists.</h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {[
              {
                name: "Michael",
                role: "Founding artist",
                bio: "Builds the structural foundation Ofelia is known for — apex, balance, longevity. Specialist in chromatic auras, baroque lace and denim couture.",
                signature: ["Aurora Tannin", "Maison Rouge", "Denim Heirloom"],
                img: works[7].src,
              },
              {
                name: "Destiny",
                role: "Atelier artist",
                bio: "Sculpts and paints — pressed botanicals, 3D florals, hand-set Swarovski. Composes every nail in a set individually so no two ever read the same.",
                signature: ["Lilas en Trois", "Confetti Sonata", "Jade Tropique"],
                img: works[2].src,
              },
            ].map((a) => (
              <article key={a.name}>
                <figure className="aspect-[4/5] overflow-hidden bg-espresso">
                  <img src={a.img} alt={`Work by ${a.name}`} className="w-full h-full object-cover" loading="lazy" />
                </figure>
                <div className="mt-6 flex items-baseline justify-between">
                  <h3 className="font-display italic text-5xl">{a.name}</h3>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-ivory/50">{a.role}</span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-ivory/80 max-w-md">{a.bio}</p>
                <div className="mt-5 text-[11px] uppercase tracking-[0.28em] text-ivory/50">
                  Signature folios — <span className="text-gold">{a.signature.join(" · ")}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press / values */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">What we stand on</div>
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {[
              ["Detail", "If a crystal is crooked we re-set it. If a line is off, we wipe and redraw. There is no quiet 'good enough.'"],
              ["Longevity", "Structured systems engineered to last 3 – 4 weeks without lift, chip, or compromise to the natural nail."],
              ["Welcome", "Family-owned, female-led. Every guest is greeted by name, including the first-time guest."],
              ["Stewardship", "Sanitised, single-use where it matters. Implements autoclaved between guests, no exceptions."],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-ink pt-5">
                <div className="font-display text-2xl">{t}</div>
                <p className="mt-2 text-[14px] text-mute leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32 text-center">
        <Link
          to="/visit"
          className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-ivory text-[11px] uppercase tracking-[0.32em] hover:bg-espresso"
        >
          Reserve a sitting →
        </Link>
      </section>

      <Footer />
    </div>
  );
}
