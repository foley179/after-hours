import React from "react";
import { PlayerList } from "./PlayerList";
import { ConnectionGrid } from "./ConnectionGrid";

export function PlayersTab() {
  return (
    <div className="panel">
      <PlayerList />
      <ConnectionGrid />
    </div>
  );
}