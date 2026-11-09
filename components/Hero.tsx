"use client";

import { motion, useReducedMotion } from "motion/react";
import { FaArrowDown, FaArrowUpRightFromSquare } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden pb-24 pt-36 sm:pt-40" aria-labelledby="hero-title">
      <div className="hero-grid pointer-events-none absolute inset-x-[-20%] top-0 h-[720px] opacity-70" />
      <motion.div
        aria-hidden="true"
        className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(101,232,223,.32),transparent_66%)] blur-2xl"
        animate={reduceMotion ? undefined : { y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10 grid w-full items-end gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="eyebrow">Backend engineering · automation</p>
          <motion.h1
            id="hero-title"
            className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.07em] text-white sm:text-7xl lg:text-[6.3rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Backend Engineer focused on <span className="text-[#65e8df]">clean APIs</span>, secure auth, and scalable architecture.
          </motion.h1>
          <motion.p
            className="mt-8 max-w-2xl text-base leading-7 text-[#b7c1dc] sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I&apos;m Rifki, a Backend Developer &amp; Automation Enthusiast. I build dependable systems that turn complex workflows into simple, useful products.
          </motion.p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#about" className="focus-ring rounded-xl">
              <MagicButton title="Show my work" icon={<FaArrowDown />} position="right" />
            </a>
            <a
              href="/cv/CV_Muhammad Rifki Anandita.pdf"
              download
              className="focus-ring inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-5 text-sm font-semibold text-white/80 transition hover:border-[#65e8df]/60 hover:text-[#65e8df]"
            >
              Download CV <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="surface float-slow hidden min-h-[310px] p-6 lg:block">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              <span>System note / 01</span>
              <span className="text-[#65e8df]">Online</span>
            </div>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#65e8df] shadow-[0_0_18px_#65e8df]" />
                <span className="text-sm text-white/60">Ready to ship thoughtful backend systems.</span>
              </div>
              <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-white/50">
                <span className="rounded-lg border border-white/10 bg-black/20 p-3">API<br /><b className="text-white">DESIGN</b></span>
                <span className="rounded-lg border border-white/10 bg-black/20 p-3">DATA<br /><b className="text-white">MODEL</b></span>
                <span className="rounded-lg border border-white/10 bg-black/20 p-3">DEPLOY<br /><b className="text-white">MONITOR</b></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 hidden items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-white/30 sm:flex">
        <span className="h-px w-10 bg-white/20" />
        Scroll to explore
      </div>
    </section>
  );
};

export default Hero;
