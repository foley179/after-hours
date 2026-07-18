import React from "react";
import { Check } from "lucide-react";
import { useSpin } from "../../hooks/useSpin";

export function ForfeitCard({ round }) {
  const { closeForfeit } = useSpin();

  return (
    <div className="reveal-card forfeit" style={{ "--rcolor": "#a11f34" }}>
      <div className="reveal-eyebrow">FORFEIT</div>
      <div className="reveal-names">{round.a.name}</div>
      <div className="reveal-text">{round.forfeit.text}</div>
      <div className="reveal-actions">
        <button className="btn btn-accept" onClick={() => closeForfeit()}>
          <Check size={16} /> Done
        </button>
      </div>
    </div>
  );
}
