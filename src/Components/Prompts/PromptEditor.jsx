import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { useGame } from "../../context/GameContext";
import { SPICE_ORDER, SPICE_META } from "../../data/starterPrompts";

function emptyDraft(spiceLevel) {
  return { text: "", type: "dare", spice: spiceLevel, partnered: false };
}

export function PromptEditor({ spiceLevel }) {
  const { dispatch } = useGame();
  const [draft, setDraft] = useState(emptyDraft(spiceLevel));

  // Keep the draft's spice in step with whichever sub-tab is open, so a new
  // prompt lands where the person is currently looking by default.
  useEffect(() => {
    setDraft((d) => ({ ...d, spice: spiceLevel }));
  }, [spiceLevel]);

  function handleAdd() {
    if (!draft.text.trim()) return;
    dispatch({ type: "ADD_PROMPT", prompt: draft });
    setDraft(emptyDraft(spiceLevel));
  }

  return (
    <>
      <h3 className="panel-title" style={{ marginTop: 24 }}>
        Add a prompt
      </h3>
      <textarea
        placeholder="Use {partner} where a second player's name should go"
        value={draft.text}
        onChange={(e) => setDraft((d) => ({ ...d, text: e.target.value }))}
      />
      <div className="draft-row">
        <select value={draft.type} onChange={(e) => setDraft((d) => ({ ...d, type: e.target.value }))}>
          <option value="truth">Truth</option>
          <option value="dare">Dare</option>
        </select>
        <select value={draft.spice} onChange={(e) => setDraft((d) => ({ ...d, spice: e.target.value }))}>
          {SPICE_ORDER.map((key) => (
            <option key={key} value={key}>
              {SPICE_META[key].label}
            </option>
          ))}
        </select>
        <label className="check-label">
          <input
            type="checkbox"
            checked={draft.partnered}
            onChange={(e) => setDraft((d) => ({ ...d, partnered: e.target.checked }))}
          />
          needs a partner
        </label>
        <button className="btn-icon" onClick={() => handleAdd()}>
          <Plus size={16} />
        </button>
      </div>
    </>
  );
}