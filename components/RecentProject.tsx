"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FaArrowUpRightFromSquare, FaXmark } from "react-icons/fa6";
import { projects } from "@/data";
import { Reveal } from "./ui/Reveal";

type Project = (typeof projects)[number];

const RecentProjects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section id="projects" className="scroll-mt-28 py-16 sm:py-24" aria-labelledby="projects-title">
      <Reveal>
        <p className="eyebrow">Selected work</p>
        <h2 id="projects-title" className="section-title">A small selection of <em>recent projects.</em></h2>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <motion.article className="surface group h-full p-4 sm:p-5" whileHover={reduceMotion ? undefined : { y: -6 }} transition={{ duration: reduceMotion ? 0 : 0.25 }}>
              <div className="relative h-56 overflow-hidden rounded-xl border border-white/10 bg-[#0a1020] sm:h-64">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(101,232,223,.18),transparent_34%),linear-gradient(135deg,#121c35,#0b1020)]" />
                <Image src={project.img} alt={`${project.title} project cover`} fill className="relative z-10 object-contain p-8 transition duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-[#090e1c]/75 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#65e8df]">0{project.id} / build</div>
              </div>
              <div className="relative z-10 px-1 pb-1 pt-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-2xl">{project.title}</h3>
                  <button type="button" aria-label={`Read more about ${project.title}`} onClick={() => setSelected(project)} className="focus-ring shrink-0 rounded-full border border-white/15 p-2 text-white/60 transition hover:border-[#65e8df]/60 hover:text-[#65e8df]"><FaArrowUpRightFromSquare aria-hidden="true" /></button>
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#aab5d1]">{project.des}</p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2" aria-label="Technologies used">
                    {project.iconLists.map((icon) => <span key={icon} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/20"><Image src={icon} alt="" width={20} height={20} /></span>)}
                  </div>
                  {project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#65e8df] transition hover:text-white">Open project <FaArrowUpRightFromSquare aria-hidden="true" /></a> : null}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {selected ? <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050712]/85 p-5 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
          <motion.div role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" className="surface relative max-h-[90vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} onClick={(event) => event.stopPropagation()}>
            <button type="button" aria-label="Close project details" onClick={() => setSelected(null)} className="focus-ring absolute right-5 top-5 rounded-full border border-white/10 p-2 text-white/60 hover:text-white"><FaXmark aria-hidden="true" /></button>
            <p className="eyebrow">Project details</p>
            <h3 id="project-dialog-title" className="mt-5 pr-10 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">{selected.title}</h3>
            <p className="mt-5 leading-7 text-[#b7c1dc]">{selected.des}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {selected.iconLists.map((icon) => <span key={icon} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20"><Image src={icon} alt="" width={22} height={22} /></span>)}
              {selected.link ? <a href={selected.link} target="_blank" rel="noopener noreferrer" className="focus-ring ml-auto inline-flex items-center gap-2 rounded-lg bg-[#65e8df] px-4 py-3 text-sm font-semibold text-[#07131c]">Visit project <FaArrowUpRightFromSquare aria-hidden="true" /></a> : null}
            </div>
          </motion.div>
        </motion.div> : null}
      </AnimatePresence>
    </section>
  );
};

export default RecentProjects;
