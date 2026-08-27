import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Server,
  Database,
  ShieldCheck,
  BrainCircuit,
  Wrench,
} from "lucide-react";
import { skills } from "../data";

const icons = [LayoutTemplate, Server, Database, ShieldCheck, BrainCircuit, Wrench];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-red mb-3">My Services</p>
          <h2 className="font-display font-extrabold text-[clamp(1.8rem,3.6vw,2.8rem)] leading-tight mb-4">
            What I Can Do
          </h2>
          <p className="text-muted text-[15px] leading-relaxed">
            Practical development focused on clean UI, useful features and dependable applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative bg-surface border border-line p-7 overflow-hidden transition-colors hover:border-red/60"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-red/0 group-hover:bg-red/10 blur-2xl transition-all duration-500"
                />
                <div className="w-11 h-11 grid place-items-center bg-red/10 text-red mb-6 group-hover:bg-red group-hover:text-white transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-bold text-[15px] mb-2">{s.category}</h3>
                <p className="text-muted text-[12.5px] leading-relaxed">{s.items.join(" · ")}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
