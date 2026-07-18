import React, { useState } from "react";
import { GameProvider } from "./context/GameContext";
import { Header } from "./components/layout/Header";
import { TabBar } from "./components/layout/TabBar";
import { GameTab } from "./components/game/GameTab";
import { PlayersTab } from "./components/players/PlayersTab";
import { PromptsTab } from "./components/prompts/PromptsTab";
import { ForfeitsTab } from "./Components/Forfeits/ForfeitsTab"

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
          {tab === "forfeits" && <ForfeitsTab />}
        </div>
      </div>
    </GameProvider>
  );
}