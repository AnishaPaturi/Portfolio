"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I’m a Computer Science student at KMIT with a strong focus on full-stack
          development and AI-powered applications. I enjoy building products that
          solve real-world problems — from student tools to intelligent systems.
        </p>
      </motion.div>
    </section>
  );
}
