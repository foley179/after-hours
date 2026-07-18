import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useGame } from "../../context/GameContext";

export function PlayerList() {
  const { state, dispatch } = useGame();
  const { players } = state;
  const [newPlayerName, setNewPlayerName] = useState("");

  function handleAdd() {
    dispatch({ type: "ADD_PLAYER", name: newPlayerName });
    setNewPlayerName("");
  }

  return (
    <>
      <h3 className="panel-title">Who's playing</h3>
      <div className="add-row">
        <input
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Add a name"
        />
        <button className="btn-icon" onClick={() => handleAdd()}>
          <Plus size={16} />
        </button>
      </div>
      <div className="player-list">
        {players.map((p) => (
          <div key={p.id} className="player-row">
            <span>{p.name}</span>
            <button className="btn-icon subtle" onClick={() => dispatch({ type: "REMOVE_PLAYER", id: p.id })}>
              <Trash2 size={14} />
            </button>
          </div>
        ))}
        {players.length === 0 && <p className="empty">No one added yet.</p>}
      </div>
    </>
  );
}