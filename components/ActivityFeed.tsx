"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Activity as ActivityIcon, TrendingUp } from "lucide-react";

import type { Activity } from "./types";

interface ActivityFeedProps {
  activities: Activity[];
}

export default function ActivityFeed({
  activities,
}: ActivityFeedProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ActivityIcon className="h-5 w-5 text-emerald-400" />

          <h2 className="text-lg font-bold text-white">
            Live Activity
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

          <span className="text-xs uppercase tracking-widest text-slate-400">
            Live
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {/* Step 1: initial={false} blocks existing cards from replaying entry states */}
        <AnimatePresence mode="popLayout" initial={false}>
          {activities.map((activity, index) => (
            <motion.div
              key={`${activity.username}-${activity.time}-${index}`}
              // Step 2: Animate spatial position adjustments only
              layout="position"
              // Step 5: Execute layout entrance variant solely for the newest record
              initial={
                index === 0
                  ? {
                      opacity: 0,
                      y: -20,
                      scale: 0.98,
                    }
                  : false
              }
              // Step 4: Inject background flash array interpolation logic for the item at index 0
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                backgroundColor:
                  index === 0
                    ? [
                        "rgba(16,185,129,0.18)",
                        "rgba(255,255,255,0.04)"
                      ]
                    : "rgba(255,255,255,0.04)"
              }}
              // Step 3: Vertical-axis target metrics for exit bounds
              exit={{
                opacity: 0,
                scale: 0.98,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">
                    {activity.username}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {activity.time}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <TrendingUp
                    size={18}
                    className="text-emerald-400"
                  />

                  <span className="font-bold text-emerald-400">
                    +{activity.gain}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        
        {activities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-dashed border-white/10 p-8 text-center"
          >
            <p className="text-slate-400">
              Waiting for live activity...
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}