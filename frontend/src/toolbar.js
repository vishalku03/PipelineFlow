import React from "react";
export default function Toolbar({ onAddNode }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: "12px 16px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <RedButton label="Input" onClick={() => onAddNode("input")} />
      <RedButton label="Text" onClick={() => onAddNode("text")} />
      <RedButton label="LLM" onClick={() => onAddNode("llm")} />
      <RedButton label="Output" onClick={() => onAddNode("output")} />
    </div>
  );
}

function RedButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        borderRadius: 10,
        border: "none",
        background: "linear-gradient(135deg, #ef4444, #dc2626)",
        color: "#ffffff", 
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: "0 6px 16px rgba(239,68,68,0.35)",
      }}
    >
      {label}
    </button>
  );
}
