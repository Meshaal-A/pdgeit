import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, MapPin } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';

const features = [
  {
    icon: Heart,
    title: 'Make an Impact',
    description: 'Contribute to meaningful causes and create positive change in your community',
  },
  {
    icon: Users,
    title: 'Join the Community',
    description: 'Connect with like-minded volunteers and grow together',
  },
  {
    icon: Award,
    title: 'Earn Recognition',
    description: 'Get rewarded for your contributions with badges and certificates',
  },
  {
    icon: MapPin,
    title: 'Local Focus',
    description: 'Find opportunities near you in major cities across Sri Lanka',
  },
];

export function HeroFeatures() {
  return (
    <motion.div 
      className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 1.2,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="relative group"
          variants={fadeInUp}
        >
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity blur" />
          <div className="relative bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}