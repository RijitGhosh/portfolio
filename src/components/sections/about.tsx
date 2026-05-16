"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, Users, Lightbulb, Cloud, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Brain,
    title: "Data Analysis",
    description: "Transforming raw data into actionable insights using advanced analytical techniques",
  },
  {
    icon: BarChart3,
    title: "Business Analysis",
    description: "Driving business decisions through comprehensive data analysis and strategic planning",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Leading teams and projects with effective communication and collaborative problem-solving",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Developing innovative solutions to complex challenges through critical thinking",
  },
  {
    icon: Cloud,
    title: "AI & Cloud",
    description: "Exploring cutting-edge technologies in artificial intelligence and cloud computing",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Creating and executing strategic plans to achieve organizational goals efficiently",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Passionate about leveraging data and technology to drive innovation and create meaningful impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:border-purple-500/50 transition-all duration-300 glow-hover">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-5 shadow-lg">
                    <highlight.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
