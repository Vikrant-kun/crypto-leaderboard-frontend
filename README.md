# 🚀 Crypto Leaderboard Frontend

A modern real-time cryptocurrency leaderboard built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **WebSockets**.

This frontend consumes a high-performance Go backend that streams live leaderboard updates through WebSockets while maintaining persistent rankings with Redis and PostgreSQL.

The application focuses on smooth UI interactions, animated ranking updates, responsive layouts, and real-time visualization of player activity.

---

## ✨ Features

### ⚡ Real-Time Updates

- Live leaderboard synchronization using WebSockets
- Automatic updates without page refresh
- Connection status indicator
- Instant score changes across all connected clients

---

### 🏆 Animated Podium

- Dedicated podium for Top 3 players
- Dynamic player avatars
- Animated score counters
- Rank-specific styling
- Floating motion effects
- Smooth transitions when rankings change

---

### 📊 Live Leaderboard

- Displays complete player rankings
- Animated list updates
- Responsive player cards
- Rank badges
- Live score changes
- Glassmorphism design

---

### 📡 Live Activity Feed

Real-time event stream displaying:

- Player score increases
- Recently updated players
- Smooth entry animations
- Automatic feed trimming
- Live status indicator

---

### 🎨 Modern UI

- Glassmorphism interface
- Gradient backgrounds
- Soft glow effects
- Responsive layout
- Smooth Framer Motion animations
- Dark theme

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| Next.js 16 | React Framework |
| React 19 | UI Library |
| TypeScript | Static Typing |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| WebSockets | Real-time Communication |

---

## 📁 Project Structure

```
components/
│
├── ActivityFeed.tsx
├── Avatar.tsx
├── Background.tsx
├── Dashboard.tsx
├── LeaderBoard.tsx
├── PlayerRow.tsx
├── Podium.tsx
└── types.ts

app/
│
├── page.tsx
├── globals.css
└── layout.tsx
```

---

## 🖥 Screenshots

### Leaderboard

> *(Add screenshot here)*

---

### Live Activity Feed

> *(Add screenshot here)*

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/crypto-leaderboard-frontend.git
```

Move into the project

```bash
cd crypto-leaderboard-frontend
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

The application will run on

```
http://localhost:3000
```

---

## 🔌 Backend Requirement

This project requires the companion backend to be running.

Default API endpoints:

```
REST API

http://localhost:8080/api/leaderboard
```

```
WebSocket

ws://localhost:8080/ws/leaderboard
```

Backend Repository

```
(Add backend repository link here)
```

---

## 🔄 Data Flow

```
Backend
     │
     │ REST
     ▼
Initial Leaderboard

Backend
     │
     │ WebSocket
     ▼
Live Score Updates
     │
     ▼
React State
     │
     ▼
Animated UI
```

---

## 📡 WebSocket Events

### Leaderboard Update

```json
{
  "type": "leaderboard",
  "data": [
    {
      "id": "user_01",
      "username": "Alice_BTC",
      "score": 15420,
      "rank": 1
    }
  ]
}
```

---

### Activity Event

```json
{
  "type": "activity",
  "data": {
    "username": "Alice_BTC",
    "gain": 50,
    "time": "Just now"
  }
}
```

---

## 🎯 Design Goals

The interface was designed with three primary objectives:

- Provide instant visual feedback for live score changes.
- Maintain smooth animations even during continuous updates.
- Present leaderboard information in a clean, modern dashboard layout.

---

## 🚀 Future Improvements

- Player profile pages
- Search players
- Historical score charts
- Pagination
- Theme switcher
- Authentication
- Multiple leaderboards
- Tournament mode
- Mobile optimizations
- Sound notifications

---

## 📄 License

This project is released under the MIT License.

---

## 👨‍💻 Author

**Vikrant**

GitHub

https://github.com/Vikrant-kun

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
