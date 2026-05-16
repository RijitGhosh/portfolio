"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import socials from "@/content/socials.json";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
}

export default function GitHub() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = socials.github.split("/").pop();
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">GitHub Activity</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Latest contributions and open source projects
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-gray-400 text-lg">Loading repositories...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full hover:border-purple-500/50 transition-all duration-300 glow-hover">
                  <CardContent className="pt-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Folder className="w-5 h-5 text-purple-400" />
                        {repo.name}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                      {repo.description || "No description available"}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span className="font-semibold">{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span className="font-semibold">{repo.forks_count}</span>
                      </div>
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-purple-500" />
                          <span className="font-medium">{repo.language}</span>
                        </div>
                      )}
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                      aria-label={`View ${repo.name} repository`}
                    >
                      <Github className="w-4 h-4" />
                      View Repository
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 font-medium"
            aria-label="View all GitHub repositories"
          >
            <Github className="w-5 h-5" />
            View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
