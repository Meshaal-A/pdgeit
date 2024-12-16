import { create } from 'zustand';
import { createEventSlice, type EventSlice } from './slices/eventSlice';
import { createPackageSlice, type PackageSlice } from './slices/packageSlice';
import { createUserSlice, type UserSlice } from './slices/userSlice';

type Store = EventSlice & PackageSlice & UserSlice;

export const useStore = create<Store>((set) => ({
  ...createEventSlice(set),
  ...createPackageSlice(),
  ...createUserSlice(set),
}));