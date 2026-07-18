import React, { createContext, useContext, useReducer, useEffect } from "react";
import { gameReducer, createInitialState } from "./gameReducer";
import { loadState, saveState } from "../utils/storage";

const GameContext = createContext(null);

function init() {
  return loadState() || createInitialState();
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, undefined, init);

  // Persist on every change. This runs after every dispatch, including RESET,
  // so a reset immediately overwrites whatever was previously saved too.
  useEffect(() => {
    saveState(state);
  }, [state]);

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
}

/**
 * Access game state + dispatch from any component.
 * Throws early if used outside <GameProvider> so mistakes are obvious
 * instead of silently reading `null`.
 */
export function useGame() {
  const ctx = useContext(GameContext);
  
  if (!ctx) 
    throw new Error("useGame must be used within a <GameProvider>");

  return ctx;
}