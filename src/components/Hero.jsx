import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 z-10 relative">
      <motion.h1
        className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Nitro Elite
      </motion.h1>
      <motion.p
        className="mt-6 text-xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Join the ultimate Discord experience! Exclusive perks, boosts, and more.
      </motion.p>
      <motion.a
        href="https://discord.gg/gCAm2KQkVe"
        className="mt-10 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 font-semibold text-lg"
        whileHover={{ scale: 1.1 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Join our Discord
      </motion.a>
    </section>
  );
}
