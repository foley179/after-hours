import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;

  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function RoundTimer({ seconds }) {
  const [remaining, setRemaining] = useState(seconds);
  const [running, setRunning] = useState(false);

  // Ticks once a second while running. Only depends on `running` so the
  // interval isn't torn down and rebuilt every single tick.
  useEffect(() => {
    if (!running) 
      return;

    const id = setInterval(() => {
      setRemaining((r) => (r <= 1 ? 0 : r - 1));
    }, 1000);

    return () => clearInterval(id);
  }, [running]);

  // Stop automatically once it hits zero.
  useEffect(() => {
    if (remaining === 0)
      setRunning(false);
  }, [remaining]);

  function handleToggle() {
    if (remaining <= 0) {
      setRemaining(seconds);
      setRunning(true);
      return;
    }

    setRunning((r) => !r);
  }

  function handleReset() {
    setRunning(false);
    setRemaining(seconds);
  }

  // Percentage of time left
  const pct = Math.max(0, Math.min(100, (remaining / seconds) * 100));
  // Classed as urgent when under 5s
  const urgent = remaining > 0 && remaining <= 5;

  return (
    <div className="timer">
      <div className="timer-bar">
        <div
          className="timer-bar-fill"
          style={{ width: `${pct}%`, background: urgent ? "var(--hot)" : "var(--gold-bright)" }}
        />
      </div>
      <div className="timer-row">
        <span className={"timer-time" + (remaining === 0 ? " done" : "") + (urgent ? " urgent" : "")}>
          {remaining === 0 ? "Time's up!" : formatTime(remaining)}
        </span>
        <div className="timer-controls">
          <button className="btn-icon subtle" onClick={() => handleToggle()}>
            {running ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button className="btn-icon subtle" onClick={() => handleReset()}>
            <RotateCcw size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}