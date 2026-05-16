"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/effects/scroll-progress";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import GitHub from "@/components/sections/github";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";

const Particles = dynamic(() => import("@/components/effects/particles"), { ssr: false });
const MouseGlow = dynamic(() => import("@/components/effects/mouse-glow"), { ssr: false });
const AnimatedGrid = dynamic(() => import("@/components/effects/animated-grid"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen animated-bg relative" role="main">
      <ScrollProgress />
      <Particles />
      <MouseGlow />
      <AnimatedGrid />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GitHub />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
