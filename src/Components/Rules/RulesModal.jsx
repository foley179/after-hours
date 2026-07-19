import React from "react";
import { X } from "lucide-react";

export function RulesModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={() => onClose()}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">House Rules</h2>
          <button className="btn-icon subtle" onClick={() => onClose()}>
            <X size={16} />
          </button>
        </div>
        <ul className="rules-list">
          <li>Anyone can refuse a truth or dare, no explanation needed — refusing just means doing the forfeit instead.</li>
          <li>If a dare involves two people and either one refuses, they alone do the forfeit. If both refuse, both people do the forfeit.</li>
          <li>Toggle off any pairing you're not comfortable with in the Players tab — the game will never pick an excluded pair together for a partnered dare.</li>
          <li>Pick your spice level honestly, and feel free to change it between rounds.</li>
          <li>Check in with each other as you go. If the mood shifts, pause the game — it'll still be here when you're ready.</li>
          <li>What happens in the room stays in the room.</li>
        </ul>
        <button className="btn btn-accept modal-close-btn" onClick={() => onClose()}>
          Got it
        </button>
      </div>
    </div>
  );
}