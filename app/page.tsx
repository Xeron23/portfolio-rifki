import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import Stack from "@/components/Stack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="site-shell min-h-screen px-5 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Stack />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
