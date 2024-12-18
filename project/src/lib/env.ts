/**
 * Type-safe environment variable validation
 */
export function validateEnvironment(): void {
    const required = ['VITE_CLERK_PUBLISHABLE_KEY'];
  
    const missing = required.filter(
      (name) => !import.meta.env[name]
    );
  
    if (missing.length > 0) {
      throw new Error(
        `Missing required environment variables:\n${missing.join('\n')}\n` +
        'Make sure they are defined in your .env file.'
      );
    }
  }