import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Nitro Elite
      </motion.h2>
      <motion.p
        className="max-w-2xl text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Nitro Elite is designed to enhance your Discord experience. Join our server to unlock exclusive features, Nitro perks, and server boosts. Be part of a vibrant community with special roles and early access to events.
      </motion.p>
    </section>
  );
}
