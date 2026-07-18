import React, { useState } from "react";
import { GameProvider } from "./context/GameContext";
import { Header } from "./components/layout/Header";
import { TabBar } from "./components/layout/TabBar";
import { GameTab } from "./components/game/GameTab";
import { PlayersTab } from "./components/players/PlayersTab";
import { PromptsTab } from "./components/prompts/PromptsTab";

// ForfeitsTab lands here once built — same pattern as the others.
function ComingSoon({ name }) {
  return <p style={{ color: "var(--muted)", textAlign: "center" }}>{name} tab is next.</p>;
}

export function App() {
  const [tab, setTab] = useState("game");

  return (
    <GameProvider>
      <div className="app">
        <Header />
        <TabBar activeTab={tab} onSelect={setTab} />
        <div className="content">
          {tab === "game" && <GameTab />}
          {tab === "players" && <PlayersTab />}
          {tab === "prompts" && <PromptsTab />}
          {tab === "forfeits" && <ComingSoon name="Forfeits" />}
        </div>
      </div>
    </GameProvider>
  );
}