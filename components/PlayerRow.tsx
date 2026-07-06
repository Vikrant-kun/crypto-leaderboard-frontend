"use client";

import { motion } from "framer-motion";
import { TrendingUp, Activity } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import Avatar from "./Avatar";

import type { Player } from "./types";

interface PlayerRowProps {
  player: Player;
}

export default function PlayerRow({
  player,
}: PlayerRowProps) {
  const initials = player.username.charAt(0).toUpperCase();

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 28,
      }}
      whileHover={{
        scale: 1.02,
        y: -3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
      "
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 via-cyan-500/5 to-transparent" />

      <div className="relative flex items-center justify-between p-5">

        <div className="flex items-center gap-5">

          <Avatar
              name={player.username}
              size={52}
          />

          <div>

            <h3 className="font-bold text-white">
              {player.username}
            </h3>

            <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">

              <Activity
                size={12}
                className="text-emerald-400"
              />

              Active Now

            </div>

          </div>

        </div>

        <div className="flex items-center gap-8">

          <div className="text-right">

            <p className="text-xs uppercase tracking-widest text-slate-500">
              Score
            </p>

            <div className="mt-1 text-2xl font-black text-emerald-400">
              <AnimatedCounter value={player.score} />
            </div>

          </div>

          <div className="flex items-center gap-3">

            <TrendingUp
              className="text-indigo-400"
              size={18}
            />

            <div className="rounded-xl border border-indigo-400/20 bg-indigo-500/10 px-4 py-2">

              <span className="text-sm font-black text-indigo-300">
                #{player.rank}
              </span>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}