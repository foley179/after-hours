import React from "react";
import { Shuffle } from "lucide-react";
import { useGame } from "../../context/GameContext";
import { SPICE_META, SPICE_ORDER } from "../../data/starterPrompts";

const TYPE_FILTERS = ["any", "truth", "dare"];

function typeLabel(filter) {
  if (filter === "any") return "Truth or Dare";
  return filter[0].toUpperCase() + filter.slice(1);
}

export function SpiceDial() {
  const { state, dispatch } = useGame();
  const { spiceMode, typeFilter } = state;

  return (
    <>
      <div className="dial-row">
        {SPICE_ORDER.map((key) => {
          const meta = SPICE_META[key];
          const active = spiceMode === key;
          return (
            <button
              key={key}
              className={"medallion" + (active ? " active" : "")}
              style={{ "--mcolor": meta.color }}
              onClick={() => dispatch({ type: "SET_SPICE_MODE", mode: key })}
            >
              <span className="medallion-label">{meta.label}</span>
              <span className="medallion-tag">{meta.tagline}</span>
            </button>
          );
        })}
        <button
          className={"medallion wild" + (spiceMode === "wild" ? " active" : "")}
          onClick={() => dispatch({ type: "SET_SPICE_MODE", mode: "wild" })}
        >
          <Shuffle size={16} />
          <span className="medallion-label">Wild</span>
          <span className="medallion-tag">Surprise me</span>
        </button>
      </div>

      <div className="type-row">
        {TYPE_FILTERS.map((key) => (
          <button
            key={key}
            className={"chip" + (typeFilter === key ? " chip-active" : "")}
            onClick={() => dispatch({ type: "SET_TYPE_FILTER", filter: key })}
          >
            {typeLabel(key)}
          </button>
        ))}
      </div>
    </>
  );
}
