import React, { useState } from "react";
import { SPICE_ORDER, SPICE_META } from "../../data/starterPrompts";
import { PromptList } from "./PromptList";
import { PromptEditor } from "./PromptEditor";
import { ResetButton } from "../shared/ResetButton";

export function PromptsTab() {
  const [spiceLevel, setSpiceLevel] = useState("mild");

  return (
    <div className="panel">
      <div className="panel-header">
        <div className="type-row">
          {SPICE_ORDER.map((key) => (
            <button
              key={key}
              className={"chip" + (spiceLevel === key ? " chip-active" : "")}
              onClick={() => setSpiceLevel(key)}
            >
              {SPICE_META[key].label}
            </button>
          ))}
        </div>
        <ResetButton
          label="Reset prompts"
          confirmMessage="Reset all prompts back to the default set? Any prompts you've added or edited will be lost."
          actionType="RESET_PROMPTS"
        />
      </div>

      <PromptList spiceLevel={spiceLevel} />
      <PromptEditor spiceLevel={spiceLevel} />
    </div>
  );
}