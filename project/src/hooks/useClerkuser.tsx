import { useUser } from '@clerk/clerk-react';
import { useStore } from '../store/useStore';
import { useEffect } from 'react';

export function useClerkUser() {
  const { user: clerkUser, isSignedIn } = useUser();
  const { setUser } = useStore();

  useEffect(() => {
    if (isSignedIn && clerkUser) {
      // maps the clerks model to our model
      setUser({
        id: clerkUser.id,
        name: `${clerkUser.firstName} ${clerkUser.lastName}`,
        email: clerkUser.primaryEmailAddress?.emailAddress || '',
        location: clerkUser.publicMetadata.location as string || 'Colombo',
        skills: clerkUser.publicMetadata.skills as string[] || [],
        interests: clerkUser.publicMetadata.interests as string[] || [],
        points: clerkUser.publicMetadata.points as number || 0,
        level: clerkUser.publicMetadata.level as number || 1,
        completedEvents: clerkUser.publicMetadata.completedEvents as number || 0,
      });
    } else {
      setUser(null);
    }
  }, [clerkUser, isSignedIn, setUser]);

  return { clerkUser, isSignedIn };
}