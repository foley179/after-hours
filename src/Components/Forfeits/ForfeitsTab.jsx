import React from "react";
import { ForfeitList } from "./ForfeitList";
import { ForfeitEditor } from "./ForfeitEditor";

export function ForfeitsTab() {
  return (
    <div className="panel">
      <h3 className="panel-title">If a dare gets refused</h3>
      <ForfeitList />
      <ForfeitEditor />
    </div>
  );
}