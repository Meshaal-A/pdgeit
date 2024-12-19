import React from "react";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { useAuth } from "../hooks/useAuth";
import pledgeitLogo from "../pledgeit.png";

export function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <header
      className="shadow-sm bg-gradient-to-r from-[#ffedd5] via-[#ffdab6] to-[#ffb68e] 
      bg-cover bg-center"
    >
      <nav className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo - Left Aligned */}
        <Link
          to="/"
          className="flex items-center space-x-2 hover:opacity-90 transition"
        >
          <img
            src={pledgeitLogo}
            alt="PledgeIt Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold tracking-wide text-[#a33900]">
            PledgeIt
          </span>
        </Link>

        {/* Navigation Links - Center */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link
            to="/events"
            className="text-gray-600 hover:text-[#dd4a1d] transition duration-300"
          >
            Events
          </Link>
          <Link
            to="/leaderboard"
            className="text-gray-600 hover:text-[#dd4a1d] transition duration-300"
          >
            Leaderboard
          </Link>
        </div>

        {/* Authentication Section - Right */}
        <div className="flex items-center">
          {isAuthenticated ? (
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8",
                },
              }}
              afterSignOutUrl="/"
            />
          ) : (
            <Link
              to="/login"
              className="bg-[#dd4a1d] text-white px-4 py-1 rounded-full text-sm font-medium shadow hover:bg-[#a33900] transition duration-300"
            >
              Get Started
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
