import { general, contactLinks } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="w-8 h-8 grid place-items-center bg-red text-white text-sm font-display font-extrabold"
          style={{ clipPath: "polygon(0 0,100% 0,82% 100%,18% 100%)" }}
        >
          B
        </span>
        <p className="text-muted text-[12px] font-mono">{general.footerText}</p>
        <div className="flex items-center gap-4">
          {contactLinks.slice(2).map((c) => (
            <a
              key={c.id}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-[11px] font-mono uppercase tracking-wider hover:text-red transition-colors"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
