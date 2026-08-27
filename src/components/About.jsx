import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import { general, skills } from "../data";

function TiltImage() {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
      style={{ perspective: 1000 }}
    >
      <div className="absolute -left-4 -bottom-4 w-[85%] h-[75%] bg-red -z-10" />
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative bg-surface border border-line overflow-hidden aspect-square"
      >
        <img
          src="/workspace.jpg"
          alt="Bilal Nadeem's developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-surface/40 border-y border-line">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <TiltImage />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-red mb-3">About Me</p>
          <h2 className="font-display font-extrabold text-[clamp(1.8rem,3.6vw,2.8rem)] leading-tight mb-5">
            {general.aboutTitle}
          </h2>
          <p className="text-muted text-[15px] leading-relaxed mb-8">{general.aboutText}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-9">
            {skills
              .flatMap((s) => s.items)
              .slice(0, 6)
              .map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="text-center border border-line bg-surface-2 text-[11px] font-mono text-white/80 py-2.5 px-1"
                >
                  {tag}
                </motion.span>
              ))}
          </div>

          <a
            href="/Bilal_Nadeem_CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-red text-white px-6 py-3 text-[12px] font-mono uppercase tracking-wider hover:bg-red-dark transition-all hover:-translate-y-0.5"
          >
            <Download size={15} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
