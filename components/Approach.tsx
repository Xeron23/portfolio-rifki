"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./ui/Reveal";

const phases = [
  {
    label: "Phase 1",
    title: "Discovery & System Design",
    description: "We align on business goals, user flows, and constraints (traffic, latency, budget). Then I translate them into API contracts, data models, and a clean service architecture.",
    accent: "#65e8df",
  },
  {
    label: "Phase 2",
    title: "Implementation & Iteration",
    description: "I build in small, reliable iterations auth, database schema, and core endpoints while sharing frequent progress updates and adjusting based on feedback.",
    accent: "#a78bfa",
  },
  {
    label: "Phase 3",
    title: "Testing, Deploy & Monitoring",
    description: "Before release: testing (unit/integration), edge-case validation, and security hardening. After deploy: monitoring, logging, and performance tuning for production stability.",
    accent: "#ffb86b",
  },
];

const Approach = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-24" aria-labelledby="approach-title">
      <Reveal>
        <p className="eyebrow">How I work</p>
        <h2 id="approach-title" className="section-title">A clear path from idea to <em>production.</em></h2>
      </Reveal>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {phases.map((phase, index) => <Reveal key={phase.label} delay={index * 0.1}>
          <motion.article className="surface group flex h-full min-h-[330px] flex-col justify-between p-6 sm:p-8" whileHover={reduceMotion ? undefined : { y: -5 }} transition={{ duration: reduceMotion ? 0 : 0.25 }}>
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: phase.accent }}>{phase.label}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-white/40 transition group-hover:border-white/30 group-hover:text-white">0{index + 1}</span>
            </div>
            <div className="relative z-10 mt-12">
              <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-white">{phase.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#aab5d1]">{phase.description}</p>
            </div>
            <div className="relative z-10 mt-8 h-px w-full bg-white/10"><span className="block h-px w-1/3 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: phase.accent }} /></div>
          </motion.article>
        </Reveal>)}
      </div>
      <Reveal delay={0.18}><p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-white/55">I can ship backend features end-to-end: from API contract → production deploy.</p></Reveal>
    </section>
  );
};

export default Approach;
