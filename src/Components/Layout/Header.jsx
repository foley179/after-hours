import React from "react";
import { Flame, RefreshCw } from "lucide-react";
import { useGame } from "../../context/GameContext";

function handleReset(dispatch) {
  const confirmed = window.confirm(
    "Start a brand new game? This clears all players, connections, custom prompts, and forfeits back to the defaults."
  );
  if (confirmed) dispatch({ type: "RESET" });
}

export function Header() {
  const { dispatch } = useGame();

  return (
    <div className="header">
      <div className="header-inner">
        <Flame size={22} color="var(--gold-bright)" />
        <div>
          <div className="title">After Hours</div>
          <div className="subtitle">spin · dare · undress</div>
        </div>
      </div>
      <button className="reset-btn" onClick={() => handleReset(dispatch)}>
        <RefreshCw size={13} /> New game
      </button>
    </div>
  );
}