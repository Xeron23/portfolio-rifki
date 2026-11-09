"use client";

import { useEffect } from "react";

const projects = [
  {
    index: "01",
    title: "Mood Journal REST API",
    type: "Backend API / Healthtech",
    description:
      "REST API journaling end-to-end dengan Express + Prisma: autentikasi JWT, reset password email (Nodemailer), CRUD jurnal, dan insight/rekomendasi dari analisis Groq AI.",
    tags: ["Express.js", "Prisma", "Groq AI", "MySQL", "JWT Auth"],
    link: "https://github.com/Xeron23/journaling_humic",
    className: "project-blue",
    caption: "Express + Prisma + Groq",
  },
  {
    index: "02",
    title: "Hiji Course & Web Builder",
    type: "Platform API / E-Commerce",
    description:
      "Web-based course platform with subscription system, digital catalog (free & paid), product landing architecture, and Facebook Pixel integration for tracking customer conversions.",
    tags: ["Express.js", "Node.js", "MongoDB", "System Architecture"],
    link: "https://app.diagrams.net/#G1MCnIGk3V8je1kFp0I_jW3PFBpV5VOTJw#%7B%22pageId%22%3A%22sJbnaeJLdAiVgOLY_JB1%22%7D",
    className: "project-morrow",
    caption: "Node.js + MongoDB architecture",
  },
  {
    index: "03",
    title: "Flix - Simple Clone Netflix",
    type: "Fullstack / Subscriptions",
    description:
      "A simple Netflix-style streaming platform clone with subscription tiers, device limits per plan, and background worker jobs for automated access control.",
    tags: ["Laravel", "Tailwind CSS", "MySQL", "Queue Jobs"],
    link: "https://latihan-laravel-flix.xianly.cloud/login",
    className: "project-kite",
    caption: "Laravel + Automated Access",
  },
  {
    index: "04",
    title: "SoulSpace Mental Health",
    type: "AI Platform / Microservices",
    description:
      "AI-powered mental health platform with JWT auth, mood detection via facial expressions, journal sentiment analysis, meditation recommendations, and S3-compatible file storage.",
    tags: ["Express.js", "Node.js", "MySQL", "Groq AI", "S3 Storage"],
    link: "https://soulspace.xianly.cloud/login",
    className: "project-coral",
    caption: "AI Vision + Sentiment Analysis",
  },
];

const techStack = [
  { name: "Node.js", role: "Backend Runtime", desc: "Event-driven asynchronous I/O" },
  { name: "Express.js", role: "REST Framework", desc: "Modular middleware & route handlers" },
  { name: "Nest.js", role: "TypeScript Backend", desc: "Structured enterprise architecture" },
  { name: "TypeScript", role: "Language", desc: "Type-safe contracts & maintainability" },
  { name: "Laravel", role: "Fullstack / ORM", desc: "Robust MVC, queues & Eloquent" },
  { name: "MySQL", role: "Relational DB", desc: "ACID transactions & indexing" },
  { name: "PostgreSQL", role: "Relational DB", desc: "Complex queries & JSONB storage" },
  { name: "MongoDB", role: "Document DB", desc: "Flexible schemas & aggregation" },
  { name: "Docker", role: "Containerization", desc: "Consistent builds & isolated environments" },
];

const processPhases = [
  {
    number: "01",
    title: "Discovery & System Design",
    text: "Align on business goals, user flows, and constraints (traffic, latency, budget). Translate into API contracts, data models, and clean architecture.",
  },
  {
    number: "02",
    title: "Implementation & Iteration",
    text: "Build in small, reliable iterations: auth, database schema, and core endpoints while testing frequently and refining based on feedback.",
  },
  {
    number: "03",
    title: "Security & Testing",
    text: "Before release: unit/integration testing, edge-case validation, rate-limiting, secure headers, and auth hardening.",
  },
  {
    number: "04",
    title: "Deploy & Monitoring",
    text: "Docker containerization, CI/CD pipeline automation, reverse proxy setup, and production monitoring for long-term stability.",
  },
];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 16 16 4M7 4h9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Spark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectVisual({ className, caption }: { className: string; caption: string }) {
  return (
    <div className={`project-visual ${className}`} aria-hidden="true">
      <div className="visual-window">
        <div className="window-chrome">
          <span />
          <span />
          <span />
          <b>rifki / api</b>
        </div>
        <div className="visual-content">
          <div className="visual-kicker">Production / 2024—26</div>
          <div className="visual-lines">
            <i />
            <i />
            <i />
          </div>
          <div className="visual-orb" />
          <div className="visual-caption">{caption}</div>
        </div>
      </div>
      <div className="visual-sticker">
        view project <ArrowRight />
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Rifki home">
          <span className="wordmark-mark">R</span>
          <span>rifki<span className="wordmark-dot">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#tech">Tech</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="#contact">
          <span className="availability-dot" />
          Available for backend projects
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" /> Backend Engineer · System Automation
          </p>
          <h1>
            Reliable backend systems with <em>clarity</em> and scale<span className="heading-period">.</span>
          </h1>
          <p className="hero-intro">
            Hi, I&apos;m Rifki, a Backend Developer &amp; Automation Enthusiast. 3rd-year Software Engineering student focused on building robust APIs, secure auth, and automated bots to optimize operational workflows.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Show my work <ArrowUpRight />
            </a>
            <a className="button button-light" href="/cv/CV_Muhammad Rifki Anandita.pdf" download="CV_Muhammad Rifki Anandita.pdf">
              Download CV <ArrowUpRight />
            </a>
            <a className="text-link" href="#contact">
              Start a conversation <ArrowRight />
            </a>
          </div>
          <div className="hero-meta" aria-label="Experience summary">
            <div>
              <strong>03</strong>
              <span>year<br />se student</span>
            </div>
            <div>
              <strong>04+</strong>
              <span>production<br />apis built</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>system<br />automation</span>
            </div>
          </div>
        </div>

        <div className="hero-art" data-reveal style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
          <div className="hero-art-grid" />
          <div className="orbit orbit-large" />
          <div className="orbit orbit-small" />
          <div className="hero-sphere">
            <span>R</span>
          </div>
          <div className="hero-note hero-note-top">
            <Spark />
            <span>Clean architecture<br />by default</span>
          </div>
          <div className="hero-note hero-note-bottom">
            <span className="note-label">Currently</span>
            <strong>Building dependable<br />backend services.</strong>
            <span className="note-arrow">
              <ArrowUpRight />
            </span>
          </div>
          <div className="hero-coordinate">
            06° 58&apos; 33&quot; S<br />107° 37&apos; 55&quot; E
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Tech Stack and capabilities">
        <div className="ticker-track">
          <span>Node.js</span><i>✳</i>
          <span>Express.js</span><i>✳</i>
          <span>Nest.js</span><i>✳</i>
          <span>TypeScript</span><i>✳</i>
          <span>Laravel</span><i>✳</i>
          <span>MySQL</span><i>✳</i>
          <span>PostgreSQL</span><i>✳</i>
          <span>MongoDB</span><i>✳</i>
          <span>Docker</span><i>✳</i>
          <span>System Automation</span><i>✳</i>
          <span>Node.js</span><i>✳</i>
          <span>Express.js</span><i>✳</i>
          <span>Nest.js</span><i>✳</i>
          <span>TypeScript</span><i>✳</i>
          <span>Laravel</span><i>✳</i>
          <span>MySQL</span><i>✳</i>
          <span>PostgreSQL</span><i>✳</i>
          <span>MongoDB</span><i>✳</i>
          <span>Docker</span><i>✳</i>
          <span>System Automation</span><i>✳</i>
        </div>
      </div>

      <section className="work-section section-pad" id="work">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> A few things I&apos;ve built</p>
            <h2>Selected <em>projects</em></h2>
          </div>
          <p className="section-aside">
            Production APIs, automated services, and web apps built for performance, security, and scalability.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
              data-reveal
              style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none"
                aria-label={`Open ${project.title}`}
              >
                <ProjectVisual className={project.className} caption={project.caption} />
              </a>
              <div className="project-info">
                <div className="project-heading-row">
                  <div>
                    <p className="project-index">{project.index} / {project.type}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <a
                    className="round-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight />
                  </a>
                </div>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div style={{ marginTop: "20px" }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    Explore project <ArrowRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a
          className="archive-link"
          href="https://github.com/Xeron23"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all repositories on GitHub <ArrowRight />
        </a>
      </section>

      <section className="section-pad" id="tech" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> Production Stack</p>
            <h2>My <em>Tech Stack</em></h2>
          </div>
          <p className="section-aside">
            Tools, databases, and frameworks I use to build robust and scalable backends.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              data-reveal
              style={
                {
                  "--reveal-delay": `${(i % 3) * 80}ms`,
                  border: "1px solid var(--line)",
                  padding: "24px 20px",
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(8px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.25s ease, background 0.25s ease, border-color 0.25s ease",
                } as React.CSSProperties
              }
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "var(--ink)";
                e.currentTarget.style.background = "var(--paper-deep)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.4)";
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--coral)",
                  }}
                >
                  {tech.role}
                </span>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    margin: "8px 0",
                  }}
                >
                  {tech.name}
                </h3>
              </div>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--ink-soft)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-stamp" data-reveal>
          <span>About / Rifki</span>
          <div className="stamp-star">✳</div>
          <span>Clean architecture by default</span>
        </div>
        <div className="about-content" data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          <p className="eyebrow"><span className="eyebrow-line" /> The short version</p>
          <h2>
            Make it reliable.<br />
            <em>Make it scale.</em>
          </h2>
          <div className="about-grid">
            <p className="about-lede">
              I&apos;m Muhammad Rifki Anandita, a backend developer based between ideas and execution. I help teams build robust APIs, secure authentication, and scalable database architectures.
            </p>
            <div className="about-detail">
              <p>
                My focus is where architecture meets real-world reliability — clean RESTful API contracts, secure authentication flows, normalized schemas, and automated background jobs that eliminate operational bottlenecks.
              </p>
              <p>
                I prioritize clean code, testability, and shipping features end-to-end: from initial data modeling and API contract definition to containerized deployment.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <a
              className="button button-dark"
              href="/cv/CV_Muhammad Rifki Anandita.pdf"
              download="CV_Muhammad Rifki Anandita.pdf"
            >
              Download Full CV <ArrowUpRight />
            </a>
            <a className="text-link text-link-dark" href="#contact">
              Discuss a project <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <section className="process-section section-pad" id="process">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> How I work</p>
            <h2>A process built for<br /><em>predictable delivery.</em></h2>
          </div>
          <p className="section-aside">The right amount of structure to deliver reliable software without friction.</p>
        </div>
        <div className="process-grid">
          {processPhases.map((phase, index) => (
            <div
              className="process-card"
              key={phase.number}
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
            >
              <span className="process-number">{phase.number}</span>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
              <span className="process-plus">+</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section section-pad" id="contact" data-reveal>
        <div className="contact-orbit" />
        <div className="contact-content">
          <p className="eyebrow"><span className="eyebrow-line" /> Need reliable backend systems?</p>
          <h2>
            Let&apos;s build<br />
            <em>something solid.</em>
          </h2>
          <p className="contact-copy">
            Need APIs, authentication, database design, or third-party integrations? Send me an email and let&apos;s discuss how we can build it cleanly.
          </p>
          <a className="contact-email" href="mailto:kaqyword2304@gmail.com">
            kaqyword2304@gmail.com <ArrowUpRight />
          </a>
        </div>
        <div className="contact-footer-note">
          Open to backend engineering &amp;<br />automation projects
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top">
          <span className="wordmark-mark">R</span>
          <span>rifki<span className="wordmark-dot">.</span></span>
        </a>
        <p>
          Muhammad Rifki Anandita · Backend Engineer<br />
          Bandung, Indonesia / Remote
        </p>
        <div className="footer-links">
          <a href="https://github.com/Xeron23" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-rifki-anandita-32b481287/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight />
          </a>
          <a href="/cv/CV_Muhammad Rifki Anandita.pdf" download="CV_Muhammad Rifki Anandita.pdf">
            CV <ArrowUpRight />
          </a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Muhammad Rifki Anandita</span>
      </footer>
    </main>
  );
}
