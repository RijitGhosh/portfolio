"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import skills from "@/content/skills.json";
import * as Icons from "lucide-react";

const categories = [
  { key: "languages", title: "Languages", color: "from-purple-600 to-blue-600" },
  { key: "frameworks", title: "Frameworks", color: "from-blue-600 to-cyan-600" },
  { key: "tools", title: "Tools", color: "from-cyan-600 to-green-600" },
  { key: "core", title: "Core Skills", color: "from-green-600 to-yellow-600" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              <Card className="hover:border-purple-500/50 transition-all duration-300 glow-hover">
                <CardHeader>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    {skills[category.key as keyof typeof skills].map(
                      (skill: any, skillIndex: number) => {
                        const Icon = Icons[skill.icon as keyof typeof Icons] as React.ComponentType<any>;
                        return (
                          <div key={skill.name}>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                {Icon && <Icon className="w-4 h-4 text-purple-400" />}
                                <span className="font-medium">{skill.name}</span>
                              </div>
                              <span className="text-sm text-gray-400 font-semibold">{skill.level}%</span>
                            </div>
                            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1.2, delay: skillIndex * 0.05, ease: "easeOut" }}
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                              />
                            </div>
                          </div>
                        );
                      }
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
