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
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-full px-8 py-3 shadow"
    >
      <ul className="flex gap-6 text-sm font-medium list-none">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-purple-600 transition">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
