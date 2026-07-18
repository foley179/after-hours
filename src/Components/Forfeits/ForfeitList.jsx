import React from "react";
import { Trash2 } from "lucide-react";
import { useGame } from "../../context/GameContext";

export function ForfeitList() {
  const { state, dispatch } = useGame();

  return (
    <div className="forfeit-list">
      {state.forfeits.map((forfeit) => (
        <div key={forfeit.id} className="forfeit-row">
          <span className="forfeit-text">{forfeit.text}</span>

          <button
            className="btn-icon subtle"
            onClick={() =>
              dispatch({
                type: "DELETE_FORFEIT",
                id: forfeit.id,
              })
            }
          >
            <Trash2 size={15} />
          </button>
        </div>
      ))}

      {state.forfeits.length === 0 && (
        <p className="empty">No forfeits yet.</p>
      )}
    </div>
  );
}