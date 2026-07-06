"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030712]">

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 70, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-20 h-[550px] w-[550px] rounded-full bg-indigo-500/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 120, -100, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[130px]"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-950/30 to-black/70" />

    </div>
  );
}