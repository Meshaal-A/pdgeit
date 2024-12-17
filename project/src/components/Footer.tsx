import React from "react";
import { Heart, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import pledgeitLogo from "../pledgeit.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white font-poppins">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={pledgeitLogo}
                alt="PledgeIt Logo"
                className="w-12 h-8 object-contain"
              />
              <span className="text-xl font-bold">PledgeIt</span>
            </div>
            <p className="text-gray-400">
              Empowering volunteers across Sri Lanka to make a difference in
              their communities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white">
                  Find Events
                </Link>
              </li>
              <li>
                <Link
                  to="/organizations"
                  className="text-gray-400 hover:text-white"
                >
                  Organizations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Colombo</li>
              <li className="text-gray-400">Galle</li>
              <li className="text-gray-400">Kandy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PledgeIt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
