import React from "react";
import { BookOpen } from "lucide-react";

export function RulesButton({ onOpen }) {
  return (
    <button className="reset-btn" onClick={() => onOpen()}>
      <BookOpen size={13} /> Rules
    </button>
  );
}