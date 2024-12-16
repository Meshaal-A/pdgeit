import { cityData } from '../data/cityData';

export function getCityCoordinates(cityName: string): [number, number] | null {
  const city = cityData.find(
    (city) => city.name.toLowerCase() === cityName.toLowerCase()
  );
  
  return city ? [city.lat, city.lng] : null;
}

export function calculateMapBounds(coordinates: [number, number][]) {
  if (coordinates.length === 0) return null;

  const lats = coordinates.map(([lat]) => lat);
  const lngs = coordinates.map(([, lng]) => lng);

  return [
    [Math.min(...lats), Math.min(...lngs)],
    [Math.max(...lats), Math.max(...lngs)],
  ];
}