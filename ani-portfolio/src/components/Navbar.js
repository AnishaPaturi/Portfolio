"use client";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
                 bg-white/80 backdrop-blur-md 
                 rounded-full px-10 py-3 shadow-md"
    >
      <ul className="flex gap-8 list-none text-sm font-medium">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-gray-700 hover:text-purple-600 transition"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
