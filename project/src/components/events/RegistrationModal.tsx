import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Users, CheckCircle, AlertCircle } from 'lucide-react';
import type { Event } from '../../types';

interface RegistrationModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isRegistering: boolean;
  isSuccess: boolean;
}

const modalVariants = {
  hidden: { 
    opacity: 0, 
    x: 100,
    y: 100,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 25 
    }
  },
  exit: { 
    opacity: 0,
    x: 100,
    y: 100,
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

const successIconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

export function RegistrationModal({
  event,
  isOpen,
  onClose,
  onConfirm,
  isRegistering,
  isSuccess,
}: RegistrationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-6 right-6 w-full max-w-md bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
        >
          {isSuccess ? (
            <div className="p-6">
              <motion.div
                variants={successIconVariants}
                initial="hidden"
                animate="visible"
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center"
              >
                <CheckCircle className="w-8 h-8 text-green-600" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
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
          ) : (
            <>
              <div className="relative bg-orange-600 p-4 text-white">
                <h3 className="text-lg font-semibold pr-8">
                  Confirm Registration
                </h3>
                <p className="text-sm text-orange-100">{event.title}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="p-4">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.registeredVolunteers}/{event.spots} spots filled</span>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-3 mb-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-orange-800 mb-1">Required Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.requiredSkills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onConfirm}
                  disabled={isRegistering}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isRegistering ? (
                    <div className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Registering...</span>
                    </div>
                  ) : (
                    'Confirm Registration'
                  )}
                </motion.button>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}