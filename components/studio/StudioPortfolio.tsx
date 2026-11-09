"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowDownToLine, ArrowUpRight, Check, Copy, Menu, MoveUpRight, Plus, Rotate3D, X } from "lucide-react";
import { cvUrl, email, process, StudioProject, toolkit } from "@/data/studio";
import { socialMedia } from "@/data";
import ProjectDeck from "./ProjectDeck";

const SceneViewer = dynamic(() => import("./SceneViewer"), { ssr: false, loading: () => <div className="scene-loading" role="status">Preparing the object…</div> });
const navigation = [{ name: "Work", id: "projects" }, { name: "About", id: "about" }, { name: "Toolbox", id: "tech" }];
function Star({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true"><path d="M40 0v80M0 40h80M11.7 11.7l56.6 56.6M11.7 68.3l56.6-56.6" stroke="currentColor" strokeWidth="7" /></svg>;
}
export default function StudioPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [selected, setSelected] = useState<StudioProject | null>(null);
  const [interactive, setInteractive] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(entry.target.id);
    }, { rootMargin: "-15% 0px -60% 0px" });
    document.querySelectorAll("section[id], footer[id]").forEach((el) => sectionObserver.observe(el));
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
    return () => { sectionObserver.disconnect(); revealObserver.disconnect(); if (copyTimer.current) clearTimeout(copyTimer.current); };
  }, []);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected) {
      if (!dialog.open) dialog.showModal();
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = originalOverflow; };
    }
    if (dialog.open) dialog.close();
    triggerRef.current?.focus({ preventScroll: true });
  }, [selected]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); menuButtonRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 761px)");
    const onChange = (event: MediaQueryListEvent) => { if (event.matches) setMenuOpen(false); };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);
  async function copyEmail() {
    if (copyTimer.current) clearTimeout(copyTimer.current);
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(email);
      setCopyStatus("Email copied");
    } catch { setCopyStatus("Couldn’t copy. Select the email address above."); }
    copyTimer.current = setTimeout(() => setCopyStatus(""), 5000);
  }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="nav-inner">
      <a className="wordmark" href="#top" aria-label="Rifki Anandita, back to top">rifki<span>.</span></a>
      <span className="header-role mono">Backend developer<br />& automation enthusiast</span>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? "location" : undefined}>{item.name}<span className="nav-dot" /></a>)}<a href="#contact" className="nav-contact">Let&apos;s talk <ArrowUpRight size={15} /></a></nav>
      <button ref={menuButtonRef} className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </div><nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!menuOpen}>{[...navigation, { name: "Let’s talk", id: "contact" }].map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.name}<ArrowUpRight size={20} /></a>)}</nav></header>
    <main id="main">
      <section id="top" className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="square-dot" /> MUHAMMAD RIFKI ANANDITA</p><h1 id="hero-title">Good systems.<br />Quietly<br /><em>powerful.</em><span className="hero-period">*</span></h1><div className="hero-description"><span className="small-rule" /><p>I&apos;m Rifki, a backend developer. I build clean APIs, secure authentication, and automation that makes complex work feel simple.</p></div><div className="hero-actions"><a className="button-primary" href="#projects">Explore my work <ArrowDown size={17} /></a><a className="text-link" href={cvUrl} download>Download CV <ArrowDownToLine size={16} /></a></div><p className="hero-footnote mono">* Thoughtful architecture. Dependable by design.</p></div>
        <div className="hero-visual"><div className="figure-top mono"><span>THE BACKEND, MADE TANGIBLE</span><span>FIG. 01</span></div><div className={`object-stage ${interactive ? "is-interactive" : ""}`}>{interactive ? <SceneViewer onClose={() => setInteractive(false)} /> : <Image src="/studio3d/backend-hero-wide.webp" alt="Custom 3D system architecture: an API module, layered server, and database connected by data paths in ivory, terracotta, and graphite" fill priority sizes="(max-width: 760px) 100vw, 53vw" className="hero-object" />}{!interactive && <div className="object-cross" aria-hidden="true">+</div>}</div><div className="figure-bottom"><p className="mono">API. LOGIC. DATA.<br /><span>BETTER WHEN THEY WORK TOGETHER.</span></p><button className="object-control" onClick={() => setInteractive(!interactive)} aria-pressed={interactive} aria-label={interactive ? "Close interactive 3D view" : "Explore the custom object in 3D"}>{interactive ? <X size={16} /> : <Rotate3D size={17} />}<span>{interactive ? "Back to still" : "Explore in 3D"}</span></button></div></div>
      </section>
      <div className="capabilities wrap" aria-label="Areas of focus"><span className="mono">A FEW THINGS I CARE ABOUT</span><p>Clean architecture <Plus /> Secure auth <Plus /> Useful automation <Plus /> Reliable APIs</p></div>
      <section id="projects" className="work-section wrap section-space" aria-labelledby="projects-title"><div className="section-heading reveal"><div className="section-index mono">01 / SELECTED WORK</div><div><h2 id="projects-title">A few things<br /><em>I&apos;ve built.</em></h2><p>The systems behind the interface.<br />Four projects, one card at a time.</p></div><a className="text-link section-side-link" href={socialMedia[0].link} target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={16} /></a></div><ProjectDeck onSelect={(project, trigger) => { triggerRef.current = trigger; setSelected(project); }} /></section>
      <section id="about" className="about-section section-space" aria-labelledby="about-title"><div className="wrap about-grid"><div className="about-side"><p className="section-index mono">02 / A LITTLE ABOUT ME</p><div className="about-emblem" aria-hidden="true"><Star /><span className="mono">THINK CLEARLY.<br />BUILD CAREFULLY.</span></div><a className="text-link" href={cvUrl} download>The longer version <ArrowDownToLine size={16} /></a></div><div className="about-main reveal"><h2 id="about-title">I like solving what<br />happens <em>behind<br className="desktop-break" /> the screen.</em></h2><div className="about-copy"><p>I&apos;m Rifki, a third-year Software Engineering student focused on backend development and automation.</p><p>Clean architecture, robust APIs, and secure authentication are where I spend my time. I enjoy turning complicated operational workflows into systems that are easier to use and maintain.</p></div><div className="about-notes"><div><span className="mono">MY FOCUS</span><p>From API contract<br />to production deploy.</p></div><div><span className="mono">WORKING TOGETHER</span><p>Clear communication.<br />Flexible across time zones.</p></div></div></div></div></section>
      <section id="tech" className="toolbox-section wrap section-space" aria-labelledby="tech-title"><div className="section-heading reveal"><div className="section-index mono">03 / THE TOOLBOX</div><div><h2 id="tech-title">The right tools.<br /><em>Used with care.</em></h2><p>My everyday stack for connecting ideas, data, and the people who use them.</p></div></div><div className="toolkit-list">{toolkit.map((group, index) => <div className="toolkit-row" key={group.label}><span className="toolkit-number mono">0{index + 1}</span><h3>{group.label}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section>
      <section className="process-section wrap section-space" aria-labelledby="process-title"><div className="process-heading reveal"><p className="section-index mono">04 / HOW I WORK</p><h2 id="process-title">A clear way <em>forward.</em></h2></div><div className="process-grid">{process.map((step, index) => <article key={step.title}><div className="process-number">0{index + 1}<ArrowUpRight size={25} /></div><p className="mono">{step.note}</p><h3>{step.title}</h3><p className="process-body">{step.body}</p></article>)}</div></section>
      <footer id="contact" className="contact-section" aria-labelledby="contact-title"><div className="wrap"><div className="contact-top"><span className="mono">HAVE SOMETHING IN MIND?</span><span className="mono">LET&apos;S MAKE IT WORK.</span></div><div className="contact-heading"><h2 id="contact-title">Your next idea.<br /><em>Let&apos;s build it.</em></h2><a className="contact-arrow" href={`mailto:${email}`} aria-label={`Email Rifki at ${email}`}><MoveUpRight /></a></div><div className="contact-details"><p>APIs, authentication, database design,<br />or a workflow that needs simplifying.</p><div className="email-group"><a className="email-link" href={`mailto:${email}`}>{email}</a><button className="copy-button" onClick={() => void copyEmail()} aria-label="Copy email address">{copyStatus === "Email copied" ? <Check size={18} /> : <Copy size={18} />}</button><span className="copy-status" role="status">{copyStatus}</span></div></div><div className="footer-bottom"><a className="wordmark" href="#top" aria-label="Back to top">rifki<span>.</span></a><p className="mono">© {new Date().getFullYear()} RIFKI ANANDITA</p><div><a href={socialMedia[0].link} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a><a href={socialMedia[1].link} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href="#top">Back to top <ArrowUpRight size={14} /></a></div></div></div></footer>
    </main>
    <dialog className="project-dialog" ref={dialogRef} aria-labelledby="project-dialog-title" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>{selected && <div className="dialog-content"><div className="dialog-top"><p className="mono">SELECTED WORK / 0{selected.id}</p><button autoFocus className="dialog-close" aria-label="Close project details" onClick={() => setSelected(null)}><X /></button></div><h2 id="project-dialog-title">{selected.name}</h2><p className="dialog-category mono">{selected.category} / {selected.stack.join(" · ")}</p><div className="dialog-image"><Image src={selected.image} alt={`${selected.name} application, original project artwork`} width={1200} height={760} /></div><p className="dialog-description" lang={selected.id === 1 ? "id" : "en"}>{selected.des}</p><h3>What&apos;s inside</h3><ul>{selected.highlights.map((item) => <li key={item}>{item}</li>)}</ul><a className="button-primary" href={selected.link} target="_blank" rel="noopener noreferrer">{selected.destination}<ArrowUpRight size={17} /></a></div>}</dialog>
  </>;
}
