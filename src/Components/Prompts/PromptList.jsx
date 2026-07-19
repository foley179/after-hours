import React from "react";
import { Trash2, Timer } from "lucide-react";
import { useGame } from "../../context/GameContext";

export function PromptList({ spiceLevel }) {
  const { state, dispatch } = useGame();
  const filtered = state.prompts.filter((p) => p.spice === spiceLevel);

  return (
    <div className="prompt-list">
      {filtered.map((p) => (
        <div key={p.id} className="prompt-row">
          <span className={"badge " + p.type}>{p.type}</span>
          <span className="prompt-text">{p.text}</span>
          {p.partnered && <span className="badge partner">2P</span>}
          {p.duration && (
            <span className="badge timer">
              <Timer size={11} /> {p.duration}s
            </span>
          )}
          <button className="btn-icon subtle" onClick={() => dispatch({ type: "DELETE_PROMPT", id: p.id })}>
            <Trash2 size={14} />
          </button>
        </div>
      ))}
      {filtered.length === 0 && <p className="empty">No prompts at this level yet — add one below.</p>}
    </div>
  );
}