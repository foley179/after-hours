import React from "react";
import { useGame } from "../../context/GameContext";

export function HistoryLog() {
  const { state } = useGame();
  const { history } = state;

  if (history.length === 0) return null;

  return (
    <div className="history">
      {history.map((h) => (
        <div key={h.id} className="history-row">
          <span className={"dot " + h.result}></span>
          <span className="hist-name">
            {h.a.name}
            {h.b ? ` + ${h.b.name}` : ""}
          </span>
          <span className="hist-type">{h.prompt.type}</span>
          <span className="hist-result">{h.result === "done" ? "completed" : "forfeit"}</span>
        </div>
      ))}
    </div>
  );
}
