"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-6 text-sm font-medium">
              <a href={p.github} target="_blank" className="hover:text-purple-600">
                GitHub →
              </a>
              {p.live && (
                <a href={p.live} target="_blank" className="hover:text-purple-600">
                  Live →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
