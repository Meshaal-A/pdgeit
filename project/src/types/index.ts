export interface User {
  id: string;
  name: string;
  email: string;
  location: string;
  skills: string[];
  interests: string[];
  points: number;
  level: number;
  completedEvents: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  requiredSkills: string[];
  organization: string;
  spots: number;
  registeredVolunteers: number;
  image: string;
}

export interface VolunteerPackage {
  id: string;
  name: string;
  description: string;
  level: number;
  benefits: string[];
  requiredPoints: number;
}