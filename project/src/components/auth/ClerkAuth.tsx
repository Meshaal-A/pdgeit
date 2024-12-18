import { SignIn, SignUp } from '@clerk/clerk-react';
import { useLocation } from 'react-router-dom';

interface ClerkAuthProps {
  type: 'signIn' | 'signUp';
}

export function ClerkAuth({ type }: ClerkAuthProps) {
  const location = useLocation();
  const redirectUrl = new URLSearchParams(location.search).get('redirect') || '/dashboard';

  const appearance = {
    variables: {
      colorPrimary: '#ea580c',
      colorTextOnPrimaryBackground: '#ffffff',
    },
    elements: {
      formButtonPrimary: 
        'bg-orange-600 hover:bg-orange-700 text-white transition-colors',
      socialButtonsBlockButton: 
        'border-gray-300 hover:bg-gray-50 transition-colors',
      socialButtonsBlockButtonText: 
        'text-gray-600',
      formFieldInput: 
        'rounded-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500',
      card: 
        'rounded-xl shadow-md',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {type === 'signIn' ? (
          <SignIn 
            appearance={appearance}
            redirectUrl={redirectUrl}
            routing="path"
            path="/login"
          />
        ) : (
          <SignUp 
            appearance={appearance}
            redirectUrl={redirectUrl}
            routing="path"
            path="/register"
          />
        )}
      </div>
    </div>
  );
}