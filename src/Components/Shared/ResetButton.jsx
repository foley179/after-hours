import React from "react";
import { RefreshCw } from "lucide-react";
import { useGame } from "../../context/GameContext";

export function ResetButton({ label, confirmMessage, actionType }) {
  const { dispatch } = useGame();

  function handleClick() {
    const confirmed = window.confirm(confirmMessage);

    if (confirmed) 
      dispatch({ type: actionType });
  }

  return (
    <button className="reset-btn" onClick={() => handleClick()}>
      <RefreshCw size={13} /> {label}
    </button>
  );
}