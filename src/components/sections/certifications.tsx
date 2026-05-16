"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import certifications from "@/content/certifications.json";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Professional certifications and credentials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full hover:border-purple-500/50 transition-all duration-300 glow-hover">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-5 shadow-lg">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-purple-400 font-semibold">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{cert.date}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-sm text-gray-300 leading-relaxed">{cert.credential}</span>
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
