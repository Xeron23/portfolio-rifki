"use client";

import { useState, type JSX } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({ navItems, className }: { navItems: { name: string; link: string; icon?: JSX.Element }[]; className?: string }) => {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setVisible(current < 48 || current < previous);
  });

  return <motion.nav aria-label="Primary navigation" initial={{ opacity: 0, y: -18 }} animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -18 }} transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }} className={cn("fixed inset-x-0 top-5 z-50 mx-auto flex w-fit max-w-[calc(100vw-2rem)] items-center gap-1 rounded-full border border-white/10 bg-[#0c1222]/80 p-1.5 shadow-2xl shadow-black/20 backdrop-blur-xl", className)}>
    {navItems.map((navItem) => <Link key={navItem.link} href={navItem.link} className="focus-ring group relative rounded-full px-3 py-2 text-xs font-semibold text-white/55 transition hover:bg-white/10 hover:text-white sm:px-4 sm:text-sm"><span className="relative z-10">{navItem.name}</span><span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-[#65e8df] transition-transform group-hover:scale-x-100" /></Link>)}
  </motion.nav>;
};
