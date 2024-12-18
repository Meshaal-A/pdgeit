import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Bell } from 'lucide-react';
import { UserButton } from '@clerk/clerk-react';
import { useAuth } from '../hooks/useAuth';

export function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="w-8 h-8" />
          <span className="text-2xl font-bold">PledgeIt</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/events" className="hover:text-orange-200 transition">
            Events
          </Link>
          <Link to="/leaderboard" className="hover:text-orange-200 transition">
            Leaderboard
          </Link>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 cursor-pointer hover:text-orange-200 transition" />
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-8 h-8',
                  },
                }}
                afterSignOutUrl="/"
              />
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-white text-orange-600 px-4 py-2 rounded-full font-medium hover:bg-orange-100 transition"
            >
              Get Started
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}