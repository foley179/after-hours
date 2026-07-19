import React from "react";
import { Dices, RotateCcw } from "lucide-react";
import { useGame } from "../../context/GameContext";
import { useSpin } from "../../hooks/useSpin";
import { SpiceDial } from "./SpiceDial";
import { RevealCard } from "./RevealCard";
import { ForfeitCard } from "./ForfeitCard";
import { HistoryLog } from "./HistoryLog";

export function GameTab() {
  const { state } = useGame();
  const { spin } = useSpin();
  const { players, round, notice } = state;

  return (
    <div className="game-tab">
      <SpiceDial />

      <div className="stage">
        {!round && (
          <div className="idle-card">
            <Dices size={34} color="var(--muted)" />
            <p>{players.length} in the room. Press spin when you're ready.</p>
            {notice && <p className="notice">{notice}</p>}
          </div>
        )}

        {round && round.phase === "revealed" && <RevealCard key={round.id} round={round} />}
        {round && round.phase === "forfeit" && <ForfeitCard key={round.id} round={round} />}
      </div>

      <button className="spin-btn" onClick={() => spin()}>
        <RotateCcw size={18} /> Spin
      </button>

      <HistoryLog />
    </div>
  );
}