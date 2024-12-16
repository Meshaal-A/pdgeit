import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedText } from './AnimatedText';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export function HeroContent() {
  return (
    <motion.div 
      className="relative"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="flex items-center gap-2 mb-6 text-orange-600"
        variants={fadeInUp}
      >
        <Heart className="w-6 h-6" />
        <span className="text-lg font-medium">Welcome to PledgeIt</span>
      </motion.div>

      <AnimatedText 
        text="Empowering Change"
        className="text-6xl font-bold text-gray-900 mb-2 leading-tight"
      />
      
      <motion.span 
        className="text-6xl font-bold block mb-6"
        variants={fadeInUp}
        custom={0.4}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 animate-gradient">
          Across Sri Lanka
        </span>
      </motion.span>
      
      <motion.p 
        className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
        variants={fadeInUp}
        custom={0.6}
      >
        Join a vibrant community of change-makers transforming lives in Colombo, 
        Galle, Kandy, and beyond. Your journey to making a difference starts here.
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap gap-4"
        variants={fadeInUp}
        custom={0.8}
      >
        <Link
          to="/register"
          className="group relative px-8 py-4 rounded-full font-medium text-white overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
          <div className="relative flex items-center gap-2">
            <span>Start Your Journey</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
        </Link>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/about"
            className="px-8 py-4 rounded-full font-medium border-2 border-orange-600 text-orange-600 hover:bg-orange-50 transition-colors block"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}