import React from "react";
import { Trash2 } from "lucide-react";
import { useGame } from "../../context/GameContext";

export function ForfeitList() {
  const { state, dispatch } = useGame();
  const { forfeits } = state;

  return (
    <div className="prompt-list">
      {forfeits.map((f) => (
        <div key={f.id} className="prompt-row">
          <span className="prompt-text">{f.text}</span>
          <button className="btn-icon subtle" onClick={() => dispatch({ type: "DELETE_FORFEIT", id: f.id })}>
            <Trash2 size={14} />
          </button>
        </div>
      ))}
      {forfeits.length === 0 && <p className="empty">No forfeits saved.</p>}
    </div>
  );
}