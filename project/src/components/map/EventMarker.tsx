import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Event } from '../../types';
import { getCityCoordinates } from '../../utils/mapUtils';

interface EventMarkerProps {
  event: Event;
}

export function EventMarker({ event }: EventMarkerProps) {
  const coordinates = getCityCoordinates(event.location);
  
  if (!coordinates) return null;

  return (
    <Marker
      position={coordinates}
      icon={new Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      })}
    >
      <Popup className="w-64">
        <div className="p-2">
          <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{event.description}</p>
          
          <div className="space-y-2 mb-3">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              <span>{event.registeredVolunteers}/{event.spots} spots</span>
            </div>
          </div>

          <Link
            to={`/events/${event.id}`}
            className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition"
          >
            View Details
          </Link>
        </div>
      </Popup>
    </Marker>
  );
}