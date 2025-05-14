import React from "react";
import { motion } from "framer-motion";

export default function Lines() {
  const width = 900;
  const height = 200;
  const count = 5;

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <mask id="curveMask">
          {Array.from({ length: count }).map((_, i) => {
            const x = i * (width / (count - 1));
            return (
              <path
                key={i}
                d={`M${x},0 C${x},150 ${width / 2},75 ${width / 2},200`}
                stroke="white"
                strokeWidth="3.5"
                fill="none"
              />
            );
          })}
        </mask>

        <linearGradient id="animatedGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="blue" />
          <stop offset="50%" stopColor="aqua" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
      </defs>

      <g mask="url(#curveMask)">
        <rect x="0" y="0" width={width} height={height} fill="#333" />
        <motion.rect
          x="-900"
          y="0"
          width="1800"
          height={height}
          fill="url(#animatedGradient)"
          animate={{ x: [ -900, 0 ] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </g>
    </svg>
  );
}
