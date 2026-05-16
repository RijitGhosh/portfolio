"use client";

import { motion } from "framer-motion";
import { Calendar, Building, ExternalLink } from "lucide-react";
import experience from "@/content/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Professional journey and career milestones
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
          
          {experience.experience.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1 md:w-1/2 md:px-8">
                <div className="glass-strong p-8 rounded-2xl ml-12 md:ml-0 hover:border-purple-500/50 transition-all duration-300 glow-hover">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-400 font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Building className="w-4 h-4 text-blue-400" />
                    <span className="text-purple-400 font-semibold">{exp.company}</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 transform md:-translate-x-1/2 glow shadow-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
