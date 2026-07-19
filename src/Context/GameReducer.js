import { uid, pairKey } from "../utils/pairs";
import { createStarterPrompts } from "../data/starterPrompts";
import { createStarterForfeits } from "../data/starterForfeits";

/**
 * Note on design: this reducer never generates randomness itself.
 * Anything that needs a random pick (which player, which prompt, which forfeit)
 * is decided by the caller (see hooks/useSpin.js) and passed in as a payload.
 * That keeps the reducer a pure function of (state, action) -> state,
 * which makes it trivial to reason about and to later swap for a synced/remote store.
 */

/**
 * Builds a fresh default game state. Used only for the very first load,
 * when there's nothing in storage yet. Players start empty — there's no
 * "default" group of people, so it'd just be something to delete every time.
 */
export function createInitialState() {
  return {
    players: [],
    excluded: [], // array of pairKey strings — pairs NOT comfortable being matched together
    prompts: createStarterPrompts(),
    forfeits: createStarterForfeits(),
    spiceMode: "mild", // 'mild' | 'medium' | 'hot' | 'wild'
    typeFilter: "any", // 'any' | 'truth' | 'dare'
    round: null, // { id, a, b, prompt, spice, phase: 'revealed' | 'forfeit', forfeit? }
    history: [], // most recent rounds, newest first
    notice: null, // transient message shown in the Play tab (e.g. "no prompts for that combo")
  };
}

export function gameReducer(state, action) {
  switch (action.type) {
    case "ADD_PLAYER": {
      const name = action.name.trim();

      if (!name)
        return state;

      return { ...state, players: [...state.players, { id: uid(), name }] };
    }

    case "REMOVE_PLAYER": {
      const { id } = action;
      return {
        ...state,
        players: state.players.filter((p) => p.id !== id),
        excluded: state.excluded.filter((key) => !key.split("|").includes(id)),
      };
    }

    case "TOGGLE_CONNECTION": {
      const key = pairKey(action.a, action.b);

      const excluded = state.excluded.includes(key)
        ? state.excluded.filter((k) => k !== key)
        : [...state.excluded, key];

      return { ...state, excluded };
    }

    case "ADD_PROMPT": {
      const text = action.prompt.text.trim();

      if (!text) 
        return state;

      return { ...state, prompts: [...state.prompts, { id: uid(), ...action.prompt, text }] };
    }

    case "DELETE_PROMPT":
      return { ...state, prompts: state.prompts.filter((p) => p.id !== action.id) };

    case "ADD_FORFEIT": {
      const text = action.text.trim();

      if (!text) 
        return state;

      return { ...state, forfeits: [...state.forfeits, { id: uid(), text }] };
    }

    case "DELETE_FORFEIT":
      return { ...state, forfeits: state.forfeits.filter((f) => f.id !== action.id) };

    case "SET_SPICE_MODE":
      return { ...state, spiceMode: action.mode };

    case "SET_TYPE_FILTER":
      return { ...state, typeFilter: action.filter };

    // Dispatched by useSpin once it has picked a player/partner/prompt at random.
    case "REVEAL_ROUND":
      return {
        ...state,
        notice: null,
        round: { id: uid(), a: action.a, b: action.b, prompt: action.prompt, spice: action.spice, phase: "revealed" },
      };

    case "SET_NOTICE":
      return { ...state, notice: action.message };

    case "ACCEPT_ROUND": {
      if (!state.round) 
        return state;

      const entry = { ...state.round, result: "done", id: uid() };

      return { ...state, history: [entry, ...state.history].slice(0, 6), round: null };
    }

    // Dispatched when a dare is refused — moves the round into 'forfeit' phase
    // rather than clearing it, so the forfeit can be shown before the round ends.
    case "REFUSE_ROUND": {
      if (!state.round) 
        return state;

      return { ...state, round: { ...state.round, phase: "forfeit", forfeit: action.forfeit } };
    }

    case "CLOSE_FORFEIT": {
      if (!state.round) 
        return state;

      const entry = { ...state.round, result: "forfeit", id: uid() };
      
      return { ...state, history: [entry, ...state.history].slice(0, 6), round: null };
    }

    // "New game" — clears players/connections and the in-progress round/history,
    // but deliberately leaves prompts and forfeits alone. Those are a library
    // people build up over time; a fresh game shouldn't wipe that out.
    case "RESET_PLAYERS":
      return {
        ...state,
        players: [],
        excluded: [],
        round: null,
        history: [],
        notice: null,
        spiceMode: "mild",
        typeFilter: "any",
      };

    case "RESET_PROMPTS":
      return { ...state, prompts: createStarterPrompts() };

    case "RESET_FORFEITS":
      return { ...state, forfeits: createStarterForfeits() };

    default:
      return state;
  }
}