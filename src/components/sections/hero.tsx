"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import config from "@/content/config.json";
import socials from "@/content/socials.json";

const titles = [
  "Data Analyst",
  "Business Analyst",
  "Software Developer",
  "Project Manager",
];

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullTitle = titles[currentTitle];
      
      if (isDeleting) {
        setDisplayText(currentFullTitle.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      } else {
        setDisplayText(currentFullTitle.substring(0, displayText.length + 1));
        if (displayText === currentFullTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      <div className="text-center z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-purple-400 text-lg md:text-xl mb-4 font-medium tracking-wide">
            Available for opportunities
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">{config.name}</span>
          </h1>
          <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 h-12 md:h-14 font-medium">
            <span>{displayText}</span>
            <span className="animate-pulse text-purple-400">|</span>
          </div>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {config.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button size="lg" className="gap-2 w-full sm:w-auto text-lg py-6 px-8 glow-hover">
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
          <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto text-lg py-6 px-8" asChild>
            <a href={`mailto:${socials.email}`}>
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <Button variant="ghost" size="lg" className="gap-2 text-gray-400 hover:text-white" asChild>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="lg" className="gap-2 text-gray-400 hover:text-white" asChild>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="w-5 h-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-lg"
            aria-label="Scroll to about section"
          >
            <span>View my work</span>
            <ArrowRight className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
