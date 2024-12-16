import React from 'react';
import { motion } from 'framer-motion';

export function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -inset-[10px] opacity-40"
        style={{
          background: 'linear-gradient(115deg, #FF6B6B, #FF8E53, #FF6B6B, #FF8E53)',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_20%,_white_60%)]" />
    </div>
  );
}