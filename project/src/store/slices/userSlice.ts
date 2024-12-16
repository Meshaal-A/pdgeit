import type { User } from '../../types';

export interface UserSlice {
  user: User | null;
  setUser: (user: User | null) => void;
  updateUserStats: (eventId: string) => void;
}

export const createUserSlice = (set: any): UserSlice => ({
  user: null,
  setUser: (user) => set({ user }),
  updateUserStats: () => {
    set((state: any) => ({
      user: state.user ? {
        ...state.user,
        points: state.user.points + 50,
        completedEvents: state.user.completedEvents + 1,
      } : null,
    }));
  },
});