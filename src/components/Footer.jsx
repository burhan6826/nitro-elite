import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-400 relative z-10">
      <p>© 2025 Nitro Elite</p>
      <motion.a
        href="https://discord.gg/gCAm2KQkVe"
        className="underline text-blue-400 mt-2 block"
        whileHover={{ scale: 1.1, textShadow: '0px 0px 8px #00f' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Join our Discord
      </motion.a>
    </footer>
  );
}
