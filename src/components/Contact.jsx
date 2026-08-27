import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { general, contactLinks } from "../data";

const iconMap = { mail: Mail, phone: Phone, github: GithubIcon, linkedin: LinkedinIcon };

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 border-t border-line overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full -z-10"
        style={{ background: "radial-gradient(circle, rgba(239,16,16,0.10), transparent 65%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-red mb-3"
        >
          Let's Talk
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-extrabold text-[clamp(2rem,5vw,3.2rem)] leading-tight mb-5"
        >
          Let's work together on your next project
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted text-[15px] mb-10"
        >
          {general.contactText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {contactLinks.map((c) => {
            const Icon = iconMap[c.icon];
            const isPrimary = c.icon === "mail";
            return (
              <a
                key={c.id}
                href={c.url}
                target={c.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 px-6 py-3.5 text-[12px] font-mono uppercase tracking-wider transition-all hover:-translate-y-0.5 ${
                  isPrimary
                    ? "bg-red text-white hover:bg-red-dark"
                    : "border border-white/25 text-white hover:border-white/60"
                }`}
              >
                {Icon && <Icon size={15} />}
                {c.label}
                <ArrowUpRight
                  size={13}
                  className="opacity-0 -ml-1 w-0 group-hover:w-3 group-hover:opacity-100 group-hover:ml-0 transition-all overflow-hidden"
                />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
