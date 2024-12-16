import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useStore } from '../../store/useStore';
import { EventMarker } from './EventMarker';
import { MapControls } from './MapControls';
import { cityData } from '../../data/cityData';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in react-leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const CENTER_POSITION: [number, number] = [7.8731, 80.7718]; // Sri Lanka center

export function EventMap() {
  const events = useStore((state) => state.events);

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={CENTER_POSITION}
        zoom={8}
        className="w-full h-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Major Cities */}
        {cityData.map((city) => (
          <Marker
            key={city.name}
            position={[city.lat, city.lng]}
            icon={new Icon({
              iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
            })}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">{city.name}</h3>
                <p className="text-sm text-gray-600">{city.events} active events</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Event Markers */}
        {events.map((event) => (
          <EventMarker key={event.id} event={event} />
        ))}

        <MapControls />
      </MapContainer>
    </div>
  );
}