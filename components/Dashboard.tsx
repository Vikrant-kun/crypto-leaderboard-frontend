"use client";

import ActivityFeed from "./ActivityFeed";
import LeaderBoard from "./LeaderBoard";

const demoActivities = [
  {
    id: 1,
    username: "Alice_BTC",
    gain: 40,
    time: "Just now",
  },
  {
    id: 2,
    username: "Bob_ETH",
    gain: 40,
    time: "5 sec ago",
  },
  {
    id: 3,
    username: "Charlie_SOL",
    gain: 40,
    time: "10 sec ago",
  },
  {
    id: 4,
    username: "Emma_DOGE",
    gain: 40,
    time: "14 sec ago",
  },
  {
    id: 5,
    username: "David_XRP",
    gain: 40,
    time: "20 sec ago",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[2fr_420px]">
        <LeaderBoard/>

        <div className="sticky top-10 h-fit">
          <ActivityFeed activities={demoActivities} />
        </div>
      </div>
    </main>
  );
}