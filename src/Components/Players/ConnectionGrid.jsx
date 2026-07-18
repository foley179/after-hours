import React from "react";
import { Heart } from "lucide-react";
import { useGame } from "../../context/GameContext";
import { allPairs, isConnected } from "../../utils/pairs";

export function ConnectionGrid() {
  const { state, dispatch } = useGame();
  const { players, excluded } = state;
  const pairs = allPairs(players);

  return (
    <>
      <h3 className="panel-title" style={{ marginTop: 28 }}>
        Connections
      </h3>
      <p className="hint">Toggle off any pair you'd rather the game not pick together for partnered dares.</p>
      <div className="pair-list">
        {pairs.map(([a, b]) => {
          const connected = isConnected(excluded, a.id, b.id);
          return (
            <button
              key={a.id + b.id}
              className={"pair-row" + (connected ? "" : " off")}
              onClick={() => dispatch({ type: "TOGGLE_CONNECTION", a: a.id, b: b.id })}
            >
              <Heart size={14} fill={connected ? "var(--gold-bright)" : "none"} color={connected ? "var(--gold-bright)" : "var(--muted)"} />
              <span>
                {a.name} &amp; {b.name}
              </span>
            </button>
          );
        })}
        {pairs.length === 0 && <p className="empty">Add at least two players to set connections.</p>}
      </div>
    </>
  );
}