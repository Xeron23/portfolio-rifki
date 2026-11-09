import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Rifki Anandita — Backend Engineer & Automation Enthusiast",
  description:
    "Rifki is a backend engineer focused on building reliable APIs, clean architecture, secure auth, and automated systems.",
  keywords: [
    "Muhammad Rifki Anandita",
    "Rifki",
    "Backend Developer",
    "Backend Engineer",
    "Node.js",
    "Express.js",
    "Nest.js",
    "TypeScript",
    "Laravel",
    "MySQL",
    "Docker",
    "REST API"
  ],
  openGraph: {
    title: "Muhammad Rifki Anandita — Backend Engineer",
    description: "Building reliable backend systems with clarity and scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
