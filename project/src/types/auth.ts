export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  location: string;
  interests: string[];
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    location: string;
    skills: string[];
    interests: string[];
    points: number;
    level: number;
    completedEvents: number;
  };
  token: string;
}