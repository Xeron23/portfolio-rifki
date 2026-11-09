import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rifki Anandita | Backend Engineer",
  description: "Backend engineer focused on clean APIs, secure auth, and scalable architecture.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
