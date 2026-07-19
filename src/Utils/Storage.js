const STORAGE_KEY = "after-hours:state";

/** Reads saved game state from localStorage. Returns null if there's nothing there, or it can't be read. */
export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) 
      return null;
    
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to load saved game state:", err);
    return null;
  }
}

/** Persists game state to localStorage. Fails silently (but logs) if storage is unavailable, e.g. private browsing. */
export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save game state:", err);
  }
}

export function clearStoredState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error("Failed to clear saved game state:", err);
  }
}

// Kept as its own key, separate from the game-state blob above, so that
// resetting players/prompts/forfeits never has a side effect of making the
// rules popup reappear — the two are unrelated concerns.
const RULES_SEEN_KEY = "after-hours:rules-seen";
 
export function hasSeenRules() {
  try {
    return localStorage.getItem(RULES_SEEN_KEY) === "true";
  } catch (err) {
    console.error("Failed to read rules-seen flag:", err);
    return false;
  }
}
 
export function markRulesSeen() {
  try {
    localStorage.setItem(RULES_SEEN_KEY, "true");
  } catch (err) {
    console.error("Failed to save rules-seen flag:", err);
  }
}