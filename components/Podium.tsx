"use client";

import { motion } from "framer-motion";
import { Coins, Medal, Trophy } from "lucide-react";
import Avatar from "./Avatar";

import type { Player } from "./types";

interface PodiumProps {
  first?: Player;
  second?: Player;
  third?: Player;
}

function AnimatedCounter({ value }: { value: number }) {
  return <span>{value.toLocaleString()}</span>;
}

function PodiumCard({
  player,
  place,
}: {
  player?: Player;
  place: 1 | 2 | 3;
}) {
  const config = {
    1: {
      icon: null,
      border: "border-yellow-400/40",
      glow: "shadow-[0_0_40px_rgba(250,204,21,.22)]",
      badge: "bg-yellow-400 text-black",
      height: "min-h-[390px]",
      scale: "md:scale-105",
      gradient: "from-yellow-400/15 to-transparent",
      scoreColor: "text-yellow-300",
      avatarRing: "ring-4 ring-yellow-400/40",
    },
    2: {
      icon: <Trophy className="h-7 w-7 text-slate-300" />,
      border: "border-slate-300/20",
      glow: "",
      badge: "bg-slate-300 text-black",
      height: "min-h-[360px]",
      scale: "",
      gradient: "from-slate-300/10 to-transparent",
      scoreColor: "text-slate-100",
      avatarRing: "ring-4 ring-slate-300/30",
    },
    3: {
      icon: <Medal className="h-7 w-7 text-orange-400" />,
      border: "border-orange-400/20",
      glow: "",
      badge: "bg-orange-400 text-black",
      height: "min-h-[360px]",
      scale: "",
      gradient: "from-orange-400/10 to-transparent",
      scoreColor: "text-orange-300",
      avatarRing: "ring-4 ring-orange-400/30",
    },
  }[place];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      className={`relative overflow-hidden rounded-3xl border bg-white/5 backdrop-blur-xl ${config.border} ${config.glow} ${config.height} ${config.scale}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`}
      />

      <div className="relative flex h-full flex-col items-center px-8 py-8 text-center">
        <div className="mb-6 flex w-full items-center justify-between">
          {config.icon ?? <div />}

          <div
            className={`rounded-full px-4 py-1 text-sm font-bold ${config.badge}`}
          >
            #{place}
          </div>
        </div>

        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className={`rounded-full ${config.avatarRing}`}
        >
          <Avatar
            name={player?.username ?? "Unknown"}
            size={96}
          />
        </motion.div>

        <h2 className="mt-6 text-2xl font-bold text-white">
          {player?.username ?? "Waiting..."}
        </h2>

        <div className="mt-8 flex items-center gap-2">
          <Coins className="h-5 w-5 text-emerald-400" />

          <span className={`text-4xl font-black ${config.scoreColor}`}>
            {player ? (
              <AnimatedCounter value={player.score} />
            ) : (
              "--"
            )}
          </span>
        </div>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-500">
          Points
        </p>
      </div>
    </motion.div>
  );
}

export default function Podium({
  first,
  second,
  third,
}: PodiumProps) {
  return (
    <motion.section
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative mt-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-[150px]" />

      <div className="grid items-end gap-6 md:grid-cols-3">
        <div className="order-2 md:order-1">
          <PodiumCard player={second} place={2} />
        </div>

        <div className="order-1 md:order-2">
          <PodiumCard player={first} place={1} />
        </div>

        <div className="order-3">
          <PodiumCard player={third} place={3} />
        </div>
      </div>
    </motion.section>
  );
}