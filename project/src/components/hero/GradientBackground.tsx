import React from "react";
import { motion } from "framer-motion";

export function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -inset-[10px] opacity-50"
        style={{
          background:
            "linear-gradient(1105deg, #FF6F61, #FF1493, #FFB6C1, #FF69B4, #FF6F61)",
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["100% 0%", "100% 100%"],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      {}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_20%,_white_50%)]" />
    </div>
  );
}
