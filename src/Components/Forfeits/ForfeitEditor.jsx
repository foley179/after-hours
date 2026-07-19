import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useGame } from "../../context/GameContext";

export function ForfeitEditor() {
  const { dispatch } = useGame();
  const [text, setText] = useState("");

  function handleAdd() {
    dispatch({ type: "ADD_FORFEIT", text });
    setText("");
  }

  return (
    <div className="add-row" style={{ marginTop: 16 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Add a forfeit"
      />
      <button className="btn-icon" onClick={() => handleAdd()}>
        <Plus size={16} />
      </button>
    </div>
  );
}