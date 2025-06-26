import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="section text-center"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-2">Hello, I'm Brijesh Maurya 👋</h2>
      <p className="text-lg text-gray-700">
        I.T. Engeneer | Aspiring Data Scientist | AI & ML Enthusiast | Problem Solver
      </p>
    </motion.section>
  );
};

export default Hero;
