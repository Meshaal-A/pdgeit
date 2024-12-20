import React from 'react';
import { useMap } from 'react-leaflet';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, Home } from 'lucide-react';

export function MapControls() {
  const map = useMap();

  const controls = [
    {
      icon: ZoomIn,
      action: () => map.zoomIn(),
      label: 'Zoom in',
    },
    {
      icon: ZoomOut,
      action: () => map.zoomOut(),
      label: 'Zoom out',
    },
    {
      icon: Home,
      action: () => map.setView([7.8731, 80.7718], 8),
      label: 'Reset view',
    },
  ];

  return (
    <div className="absolute right-4 top-4 z-[1000]">
      <div className="bg-white rounded-lg shadow-lg p-2 space-y-2">
        {controls.map((control) => (
          <motion.button
            key={control.label}
            onClick={control.action}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={control.label}
          >
            <control.icon className="w-5 h-5 text-gray-600" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}