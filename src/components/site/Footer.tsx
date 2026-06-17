import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory grain">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo className="text-3xl md:text-4xl text-ivory" />
            <p className="mt-8 max-w-sm text-ivory/70 text-[15px] leading-relaxed">
              A nail atelier in Louisville devoted to hand-set jewelry, sculpted florals, and
              chromatic glaze. By appointment, in confidence.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-ivory/50">Maison</div>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
              <li><Link to="/artistry" className="hover:text-gold">Artistry & Services</Link></li>
              <li><Link to="/atelier" className="hover:text-gold">Atelier</Link></li>
              <li><Link to="/visit" className="hover:text-gold">Visit & Reserve</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-ivory/50">Visit</div>
            <address className="mt-5 not-italic text-[15px] leading-relaxed text-ivory/80">
              5320 Bardstown Road<br />
              Louisville, Kentucky 40291<br />
              <a href="tel:+15024099787" className="hover:text-gold">+1 (502) 409 9787</a>
            </address>
            <div className="mt-6 flex gap-5 text-[11px] uppercase tracking-[0.28em] text-ivory/60">
              <a href="https://www.instagram.com/ofelia.nails.louisville" target="_blank" rel="noreferrer" className="hover:text-gold">Instagram</a>
              <a href="https://www.tiktok.com/@ofelia.nail.loung" target="_blank" rel="noreferrer" className="hover:text-gold">TikTok</a>
              <a href="https://maps.app.goo.gl/oiKf7V4puodToMrc9" target="_blank" rel="noreferrer" className="hover:text-gold">Maps</a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-ivory/15 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.28em] text-ivory/40">
          <span>© {new Date().getFullYear()} Ofelia Nail Lounge — Louisville, KY</span>
          <span>4.9 ★ · 201+ Reviews · Family Owned</span>
        </div>
      </div>
    </footer>
  );
}
