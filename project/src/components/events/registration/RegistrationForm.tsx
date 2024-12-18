import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, CheckCircle } from 'lucide-react';
import { useRegistration } from '../../../hooks/useRegistration';
import type { Event } from '../../../types';

interface RegistrationFormProps {
  event: Event;
  onClose: () => void;
}

export function RegistrationForm({ event, onClose }: RegistrationFormProps) {
  const { register, isRegistering, isSuccess } = useRegistration();

  const handleConfirm = async () => {
    await register(event.id);
  };

  if (isSuccess) {
    return (
      <div className="p-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center"
        >
          <CheckCircle className="w-8 h-8 text-green-600" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
            Registration Confirmed!
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-gray-900 mb-2">Event Details:</h4>
            <div className="space-y-2 text-gray-600 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition"
          >
            Got it!
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Confirm Registration
      </h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-5 h-5 mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-5 h-5 mr-2" />
          <span>{event.registeredVolunteers}/{event.spots} spots filled</span>
        </div>
      </div>

      <div className="bg-orange-50 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-orange-800 mb-2">Required Skills</h4>
        <div className="flex flex-wrap gap-2">
          {event.requiredSkills.map((skill) => (
            <span
              key={skill}
              className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={handleConfirm}
        disabled={isRegistering}
        className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition disabled:opacity-50"
      >
        {isRegistering ? 'Registering...' : 'Confirm Registration'}
      </button>
    </div>
  );
}