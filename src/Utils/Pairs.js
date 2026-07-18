// Small, dependency-free helpers for working with player pairs.
// Kept separate from the reducer/hook so they're easy to reuse in both.

export function uid() {
  return Math.random().toString(36).slice(2, 9);
}

/** Canonical, order-independent key for a pair of player ids. */
export function pairKey(a, b) {
  return [a, b].sort().join("|");
}

/** True unless this pair has been explicitly excluded. */
export function isConnected(excluded, a, b) {
  return !excluded.includes(pairKey(a, b));
}

/** All players eligible to be paired with `aId`, respecting exclusions. */
export function eligiblePartners(players, excluded, aId) {
  return players.filter((p) => p.id !== aId && isConnected(excluded, aId, p.id));
}

/** Every unique unordered pair of players, e.g. for rendering a connections list. */
export function allPairs(players) {
  const out = [];

  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      out.push([players[i], players[j]]);
    }
  }

  return out;
}