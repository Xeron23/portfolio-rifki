import { projects } from "./index";

// Original project facts, links, and artwork remain in data/index.ts.
// Short labels are editorial treatments of that existing content.
const treatments = [
  {
    name: "Mood Journal", category: "REST API", image: "/editorial/mood-journal.webp", tone: "clay",
    summary: "A journaling API that connects everyday entries with useful mood insights.",
    stack: ["Express", "Prisma", "MySQL", "Groq"],
    highlights: ["JWT authentication and email password reset", "Journal CRUD with Prisma", "Groq-powered analysis and recommendations"],
    destination: "View source",
  },
  {
    name: "Hiji Digital", category: "REST API", image: "/editorial/hiji-digital.webp", tone: "sage",
    summary: "The backend for a website builder and digital course platform.",
    stack: ["Express", "Node.js", "MongoDB"],
    highlights: ["Free and paid course catalogs", "Subscription-based access", "Facebook Pixel product-event tracking"],
    destination: "View architecture",
  },
  {
    name: "Flix", category: "FULL STACK", image: "/editorial/flix.webp", tone: "sand",
    summary: "A streaming-platform clone with subscription plans and automated access control.",
    stack: ["Laravel", "Tailwind CSS", "MySQL"],
    highlights: ["Subscription-based plans", "Per-plan device limits", "Background jobs for access control"],
    destination: "Open application",
  },
  {
    name: "SoulSpace", category: "REST API", image: "/editorial/soulspace.webp", tone: "stone",
    summary: "A mental-health platform that brings journaling, mood insights, and community together.",
    stack: ["Express", "Node.js", "MySQL", "Groq"],
    highlights: ["JWT auth and anonymous community chat", "Facial mood detection and journal sentiment analysis", "Meditation recommendations and S3-compatible storage"],
    destination: "Open application",
  },
];
export const selectedProjects = projects.map((project, index) => ({ ...project, ...treatments[index] }));
export type StudioProject = (typeof selectedProjects)[number];
export const toolkit = [
  { label: "Languages & runtime", items: ["TypeScript", "Node.js"] },
  { label: "Frameworks", items: ["Express.js", "Nest.js", "Laravel"] },
  { label: "Data & infrastructure", items: ["MySQL", "PostgreSQL", "MongoDB", "Docker"] },
];
export const process = [
  { title: "Understand the system.", body: "Start with the goals, user flows, and constraints. Map them into API contracts, data models, and a clear service architecture.", note: "Discovery & system design" },
  { title: "Build in small steps.", body: "Implement authentication, the database schema, and core endpoints in focused iterations. Share progress and adjust with feedback.", note: "Implementation & iteration" },
  { title: "Make it dependable.", body: "Test the edge cases, harden security, and deploy. Follow through with logging, monitoring, and performance tuning.", note: "Testing, deploy & monitoring" },
];
export const email = "kaqyword2304@gmail.com";
export const cvUrl = "/cv/CV_Muhammad%20Rifki%20Anandita.pdf";
