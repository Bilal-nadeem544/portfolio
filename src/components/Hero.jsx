import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { general } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { y: 26, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const nameParts = general.name.split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at 50% 20%, rgba(239,16,16,0.14), transparent 60%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(239,16,16,0.08), transparent 65%)" }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.div variants={item} className="flex items-center justify-center gap-3 mb-6">
          <span className="font-mono text-red text-sm">&lt;</span>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            {general.heroKicker}
          </p>
          <span className="font-mono text-red text-sm">/&gt;</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-black uppercase leading-[0.95] text-[clamp(3rem,9vw,6.5rem)]"
        >
          {nameParts.map((word, i) => (
            <span key={i} className={i === nameParts.length - 1 ? "text-gradient block sm:inline" : "block sm:inline"}>
              {word}{" "}
            </span>
          ))}
        </motion.h1>

        <motion.h2
          variants={item}
          className="font-display font-bold text-[clamp(1.1rem,2.4vw,1.6rem)] text-white/90 mt-4"
        >
          {general.role}
        </motion.h2>

        <motion.p variants={item} className="text-muted text-[15px] max-w-lg mx-auto mt-5 leading-relaxed">
          {general.heroText}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-red text-white px-7 py-3.5 text-[12px] font-mono uppercase tracking-wider hover:bg-red-dark transition-all hover:-translate-y-0.5"
          >
            Contact me
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/25 text-white px-7 py-3.5 text-[12px] font-mono uppercase tracking-wider hover:border-white/60 transition-all hover:-translate-y-0.5"
          >
            View projects
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-9 text-muted hover:text-red transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
