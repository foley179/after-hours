import React from "react";
import { Flame } from "lucide-react";
import { ResetButton } from "../shared/ResetButton";
import { RulesButton } from "../rules/RulesButton";

export function Header({ onOpenRules }) {
  return (
    <div className="header">
      <div className="header-inner">
        <Flame size={22} color="var(--gold-bright)" />
        <div>
          <div className="title">After Hours</div>
          <div className="subtitle">spin · dare · undress</div>
        </div>
      </div>
      <div className="header-actions">
        <RulesButton onOpen={onOpenRules} />
        <ResetButton
          label="New game"
          confirmMessage="Start a new game? This clears players, connections, and the round history. Your saved prompts and forfeits are kept."
          actionType="RESET_PLAYERS"
        />
      </div>
    </div>
  );
}