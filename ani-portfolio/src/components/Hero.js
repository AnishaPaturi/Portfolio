"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Turning Ideas Into{" "}
          <span className="text-purple-600">Real-World Applications</span>
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          Full-stack & AI-focused developer building scalable, impactful products.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:scale-105 transition"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-white transition"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
