import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useGame } from "../../context/GameContext";

export function ForfeitEditor() {
  const { dispatch } = useGame();
  const [text, setText] = useState("");

  function handleAdd() {
    if (!text.trim()) return;

    dispatch({
      type: "ADD_FORFEIT",
      forfeit: {
        text,
      },
    });

    setText("");
  }

  return (
    <div className="forfeit-editor">
      <input
        type="text"
        placeholder="Add a forfeit"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />

      <button className="btn-icon add-btn" onClick={handleAdd}>
        <Plus size={18} />
      </button>
    </div>
  );
}