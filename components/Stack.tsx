"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { companies, techStack } from "@/data";
import { Reveal } from "./ui/Reveal";

const Stack = () => {
  const rollingStack = [...techStack, ...techStack];
  const reduceMotion = useReducedMotion();

  return (
    <section id="tech" className="scroll-mt-28 py-16 sm:py-24" aria-labelledby="stack-title">
      <Reveal>
        <p className="eyebrow">Tools I use</p>
        <h2 id="stack-title" className="section-title">A practical <em>stack</em> for reliable delivery.</h2>
      </Reveal>
      <div className="surface relative mt-10 overflow-hidden py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#11182b] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#11182b] to-transparent" />
        <div className="marquee-track flex w-max gap-4 px-4">
          {rollingStack.map((item, index) => <motion.div key={`${item.name}-${index}`} className="flex w-[220px] shrink-0 items-center gap-4 rounded-xl border border-white/10 bg-black/15 p-4" whileHover={reduceMotion ? undefined : { y: -3, borderColor: "rgba(101,232,223,.5)" }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white p-2"><Image src={item.icon} alt={item.name} width={28} height={28} className="h-full w-full object-contain" /></span>
            <span><strong className="block text-sm text-white">{item.name}</strong><small className="mt-1 block text-xs text-white/45">{item.title}</small></span>
          </motion.div>)}
        </div>
      </div>
      <Reveal delay={0.12}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8" aria-label="Platforms and services">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Built with teams who ship</span>
          {companies.map((company) => <div key={company.id} className="flex items-center gap-2 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"><Image src={company.img} alt="" width={22} height={22} /><Image src={company.nameImg} alt={company.name} width={80} height={20} className="h-4 w-auto" /></div>)}
        </div>
      </Reveal>
    </section>
  );
};

export default Stack;
