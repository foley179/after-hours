import React from "react";
import { Dices, Users, Sparkles, Wine } from "lucide-react";

const TABS = [
  { key: "players", label: "Players", Icon: Users },
  { key: "prompts", label: "Prompts", Icon: Sparkles },
  { key: "forfeits", label: "Forfeits", Icon: Wine },
  { key: "game", label: "Play", Icon: Dices },
];

export function TabBar({ activeTab, onSelect }) {
  return (
    <div className="tabs">
      {TABS.map(({ key, label, Icon }) => (
        <button
          key={key}
          className={"tab-btn" + (activeTab === key ? " active" : "")}
          onClick={() => onSelect(key)}
        >
          <Icon size={15} />
          {label}
        </button>
      ))}
    </div>
  );
}
