import type { Event } from '../../types';

export interface EventSlice {
  events: Event[];
  addEvent: (event: Event) => void;
  registerForEvent: (eventId: string) => Promise<void>;
}

export const createEventSlice = (set: any): EventSlice => ({
  events: [
    {
      id: '1',
      title: 'Beach Cleanup in Galle',
      description: 'Join us for a community beach cleanup to protect our beautiful coastline.',
      location: 'Galle',
      date: '2024-03-25',
      requiredSkills: ['Environmental Awareness', 'Teamwork'],
      organization: 'Clean Ocean Initiative',
      spots: 30,
      registeredVolunteers: 12,
      image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&q=80',
    },
    {
      id: '2',
      title: 'Teaching English in Kandy',
      description: 'Help local students improve their English language skills.',
      location: 'Kandy',
      date: '2024-03-28',
      requiredSkills: ['Teaching', 'English Proficiency'],
      organization: 'Education for All',
      spots: 10,
      registeredVolunteers: 4,
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
    },
    {
      id: '3',
      title: 'Community Garden Project',
      description: 'Help establish a sustainable community garden in Colombo.',
      location: 'Colombo',
      date: '2024-04-01',
      requiredSkills: ['Gardening', 'Community Building'],
      organization: 'Green Sri Lanka',
      spots: 20,
      registeredVolunteers: 8,
      image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80',
    },
  ],
  addEvent: (event) => set((state: any) => ({ events: [...state.events, event] })),
  registerForEvent: async (eventId) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    set((state: any) => ({
      events: state.events.map((event: Event) =>
        event.id === eventId
          ? { ...event, registeredVolunteers: event.registeredVolunteers + 1 }
          : event
      ),
    }));
  },
});