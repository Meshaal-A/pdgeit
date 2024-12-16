import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromRight } from '../../utils/animations';

export function HeroImage() {
  return (
    <motion.div 
      className="absolute right-0 top-0 w-1/2 h-full hidden lg:block"
      variants={slideInFromRight}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="relative w-full h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent" />
        <motion.img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
          alt="Volunteers working together"
          className="w-full h-full object-cover rounded-l-3xl"
          initial={{ filter: 'blur(10px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}