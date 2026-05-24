<div align="center">
  <img src="client/public/favicon.ico" alt="BrainChain Logo" width="100"/>
  <h1>BrainChain</h1>
  <p><strong>The Ultimate Intellectual Arena for Polymaths, Organizers, and Quiz Enthusiasts</strong></p>
  <a href="https://brainchain-fugs.onrender.com/">Live Platform</a>
</div>

---

## 🌐 Overview

**BrainChain** is a dynamic, multiplayer quiz and tournament platform engineered for intellectual game enthusiasts, event organizers, polymaths, quiz writers, and informative content creators. We believe that knowledge should be both engaging and rewarding. 

Our ecosystem allows users to compete in high-stakes intellectual tournaments, discover fascinating facts in their free time, and monetize their expertise by sharing high-quality questions and educational content. Whether you are looking to spend your leisure time effectively or host a large-scale intellectual competition, BrainChain provides the robust infrastructure to make it happen.

---

## 🏗️ Technical Architecture & Stack

BrainChain is built with a modern, high-performance architecture, utilizing a decoupled Client-Server model with real-time bidirectional communication.

### 🎨 Frontend (Client)
- **Framework:** React.js powered by [Vite](https://vitejs.dev/) for ultra-fast HMR and optimized builds.
- **State Management:** [Valtio](https://valtio.pmnd.rs/) for proxy-based, highly reactive, and boilerplate-free state handling (`app.store.js`).
- **3D Graphics & Animations:** Three.js and React Three Fiber (`@react-three/fiber`, `@react-three/drei`) to render immersive, hardware-accelerated 3D background scenes and interactive elements.
- **Styling:** CSS Modules (`*.module.css`) combined with a custom design system for modular, conflict-free, and highly aesthetic UI components.
- **Routing:** Custom lightweight routing implementation tailored for seamless SPA transitions without heavy dependencies.

### ⚙️ Backend (Server)
- **Runtime:** Node.js.
- **Communication Protocol:** Native WebSockets (`ws`). Unlike traditional HTTP polling, BrainChain relies entirely on a persistent WebSocket connection for real-time, low-latency game state synchronization, lobby management, and live scoring.
- **Architecture:** Event-driven monolithic server (`api.js`) that handles client commands (`CREATE_GAME`, `JOIN_GAME`, `SEND_ANSR`), state persistence, and broadcast emitting.

### 🗄️ Database
- **Primary Database:** MongoDB.
- **Cloud Provider:** Azure Cosmos DB for MongoDB.
- **Purpose:** Securely stores thousands of categorized, highly complex questions, user data, and tournament records. The database architecture is designed for rapid querying and batch data ingestion via custom utility scripts.

### 🚀 Deployment
- **Platform:** Render (Temporary Hosting Environment).
- *Note:* The current deployment on Render (`https://brainchain-fugs.onrender.com/`) serves as our staging/beta environment. As the platform scales, the infrastructure is designed to be easily containerized and migrated to highly available clusters (e.g., AWS ECS or Kubernetes) to handle concurrent WebSocket connections at scale.

---

## 📂 Repository Structure

The repository follows a clean, modular structure, separating the client application from backend services and utility scripts.

```text
BrainChain/
├── api.js                   # The core Node.js WebSocket server and game logic handler.
├── client/                  # Frontend React application (Vite workspace).
│   ├── index.html           # Main HTML entry point.
│   ├── public/              # Static assets (favicons, fonts, images).
│   └── src/                 
│       ├── app.jsx          # Root React component & WebSocket client initializer.
│       ├── core.jsx         # Core layout wrappers.
│       ├── components/      # Reusable UI primitives (Buttons, Icons, Modals).
│       ├── interface/       # Page-level UI views (Game, Home, Play, Controls, Join).
│       ├── scene/           # 3D objects and Three.js canvas configurations.
│       ├── stores/          # Valtio state stores (User state, Game state).
│       ├── styles/          # Global tokens, variables, and CSS Modules.
│       └── utilities/       # Client-side helper functions and formatters.
├── materials/               # Markdown files (curriculum and study guides) used by AI to generate questions.
├── scratch/                 # Temporary and batch scripts (e.g., inserting data to MongoDB).
├── utils/                   # Server-side utilities (e.g., core.utils.js for question generation logic).
└── .env                     # Environment variables (DB connection strings, Ports).
```

### 🗝️ Key Files & Roles
* `api.js`: The brain of the backend. It maintains the WebSocket server, manages connected `clients` and active `games`, and handles all incoming binary/JSON payloads.
* `client/src/stores/app.store.js`: The single source of truth for the frontend UI. Uses Valtio to magically trigger React re-renders when the WebSocket mutates the game state.
* `client/src/interface/game.ui.jsx`: The most complex view, responsible for rendering the live game board, handling answer submissions, timer countdowns, and displaying KaTeX/Markdown rich-text questions.
* `scratch/insert_batch_*.js`: Essential scripts for CI/CD and DB administration. Used to programmatically ingest hundreds of categorized questions into the Cosmos DB instance.

---

## 🛠️ Local Development Setup

To run BrainChain locally, you need to spin up both the WebSocket API and the Vite frontend.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cookie-bite/BrainChain.git
   cd BrainChain
   ```

2. **Install dependencies:**
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd client
   npm install
   cd ..
   ```

3. **Environment Variables:**
   Ensure you have a `.env` file in the root directory with the appropriate `DB_CONNECT` string.

4. **Run the Application:**
   *Terminal 1 (Backend):*
   ```bash
   npm run dev
   ```
   *Terminal 2 (Frontend):*
   ```bash
   npm run client
   ```

5. Access the app at `http://localhost:5173`.

---

<div align="center">
  <i>Developed with passion for the global intellectual community.</i>
</div>
