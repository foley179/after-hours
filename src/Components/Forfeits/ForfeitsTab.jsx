import React from "react";
import { ForfeitList } from "./ForfeitList";
import { ForfeitEditor } from "./ForfeitEditor";
import { ResetButton } from "../shared/ResetButton";

export function ForfeitsTab() {
  return (
    <div className="panel">
      <div className="panel-header">
        <h3 className="panel-title">If a dare gets refused</h3>
        <ResetButton
          label="Reset forfeits"
          confirmMessage="Reset all forfeits back to the default set? Any forfeits you've added will be lost."
          actionType="RESET_FORFEITS"
        />
      </div>
      <ForfeitList />
      <ForfeitEditor />
    </div>
  );
}