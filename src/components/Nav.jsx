import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2 font-display font-extrabold text-lg">
          <span
            className="w-8 h-8 grid place-items-center bg-red text-white text-sm"
            style={{ clipPath: "polygon(0 0,100% 0,82% 100%,18% 100%)" }}
          >
            B
          </span>
          <span className="hidden sm:inline text-white/90 tracking-tight">Bilal<span className="text-red">.</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative px-4 py-2 transition-colors ${
                active === l.id ? "text-white" : "text-muted hover:text-white"
              }`}
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-red"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center border border-red text-red hover:bg-red hover:text-white transition-colors px-4 py-2 text-[11px] font-mono uppercase tracking-wider"
        >
          Let's talk
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-bg border-b border-line"
          >
            <div className="flex flex-col px-6 py-3">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`py-3 font-mono text-xs uppercase tracking-wider border-b border-line/60 last:border-0 ${
                    active === l.id ? "text-red" : "text-muted"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
