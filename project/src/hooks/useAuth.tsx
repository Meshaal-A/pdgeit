import { useUser } from "@clerk/clerk-react";
import { useStore } from "../store/useStore";
import { useEffect } from "react";
import { mapClerkUser } from "../lib/auth";

export function useAuth() {
  const { user: clerkUser, isSignedIn, isLoaded } = useUser();
  const { setUser } = useStore();

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn && clerkUser) {
        const mappedUser = mapClerkUser(clerkUser);
        setUser(mappedUser);
      } else {
        setUser(null);
      }
    }
  }, [clerkUser, isSignedIn, isLoaded, setUser]);

  return {
    isAuthenticated: isSignedIn,
    isLoading: !isLoaded,
    user: clerkUser,
  };
}
