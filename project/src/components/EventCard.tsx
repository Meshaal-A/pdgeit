import React, { useState } from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import { useStore } from '../store/useStore';
import { RegistrationModal } from './events/RegistrationModal';
import type { Event } from '../types';
import { useRegistration } from '../hooks/useRegistration';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, isRegistering, isSuccess } = useRegistration();
  const user = useStore((state) => state.user);

  const handleRegister = async () => {
    if (!user) {
      // Redirect to login if not authenticated
      window.location.href = `/login?redirect=/events/${event.id}`;
      return;
    }
    setIsModalOpen(true);
  };

  const handleConfirmRegistration = async () => {
    await register(event.id);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
          <p className="text-gray-600 mb-4">{event.description}</p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-500">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Users className="w-5 h-5 mr-2" />
              <span>{event.registeredVolunteers}/{event.spots} spots filled</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {event.requiredSkills.map((skill) => (
              <span
                key={skill}
                className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <button
            onClick={handleRegister}
            disabled={event.registeredVolunteers >= event.spots}
            className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {event.registeredVolunteers >= event.spots ? 'Event Full' : 'Register Now'}
          </button>
        </div>
      </div>

      <RegistrationModal
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmRegistration}
        isRegistering={isRegistering}
        isSuccess={isSuccess}
      />
    </>
  );
}