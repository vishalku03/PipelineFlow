

import React, { useState, useEffect } from "react";
import BaseNode from "./BaseNode";

const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export default function TextNode({ id, data }) {
  const [text, setText] = useState(data?.text || "");
  const [vars, setVars] = useState([]);

  useEffect(() => {
    const matches = [...text.matchAll(regex)];
    setVars([...new Set(matches.map((m) => m[1]))]);
  }, [text]);

  const inputs = [
    `${id}-input`,      
    ...vars.map((v) => `${id}-${v}`),
  ];

  const lines = text.split("\n");
  const height = Math.max(140, 80 + lines.length * 18);

  return (
    <BaseNode
      title="Text"
      inputs={inputs}                
      outputs={[`${id}-text`]}       
      width={260}
      height={height}
      accentColor="#f59e0b"
      backgroundColor="#fffbeb"
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here or use {{variable}}"
        style={{
          width: "100%",
          height: height - 60,
          border: "none",
          outline: "none",
          resize: "none",
          fontSize: 13,
          background: "transparent",
        }}
      />
    </BaseNode>
  );
}

