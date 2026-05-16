"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import projects from "@/content/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Innovative solutions built with passion and precision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full flex flex-col hover:border-purple-500/50 transition-all duration-300 group glow-hover">
                <CardHeader>
                  <div className="w-full h-56 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl mb-6 flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform">
                    <div className="text-7xl opacity-20 group-hover:opacity-40 transition-opacity">
                      🚀
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Button variant="outline" size="lg" className="flex-1 gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} code on GitHub`}>
                        <Github className="w-5 h-5" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="lg" className="flex-1 gap-2" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live demo`}>
                          <ExternalLink className="w-5 h-5" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
