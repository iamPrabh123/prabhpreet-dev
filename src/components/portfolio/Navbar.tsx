import { useEffect, useState } from "react";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4 ${
          scrolled ? "glass-bar shadow-[0_18px_40px_-30px_rgba(0,0,0,0.9)]" : "border border-transparent"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5" aria-label={`${profile.name} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-secondary font-mono text-sm font-semibold text-primary">
            {profile.monogram}
          </span>
          <span className="hidden text-sm font-medium sm:block">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="hidden items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" /> Resume
          </a>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 sm:inline-flex"
          >
            Let&apos;s Connect <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-secondary lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="glass-bar mx-auto mt-2 max-w-6xl rounded-2xl p-3 lg:hidden animate-in fade-in slide-in-from-top-2"
        >
          <ul className="grid gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border px-3 py-2.5 text-sm"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-3 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
