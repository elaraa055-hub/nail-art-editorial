import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { works } from "@/lib/nail-works";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit & Reserve — Ofelia Nail Lounge" },
      { name: "description", content: "Reserve a sitting at Ofelia Nail Lounge. 5320 Bardstown Road, Louisville, KY. By appointment, with care." },
      { property: "og:title", content: "Visit & Reserve — Ofelia Nail Lounge" },
      { property: "og:description", content: "5320 Bardstown Road, Louisville, KY. By appointment." },
      { property: "og:image", content: works[5].src },
    ],
  }),
  component: Visit,
});

function Visit() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-ivory text-ink">
      <Header />

      <section className="pt-32 md:pt-44 pb-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow">Visit · Reserve</div>
            <h1 className="editorial-h mt-6 text-[clamp(3rem,8vw,6.5rem)]">
              A chair held<br /><span className="italic">in your name</span>.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-[15px] text-mute leading-relaxed">
              Send a request below. We'll reply within one business day to confirm
              artist, date, and the time the set will take.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid grid-cols-12 gap-10 md:gap-16">
          {/* FORM */}
          <div className="col-span-12 md:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="border-t border-ink pt-10 space-y-8"
            >
              {sent ? (
                <div className="py-20 text-center">
                  <div className="eyebrow">Thank you</div>
                  <p className="editorial-h mt-5 text-4xl">Request received.</p>
                  <p className="mt-4 text-mute">A reply is on its way within one business day.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label="Name" name="name" required />
                    <Field label="Phone" name="phone" type="tel" required />
                  </div>
                  <Field label="Email" name="email" type="email" required />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Select label="Preferred artist" name="artist" options={["No preference", "Michael", "Destiny"]} />
                    <Select
                      label="Service chapter"
                      name="service"
                      options={[
                        "Structured systems",
                        "Couleur — chromatic glaze",
                        "Atelier nail art",
                        "Hand-set jewelry",
                        "Removal + new set",
                      ]}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label="Preferred date" name="date" type="date" />
                    <Field label="Preferred time" name="time" type="time" />
                  </div>

                  <div>
                    <label className="eyebrow block mb-3">Notes & references</label>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="Length, shape, colour direction, references…"
                      className="w-full bg-transparent border-b border-line focus:border-ink py-3 outline-none resize-none text-[15px]"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-mute">
                      A reply within 1 business day
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-ivory text-[11px] uppercase tracking-[0.32em] hover:bg-espresso"
                    >
                      Send request →
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>

          {/* INFO */}
          <aside className="col-span-12 md:col-span-5 space-y-10">
            <div className="border-t border-ink pt-6">
              <div className="eyebrow">Atelier</div>
              <address className="mt-4 not-italic font-display text-3xl leading-tight">
                5320 Bardstown Road<br />
                Louisville, KY 40291
              </address>
              <a href="https://maps.app.goo.gl/oiKf7V4puodToMrc9" target="_blank" rel="noreferrer" className="mt-4 inline-block text-[11px] uppercase tracking-[0.32em] border-b border-ink pb-1 hover:text-gold-deep">
                Open in Google Maps →
              </a>
            </div>

            <div className="border-t border-line pt-6">
              <div className="eyebrow">Direct</div>
              <ul className="mt-4 space-y-2 text-[15px]">
                <li><a href="tel:+15024099787" className="hover:text-gold-deep">+1 (502) 409 9787</a></li>
                <li><a href="https://www.instagram.com/ofelia.nails.louisville" target="_blank" rel="noreferrer" className="hover:text-gold-deep">@ofelia.nails.louisville</a></li>
                <li><a href="https://www.tiktok.com/@ofelia.nail.loung" target="_blank" rel="noreferrer" className="hover:text-gold-deep">TikTok · @ofelia.nail.loung</a></li>
              </ul>
            </div>

            <div className="border-t border-line pt-6">
              <div className="eyebrow">Hours</div>
              <ul className="mt-4 space-y-1.5 text-[15px]">
                <li className="flex justify-between"><span>Tue – Fri</span><span className="text-mute">10 — 7</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="text-mute">10 — 6</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="text-mute">11 — 4</span></li>
                <li className="flex justify-between"><span>Monday</span><span className="text-mute">Closed</span></li>
              </ul>
              <p className="mt-4 text-[12px] text-mute italic">Hours confirmed at time of reservation.</p>
            </div>

            <div className="aspect-[4/3] overflow-hidden bg-cream border border-line">
              <iframe
                title="Map to Ofelia Nail Lounge"
                src="https://www.google.com/maps?q=5320+Bardstown+Rd,+Louisville,+KY+40291&output=embed"
                className="w-full h-full grayscale-[0.4] contrast-[0.95]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-3">{label}{required && <span className="text-gold-deep"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-line focus:border-ink py-3 outline-none text-[15px]"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-3">{label}</label>
      <select
        id={name}
        name={name}
        className="w-full bg-transparent border-b border-line focus:border-ink py-3 outline-none text-[15px] appearance-none"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
