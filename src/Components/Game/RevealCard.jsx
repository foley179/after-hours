import React from "react";
import { Check, X } from "lucide-react";
import { useSpin } from "../../hooks/useSpin";
import { SPICE_META } from "../../data/starterPrompts";
import { RoundTimer } from "./RoundTimer";

function fillText(text, partnerName) {
  return text.replace("{partner}", partnerName || "your partner");
}

export function RevealCard({ round }) {
  const { accept, refuse } = useSpin();
  const meta = SPICE_META[round.spice];

  return (
    <div className="reveal-card" style={{ "--rcolor": meta.color }}>
      <div className="reveal-eyebrow">
        {round.prompt.type === "truth" ? "TRUTH" : "DARE"} · {meta.label}
      </div>
      <div className="reveal-names">
        {round.a.name}
        {round.b ? ` + ${round.b.name}` : ""}
      </div>
      <div className="reveal-text">{fillText(round.prompt.text, round.b?.name)}</div>
      {round.prompt.duration && <RoundTimer seconds={round.prompt.duration} />}
      <div className="reveal-actions">
        <button className="btn btn-accept" onClick={() => accept()}>
          <Check size={16} /> Did it
        </button>
        <button className="btn btn-refuse" onClick={() => refuse()}>
          <X size={16} /> Refuse
        </button>
      </div>
    </div>
  );
}