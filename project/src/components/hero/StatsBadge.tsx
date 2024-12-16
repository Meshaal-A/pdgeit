import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Map } from 'lucide-react';
import { scaleIn, floatingAnimation } from '../../utils/animations';

interface StatsBadgeProps {
  icon: 'users' | 'calendar' | 'map';
  number: string;
  label: string;
  sublabel: string;
  delay?: number;
}

const icons = {
  users: Users,
  calendar: Calendar,
  map: Map,
};

export function StatsBadge({ icon, number, label, sublabel, delay = 0 }: StatsBadgeProps) {
  const Icon = icons[icon];

  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer border border-gray-100"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      custom={delay}
      animate={['visible', 'float']}
      variants={{
        ...scaleIn,
        float: floatingAnimation.float,
      }}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="p-2 rounded-xl bg-orange-100">
          <Icon className="w-6 h-6 text-orange-600" />
        </div>
        <motion.p 
          className="text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.2 }}
        >
          {number}
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.4 }}
      >
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-500">{sublabel}</p>
      </motion.div>
    </motion.div>
  );
}