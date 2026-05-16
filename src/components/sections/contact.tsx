"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import socials from "@/content/socials.json";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = socials.email;
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="glass-strong rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href={`mailto:${socials.email}`}
                  className="flex items-center gap-4 p-5 rounded-xl hover:bg-white/5 transition-colors group"
                  aria-label={`Send email to ${socials.email}`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Email</p>
                    <p className="text-white font-semibold">{socials.email}</p>
                  </div>
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl hover:bg-white/5 transition-colors group"
                  aria-label="Visit LinkedIn profile"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">LinkedIn</p>
                    <p className="text-white font-semibold">Connect with me</p>
                  </div>
                </a>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl hover:bg-white/5 transition-colors group"
                  aria-label="Visit GitHub profile"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">GitHub</p>
                    <p className="text-white font-semibold">Check my work</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2 font-medium">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2 font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    rows={5}
                    placeholder="Your message..."
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2 py-6 text-lg glow-hover">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
