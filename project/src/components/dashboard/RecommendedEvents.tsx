import React from 'react';
import { useStore } from '../../store/useStore';
import { EventCard } from '../EventCard';

export function RecommendedEvents() {
  const { events, registerForEvent } = useStore();
  const recommendedEvents = events.slice(0, 3); // In a real app, implement recommendation logic

  if (recommendedEvents.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onRegister={registerForEvent}
          />
        ))}
      </div>
    </div>
  );
}