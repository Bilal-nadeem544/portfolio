import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "../data";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-red mb-3">Experience</p>
          <h2 className="font-display font-extrabold text-[clamp(1.8rem,3.6vw,2.8rem)] leading-tight">
            Where I've worked
          </h2>
        </motion.div>

        <div ref={ref} className="relative pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-line" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] top-2 w-[2px] bg-red"
          />

          <div className="flex flex-col gap-14">
            {experience.map((x, i) => (
              <motion.div
                key={x.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-bg border-2 border-red" />
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-1.5">{x.meta}</p>
                <h3 className="font-display font-bold text-[17px] mb-1">
                  {x.role} <span className="text-red">—</span> {x.org}
                </h3>
                <p className="text-muted text-[13.5px] leading-relaxed max-w-xl">{x.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
