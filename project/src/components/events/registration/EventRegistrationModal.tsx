import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { SignUpButton } from '@clerk/clerk-react';
import { RegistrationForm } from './RegistrationForm';
import { AuthPrompt } from './AuthPrompt';
import { Modal } from '../../ui/Modal';
import type { Event } from '../../../types';

interface EventRegistrationModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

export function EventRegistrationModal({ event, isOpen, onClose }: EventRegistrationModalProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isAuthenticated ? (
        <RegistrationForm event={event} onClose={onClose} />
      ) : (
        <AuthPrompt event={event} />
      )}
    </Modal>
  );
}