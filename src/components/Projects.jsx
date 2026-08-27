import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 bg-surface/40 border-y border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-red mb-3">My Work</p>
          <h2 className="font-display font-extrabold text-[clamp(1.8rem,3.6vw,2.8rem)] leading-tight mb-4">
            Things I've built
          </h2>
          <p className="text-muted text-[15px] leading-relaxed">
            Selected projects and systems I've worked on — from full-stack platforms to AI-powered tools.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative bg-surface border border-line p-6 flex flex-col justify-between min-h-[280px] transition-colors hover:border-red/60 ${
                p.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-display font-bold text-[17px] leading-snug">{p.title}</h3>
                  {p.featured && (
                    <span className="shrink-0 bg-red text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-muted text-[13px] leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10.5px] font-mono text-white/70 border border-line px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-5 mt-6 pt-5 border-t border-line">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-wide text-white hover:text-red transition-colors"
                >
                  Live <ExternalLink size={13} />
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-wide text-muted hover:text-white transition-colors"
                >
                  <GithubIcon size={13} /> Code
                </a>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
