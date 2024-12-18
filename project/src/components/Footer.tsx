import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import pledgeitLogo from "../pledgeit.png";

export function Footer() {
  return (
    <footer className="relative bg-[#8f1a14] text-white font-poppins overflow-hidden">
      {/* Animated Border Top */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff7b72] to-[#de362e]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={pledgeitLogo}
                alt="PledgeIt Logo"
                className="w-12 h-8 object-contain"
              />
              <span className="text-2xl font-bold tracking-wide text-gray-100">
                PledgeIt
              </span>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Empowering volunteers across Sri Lanka to make a difference in
              their communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Find Events", "Organizations", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(" ", "")}`}
                      className="text-gray-200 hover:text-white transition-all duration-300 ease-in-out"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Locations</h3>
            <ul className="space-y-2">
              {["Colombo", "Galle", "Kandy"].map((city) => (
                <li
                  key={city}
                  className="text-gray-200 hover:text-gray-50 transition-all duration-300"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{
                    scale: 1.2,
                    color: "#fff",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-200 hover:text-white"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-[#e94e3d] text-center">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">PledgeIt</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
