"use client";

import { AnimatePresence } from "framer-motion";
import { Wifi } from "lucide-react";

import PlayerRow from "./PlayerRow";
import Podium from "./Podium";

import type { Player } from "./types";

interface LeaderboardProps {
  players: Player[];
  status: "connecting" | "connected" | "disconnected";
}

export default function Leaderboard({
  players,
  status,
}: LeaderboardProps) {
  const first = players.find((p) => p.rank === 1);
  const second = players.find((p) => p.rank === 2);
  const third = players.find((p) => p.rank === 3);

  const others = players.filter((p) => p.rank > 3);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_70px_rgba(0,0,0,.45)]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />

      <div className="relative p-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-white">
              Crypto Leaderboard
            </h1>

            <p className="mt-2 text-slate-400">
              Real-time ranking powered by Go, Redis & WebSockets
            </p>
          </div>

          <div
            className={`flex items-center gap-3 rounded-full border px-4 py-2 ${
              status === "connected"
                ? "border-emerald-500/30 bg-emerald-500/10"
                : "border-red-500/30 bg-red-500/10"
            }`}
          >
            <Wifi
              size={18}
              className={
                status === "connected"
                  ? "text-emerald-400"
                  : "text-red-400"
              }
            />

            <span className="text-sm font-semibold capitalize text-white">
              {status}
            </span>
          </div>
        </div>

        <Podium
          first={first}
          second={second}
          third={third}
        />

        <div className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              Rankings
            </h2>

            <span className="text-sm text-slate-500">
              {players.length} Players
            </span>
          </div>

          <div className="space-y-3">
            <AnimatePresence>
              {others.map((player) => (
                <PlayerRow
                  key={player.id}
                  player={player}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}