import { useState } from 'react';
import { useStore } from '../store/useStore';

export function useRegistration() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const registerForEvent = useStore((state) => state.registerForEvent);

  const register = async (eventId: string) => {
    setIsRegistering(true);
    try {
      await registerForEvent(eventId);
      setIsSuccess(true);
      
      // Simulate email notification
      console.log('Registration confirmation email sent');
      
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error state if needed
    } finally {
      setIsRegistering(false);
    }
  };

  return {
    register,
    isRegistering,
    isSuccess,
  };
}