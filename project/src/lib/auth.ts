import { User } from '../types';

export function mapClerkUser(clerkUser: any): User {
  return {
    id: clerkUser.id,
    name: `${clerkUser.firstName} ${clerkUser.lastName}`,
    email: clerkUser.primaryEmailAddress?.emailAddress || '',
    location: clerkUser.publicMetadata.location as string || 'Colombo',
    skills: clerkUser.publicMetadata.skills as string[] || [],
    interests: clerkUser.publicMetadata.interests as string[] || [],
    points: clerkUser.publicMetadata.points as number || 0,
    level: clerkUser.publicMetadata.level as number || 1,
    completedEvents: clerkUser.publicMetadata.completedEvents as number || 0,
  };
}