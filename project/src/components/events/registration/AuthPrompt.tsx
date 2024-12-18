import React from 'react';
import { SignUpButton, SignInButton } from '@clerk/clerk-react';
import type { Event } from '../../../types';

interface AuthPromptProps {
  event: Event;
}

export function AuthPrompt({ event }: AuthPromptProps) {
  const redirectUrl = `/events?register=${event.id}`;

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Join to Register
      </h3>
      <p className="text-gray-600 mb-6">
        Create an account or sign in to register for this event.
      </p>

      <div className="space-y-4">
        <SignUpButton mode="modal" afterSignUpUrl={redirectUrl}>
          <span className="block w-full">
            <button type="button" className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition">
              Create Account
            </button>
          </span>
        </SignUpButton>

        <SignInButton mode="modal" afterSignInUrl={redirectUrl}>
          <span className="block w-full">
            <button type="button" className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition">
              Sign In
            </button>
          </span>
        </SignInButton>
      </div>
    </div>
  );
}