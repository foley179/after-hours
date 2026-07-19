import React, { useState, useEffect } from "react";
import { GameProvider } from "./context/GameContext";
import { Header } from "./components/layout/Header";
import { TabBar } from "./components/layout/TabBar";
import { GameTab } from "./components/game/GameTab";
import { PlayersTab } from "./components/players/PlayersTab";
import { PromptsTab } from "./components/prompts/PromptsTab";
import { ForfeitsTab } from "./components/forfeits/ForfeitsTab";
import { RulesModal } from "./Components/Rules/RulesModal";
import { hasSeenRules, markRulesSeen } from "./utils/storage";

export function App() {
  const [tab, setTab] = useState("players"); // Land on player tab as this will need setting up most times
  const [rulesOpen, setRulesOpen] = useState(false);

  // Show the rules automatically the first time this browser opens the app.
  useEffect(() => {
    if (!hasSeenRules()) {
      setRulesOpen(true);
      markRulesSeen();
    }
  }, []);

  return (
    <GameProvider>
      <div className="app">
        <Header onOpenRules={() => setRulesOpen(true)} />
        <TabBar activeTab={tab} onSelect={setTab} />
        <div className="content">
          {tab === "game" && <GameTab />}
          {tab === "players" && <PlayersTab />}
          {tab === "prompts" && <PromptsTab />}
          {tab === "forfeits" && <ForfeitsTab />}
        </div>
        <RulesModal open={rulesOpen} onClose={() => setRulesOpen(false)} />
      </div>
    </GameProvider>
  );
}