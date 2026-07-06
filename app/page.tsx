"use client";

import { useEffect, useState } from "react";

import Background from "@/components/Background";
import Leaderboard from "@/components/LeaderBoard";
import ActivityFeed from "@/components/ActivityFeed";
import type { Player, Activity } from "@/components/types";

export default function Home() {
const [activities, setActivities] = useState<Activity[]>([]);

    const [players, setPlayers] = useState<Player[]>([]);

    const [status, setStatus] = useState<
        "connecting" | "connected" | "disconnected"
    >("connecting");

    useEffect(() => {

        async function loadLeaderboard() {

            try {

                const res = await fetch(
                    "http://localhost:8080/api/leaderboard"
                );

                const data: Player[] = await res.json();

                setPlayers(data);

            } catch (err) {

                console.error(err);

            }

        }

        loadLeaderboard();

        const ws = new WebSocket(
            "ws://localhost:8080/ws/leaderboard"
        );

        ws.onopen = () => setStatus("connected");

        ws.onclose = () => setStatus("disconnected");

        ws.onerror = () => setStatus("disconnected");

        ws.onmessage = (event) => {

    const message = JSON.parse(event.data);

    console.log("WS:", message);

    switch (message.type) {
        case "leaderboard":
            setPlayers(message.data);
            break;

        case "activity":
            setActivities(prev => [
                message.data,
                ...prev,
            ].slice(0, 10));
            break;

        default:
            console.log("Unknown message:", message);
    }
};

        return () => ws.close();

    }, []);

    return (

        <main className="relative min-h-screen overflow-hidden px-8 py-10">

            <Background />

            <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[2fr_420px]">

                <Leaderboard
                    players={players}
                    status={status}
                />

                <ActivityFeed
    activities={activities}
/>

            </div>

        </main>

    );

}