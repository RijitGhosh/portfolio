"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import socials from "@/content/socials.json";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 text-gray-400 text-lg"
          >
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
            <span>by Rijit Ghosh</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl hover:bg-white/5 transition-colors text-gray-400 hover:text-white group"
              aria-label="Visit GitHub profile"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl hover:bg-white/5 transition-colors text-gray-400 hover:text-white group"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="p-3 rounded-xl hover:bg-white/5 transition-colors text-gray-400 hover:text-white group"
              aria-label={`Send email to ${socials.email}`}
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          © {new Date().getFullYear()} Rijit Ghosh. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
