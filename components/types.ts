export interface Player {
  id: string;
  username: string;
  score: number;
  rank: number;
}

export interface Activity {
  id: number;
  username: string;
  gain: number;
  time: string;
}

export interface LeaderboardMessage {
  type: "leaderboard";
  data: Player[];
}

export interface ActivityMessage {
  type: "activity";
  data: Activity;
}

export type WSMessage =
  | LeaderboardMessage
  | ActivityMessage;