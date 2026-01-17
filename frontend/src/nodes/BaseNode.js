
import React from "react";
import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
  width = 220,
  height = 120,
  accentColor = "#6366f1",
  backgroundColor = "#ffffff", 
}) {
  return (
    <div
      style={{
        width,
        height,
        border: `1px solid ${accentColor}55`,
        borderRadius: 12,
        background: backgroundColor,  
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
        padding: "10px 14px",
        position: "relative",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Node Title */}
      <div
        style={{
          fontWeight: 600,
          marginBottom: 6,
          fontSize: 14,
          color: accentColor,
        }}
      >
        {title}
      </div>

      {/* LEFT INPUT HANDLES */}
      {inputs.map((id, index) => (
        <Handle
          key={id}
          type="target"
          id={id}
          position={Position.Left}
          style={{
            top: 40 + index * 22,
            background: accentColor,
          }}
        />
      ))}

      {/* NODE CONTENT */}
      <div>{children}</div>

      {/* RIGHT OUTPUT HANDLES */}
      {outputs.map((id, index) => (
        <Handle
          key={id}
          type="source"
          id={id}
          position={Position.Right}
          style={{
            top: 40 + index * 22,
            background: accentColor,
          }}
        />
      ))}
    </div>
  );
}
