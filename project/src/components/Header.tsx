import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";
import { Bell, User } from "lucide-react";
import pledgeitLogo from "../pledgeit.png"; // Adjust the path to the logo image

export function Header() {
  const user = useStore((state) => state.user);

  return (
    <header className="bg-gradient-to-r to-[#f9eee8] text-[#de362e]">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Text */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={pledgeitLogo}
            alt="PledgeIt Logo"
            className="w-12 h-10 object-contain" // Adjust size as needed
          />
          <span className="text-2xl font-bold">PledgeIt</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link to="/events" className="hover:text-[#f9eee8] transition">
            Events
          </Link>
          <Link to="/leaderboard" className="hover:text-[#f9eee8] transition">
            Leaderboard
          </Link>
          {user ? (
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 cursor-pointer hover:text-[#f9eee8] transition" />
              <Link
                to="/profile"
                className="flex items-center space-x-2 hover:text-[#f9eee8] transition"
              >
                <User className="w-6 h-6" />
                <span>{user.name}</span>
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-[#de362e] px-4 py-2 rounded-full font-medium hover:bg-[#de362e] hover:text-[#f9eee8] transition"
            >
              Get Started
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
