import { useGame } from "../context/GameContext";
import { eligiblePartners } from "../utils/pairs";
import { SPICE_ORDER } from "../data/starterPrompts";

/**
 * Picks a random element from an array. Named/exported as a function
 * declaration since it's reused across this file, not a one-off inline callback.
 */
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * All the "randomness" for a round lives here, not in the reducer.
 * spin() reads current state, makes the random picks, then dispatches
 * a single REVEAL_ROUND action with the result. If you ever move to a
 * synced multiplayer version, this is the one function that would need
 * to become "ask the host device to spin" instead of picking locally.
 */
export function useSpin() {
  const { state, dispatch } = useGame();
  const { players, prompts, excluded, spiceMode, typeFilter, forfeits } = state;

  function spin() {
    if (players.length === 0) {
      dispatch({ type: "SET_NOTICE", message: "Add at least one player first." });
      return;
    }

    const effSpice = spiceMode === "wild" ? pick(SPICE_ORDER) : spiceMode;

    const pool = prompts.filter(
      (p) => p.spice === effSpice && (typeFilter === "any" || p.type === typeFilter)
    );
    if (pool.length === 0) {
      dispatch({ type: "SET_NOTICE", message: "No prompts saved for that combination yet — add some in the Prompts tab." });
      return;
    }

    const a = pick(players);
    const elig = eligiblePartners(players, excluded, a.id);

    let candidates = pool;
    if (elig.length === 0) {
      candidates = pool.filter((p) => !p.partnered);
      if (candidates.length === 0) {
        dispatch({
          type: "SET_NOTICE",
          message: `Everyone connected to ${a.name} is currently excluded. Try again, or adjust Connections.`,
        });
        return;
      }
    }

    const prompt = pick(candidates);
    const b = prompt.partnered ? pick(elig) : null;

    dispatch({ type: "REVEAL_ROUND", a, b, prompt, spice: effSpice });
  }

  function accept() {
    dispatch({ type: "ACCEPT_ROUND" });
  }

  function refuse() {
    const forfeit = forfeits.length ? pick(forfeits) : { text: "No forfeits saved — add some!" };
    dispatch({ type: "REFUSE_ROUND", forfeit });
  }

  function closeForfeit() {
    dispatch({ type: "CLOSE_FORFEIT" });
  }

  return { spin, accept, refuse, closeForfeit };
}