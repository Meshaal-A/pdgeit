import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './components/auth/AuthProvider';
import { validateEnvironment } from './lib/env';
import App from './App';
import './index.css';

// Validate environment variables before app starts
validateEnvironment();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);