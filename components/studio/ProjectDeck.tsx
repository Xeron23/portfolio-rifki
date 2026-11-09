"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { selectedProjects, StudioProject } from "@/data/studio";
import { nextCardIndex, swipeStep } from "@/lib/deck";

type Props = { onSelect: (project: StudioProject, trigger: HTMLButtonElement) => void };
export default function ProjectDeck({ onSelect }: Props) {
  const [[active, direction], setSlide] = useState([0, 1]);
  const reduceMotion = useReducedMotion();
  const dragging = useRef(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const project = selectedProjects[active];
  const move = (step: number) => setSlide(([index]) => [nextCardIndex(index, step, selectedProjects.length), step]);
  return <div className="project-deck" role="region" aria-roledescription="carousel" aria-label="Selected project cards" onKeyDown={(event) => {
    if (event.key === "ArrowRight") { event.preventDefault(); stageRef.current?.focus({ preventScroll: true }); move(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); stageRef.current?.focus({ preventScroll: true }); move(-1); }
  }}>
    <div className="deck-toolbar"><p className="mono"><span className="deck-hint-desktop">DRAG THE CARD</span><span className="deck-hint-mobile">SWIPE THE CARD</span> <span className="hint-divider">/</span> EXPLORE THE WORK</p><p className="mono deck-counter" aria-live="polite" aria-atomic="true">0{active + 1} <span>/ 04</span><span className="sr-only">: {project.name}</span></p></div>
    <div className="deck-stage" ref={stageRef} tabIndex={0} aria-label="Project deck. Use left and right arrow keys to change cards.">
      <div className="deck-back deck-back-two" aria-hidden="true" /><div className="deck-back deck-back-one" aria-hidden="true" />
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.article key={project.id} className={`project-card project-${project.tone} ${isDragging ? "is-dragging" : ""}`} custom={direction}
          role="group" aria-roledescription="slide" aria-label={`${active + 1} of ${selectedProjects.length}: ${project.name}`}
          initial={reduceMotion ? false : { opacity: 0, x: direction * 70, rotate: direction * 2, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -120, rotate: direction * -4, scale: 0.97 }}
          transition={{ duration: reduceMotion ? 0 : 0.26, ease: [0.22, 1, 0.36, 1] }}
          drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.22} dragMomentum={false}
          onDragStart={() => { dragging.current = true; setIsDragging(true); }}
          onDragEnd={(_, info) => { setIsDragging(false); const step = swipeStep(info.offset.x, info.velocity.x); if (step) move(step); window.setTimeout(() => { dragging.current = false; }, 0); }}>
          <div className="project-artwork"><p className="project-picture-label mono">PROJECT / 0{project.id}</p><div className="project-browser"><div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>{project.name.toLowerCase().replaceAll(" ", "-")}</span></div><div className={`project-image image-${project.id}`}><Image src={project.image} alt={`Original ${project.name} application screenshot`} fill sizes="(max-width: 760px) 86vw, 55vw" draggable={false} /></div></div><span className="artwork-caption mono">{project.category} / {project.stack[0]}</span></div>
          <div className="project-information"><span className="project-category mono">{project.category}</span><h3>{project.name}</h3><p className="project-summary">{project.summary}</p><ul className="project-highlights">{project.highlights.slice(0, 2).map((item) => <li key={item}>{item}</li>)}</ul><p className="project-stack mono">{project.stack.join(" / ")}</p><div className="project-links"><button className="text-link" onClick={(event) => { if (!dragging.current) onSelect(project, event.currentTarget); }}>Project details <ArrowUpRight size={17} /></button><a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.destination}: ${project.name}`} onClick={(event) => { if (dragging.current) event.preventDefault(); }}><ArrowUpRight size={20} /><span className="sr-only">{project.destination}</span></a></div></div>
        </motion.article>
      </AnimatePresence>
    </div>
    <div className="deck-controls"><div className="deck-indicators" role="group" aria-label="Choose project">{selectedProjects.map((item, index) => <button key={item.id} aria-label={`Show project ${index + 1}: ${item.name}`} aria-pressed={active === index} onClick={() => setSlide([index, index > active ? 1 : -1])}><span /></button>)}</div><div className="deck-arrows"><button aria-label="Previous project" onClick={() => move(-1)}><ArrowLeft size={20} /></button><button aria-label="Next project" onClick={() => move(1)}><ArrowRight size={20} /></button></div></div>
  </div>;
}
