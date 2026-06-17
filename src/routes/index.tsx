import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { works } from "@/lib/nail-works";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ofelia Nail Lounge — Louisville Atelier of Nail Couture" },
      {
        name: "description",
        content:
          "A by-appointment nail atelier in Louisville, Kentucky. Hand-set jewelry, sculpted florals, and chromatic glaze.",
      },
      { property: "og:title", content: "Ofelia Nail Lounge — Louisville Atelier" },
      { property: "og:description", content: "Hand-set jewelry, sculpted florals, chromatic glaze." },
    ],
  }),
  component: Home,
});

function Home() {
  const hero = works[2];   // lilac-3d
  const featured = [works[0], works[3], works[5], works[7]];

  return (
    <div className="bg-ivory text-ink">
      <Header />

      {/* HERO — editorial split */}
      <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-5 lg:col-span-5 animate-fade-up">
            <div className="eyebrow flex items-center">
              <span>Louisville · Est. by Ofelia</span>
            </div>
            <h1 className="editorial-h mt-6 text-[clamp(3.25rem,9vw,7.5rem)]">
              The art of<br />
              <span className="italic">the hand</span>,<br />
              rendered.
            </h1>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-mute">
              Ofelia is a nail atelier devoted to slow craft — hand-set jewelry,
              sculpted florals, chromatic glaze. Each set is composed in private,
              one client at a time, by Michael and Destiny.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/visit"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-ivory text-[11px] uppercase tracking-[0.32em] hover:bg-espresso transition-colors"
              >
                Reserve <span aria-hidden>→</span>
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-ink hover:text-gold-deep"
              >
                View the gallery
              </Link>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-7 relative animate-fade-up">
            <div className="absolute -top-6 left-0 right-0 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-mute">
              <span>Folio Nº 03</span>
              <span>—</span>
              <span>{hero.title}</span>
            </div>
            <figure className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-cream">
              <img
                src={hero.src}
                alt={hero.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <figcaption className="absolute left-4 bottom-4 right-4 flex items-end justify-between text-[10px] uppercase tracking-[0.28em] text-ivory mix-blend-difference">
                <span>{hero.collection}</span>
                <span>By {hero.artist}</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Bottom data row */}
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-line/70 pt-8">
          {[
            ["4.9 ★", "201+ reviews"],
            ["Two artists", "Michael · Destiny"],
            ["By appointment", "Walk-ins by capacity"],
            ["Bardstown Rd", "Louisville, KY"],
          ].map(([a, b]) => (
            <div key={a as string}>
              <div className="font-display text-2xl md:text-3xl">{a}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-mute">{b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-line/70 py-5 overflow-hidden bg-cream/60">
        <div className="flex w-max animate-marquee whitespace-nowrap text-mute">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 pr-12 font-display italic text-2xl md:text-3xl">
              <span>Hand-set Swarovski</span><span className="opacity-40">✦</span>
              <span>Sculpted 3D florals</span><span className="opacity-40">✦</span>
              <span>Cat-eye chromatic glaze</span><span className="opacity-40">✦</span>
              <span>Pressed botanicals</span><span className="opacity-40">✦</span>
              <span>Couture tweed</span><span className="opacity-40">✦</span>
              <span>Baroque lace stamping</span><span className="opacity-40">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">§ 01 — Maison</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="editorial-h text-[clamp(1.75rem,3.8vw,3.25rem)] text-ink/90">
              We treat the nail as a small canvas — built for closeness, for
              gesture, for being held. Every set begins on bare hands and ends
              when nothing more can be added without taking something away.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                ["Designed in private", "One client at a time. No phones at the station unless requested."],
                ["Hand-placed jewelry", "Crystals, pearls and 24k flake set with tweezers, not stamps."],
                ["Built to outlast", "Structured gel and acrylic systems engineered for three to four weeks."],
              ].map(([t, d]) => (
                <div key={t} className="border-t border-line pt-6">
                  <div className="font-display text-xl text-ink">{t}</div>
                  <p className="mt-2 text-[14px] text-mute leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED GALLERY — asymmetric grid */}
      <section className="bg-cream/60 py-24 md:py-36 border-y border-line/70">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex items-end justify-between gap-8 mb-12 md:mb-16">
            <div>
              <div className="eyebrow">§ 02 — Selected Folios</div>
              <h2 className="editorial-h mt-4 text-[clamp(2.25rem,5.5vw,4.5rem)]">
                Recent <span className="italic">work</span>.
              </h2>
            </div>
            <Link
              to="/gallery"
              className="hidden md:inline-flex text-[11px] uppercase tracking-[0.32em] text-ink border-b border-ink pb-1 hover:text-gold-deep hover:border-gold-deep"
            >
              All nine folios →
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {featured.map((w, i) => {
              const spans = [
                "col-span-12 md:col-span-7 aspect-[4/5]",
                "col-span-6 md:col-span-5 aspect-[3/4] md:translate-y-12",
                "col-span-6 md:col-span-5 aspect-[3/4]",
                "col-span-12 md:col-span-7 aspect-[4/5] md:-translate-y-12",
              ];
              return (
                <Link
                  key={w.id}
                  to="/gallery"
                  className={`group relative overflow-hidden bg-bone ${spans[i]}`}
                >
                  <img
                    src={w.src}
                    alt={w.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between text-[10px] uppercase tracking-[0.28em] text-ivory opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Nº {w.id}</span>
                    <span className="font-display italic text-lg normal-case tracking-normal">
                      {w.title}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden mt-10">
            <Link to="/gallery" className="text-[11px] uppercase tracking-[0.32em] border-b border-ink pb-1">
              All nine folios →
            </Link>
          </div>
        </div>
      </section>

      {/* ARTISTS */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow">§ 03 — The Hands</div>
            <h2 className="editorial-h mt-4 text-[clamp(2.25rem,5vw,3.75rem)]">
              Two artists.<br /><span className="italic">One atelier.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[14px] text-mute leading-relaxed">
              Ofelia is family-owned and intentionally small. Books open monthly;
              we never overbook a day.
            </p>
            <Link
              to="/atelier"
              className="mt-8 inline-flex text-[11px] uppercase tracking-[0.32em] border-b border-ink pb-1 hover:text-gold-deep hover:border-gold-deep"
            >
              Read the atelier →
            </Link>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {[
              { name: "Michael", title: "Founding artist", note: "Baroque lace, denim couture, chromatic auras.", img: works[3].src },
              { name: "Destiny", title: "Atelier artist", note: "Sculpted florals, glass jelly, hand-set Swarovski.", img: works[2].src },
            ].map((a) => (
              <article key={a.name} className="border-t border-ink pt-6">
                <figure className="aspect-[4/5] overflow-hidden bg-cream">
                  <img src={a.img} alt={`Work by ${a.name}`} className="w-full h-full object-cover" loading="lazy" />
                </figure>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-3xl">{a.name}</h3>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-mute">{a.title}</span>
                </div>
                <p className="mt-2 text-[14px] text-mute">{a.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONY */}
      <section className="py-24 md:py-36 bg-ink text-ivory grain relative">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 text-center">
          <div className="eyebrow text-ivory/60">§ 04 — In their words</div>
          <blockquote className="mt-8 editorial-h text-[clamp(2rem,5vw,4rem)] text-ivory">
            <span className="text-gold">“</span>
            The most detail-oriented nail work I've ever experienced.
            Michael and Destiny treat each nail like a tiny painting —
            and somehow it lasts for weeks.
            <span className="text-gold">”</span>
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.32em] text-ivory/60">
            <span className="text-gold">★★★★★</span>
            <span className="rule bg-ivory/40" />
            <span>4.9 — 201+ Google reviews</span>
          </div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow">§ 05 — Reserve</div>
            <h2 className="editorial-h mt-6 text-[clamp(2.5rem,7vw,6rem)]">
              Hold a chair<br />on <span className="italic">Bardstown Road</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="border-t border-ink pt-6">
              <div className="eyebrow">Atelier</div>
              <address className="mt-4 not-italic font-display text-2xl leading-snug">
                5320 Bardstown Road<br />
                Louisville, Kentucky 40291
              </address>
              <a href="tel:+15024099787" className="mt-4 block text-[15px] text-mute hover:text-ink">
                +1 (502) 409 9787
              </a>
              <Link
                to="/visit"
                className="mt-8 inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-ivory text-[11px] uppercase tracking-[0.32em] hover:bg-espresso"
              >
                Reserve a sitting →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
