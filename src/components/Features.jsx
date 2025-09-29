import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: 'Exclusive Nitro Perks', desc: 'Get Discord Nitro features directly.' },
  { title: 'Server Boosts', desc: 'Boost your servers instantly.' },
  { title: 'Custom Roles', desc: 'Special roles for Nitro Elite members.' },
];

export default function Features() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-xl text-center hover:shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
