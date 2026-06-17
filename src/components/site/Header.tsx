import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Maison" },
  { to: "/gallery", label: "Gallery" },
  { to: "/artistry", label: "Artistry" },
  { to: "/atelier", label: "Atelier" },
  { to: "/visit", label: "Visit" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/85 backdrop-blur-md border-b border-line/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 h-16 md:h-20 grid grid-cols-[1fr_auto_1fr] items-center">
        <Link to="/" className="justify-self-start" onClick={() => setOpen(false)}>
          <Logo className="text-[1.05rem] md:text-[1.15rem]" />
        </Link>

        <nav className="hidden md:flex items-center gap-9 justify-self-center text-[12px] uppercase tracking-[0.28em] text-ink/80">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-ink relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ink after:transition-all hover:after:w-full"
              activeProps={{ className: "text-ink after:w-full" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="justify-self-end flex items-center gap-3">
          <a
            href="tel:+15024099787"
            className="hidden md:inline text-[11px] uppercase tracking-[0.28em] text-mute hover:text-ink"
          >
            +1 502 409 9787
          </a>
          <Link
            to="/visit"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 text-[11px] uppercase tracking-[0.28em] bg-ink text-ivory hover:bg-espresso transition-colors"
          >
            Reserve
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 grid place-items-center"
          >
            <span className="relative block w-5 h-px bg-ink before:absolute before:content-[''] before:left-0 before:-top-1.5 before:w-5 before:h-px before:bg-ink after:absolute after:content-[''] after:left-0 after:top-1.5 after:w-5 after:h-px after:bg-ink" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-ivory border-b border-line ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-8 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ink"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-line/70 text-[11px] uppercase tracking-[0.28em] text-mute">
            5320 Bardstown Rd · Louisville
          </div>
          <a href="tel:+15024099787" className="text-[11px] uppercase tracking-[0.28em] text-mute">
            +1 502 409 9787
          </a>
        </nav>
      </div>
    </header>
  );
}
