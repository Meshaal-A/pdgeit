import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { env } from "../config/env";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <ClerkProvider publishableKey={env.clerk.publishableKey}>
      {children}
    </ClerkProvider>
  );
}
