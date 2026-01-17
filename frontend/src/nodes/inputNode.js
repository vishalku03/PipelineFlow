
import { useState } from "react";
import BaseNode from "./BaseNode";

export default function InputNode({ id, data }) {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("input-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      title="Input"
      outputs={[`${id}-value`]}
      accentColor="#16a34a"    
      backgroundColor="#ecfdf5" 
    >
      <div style={{ fontSize: 13, display: "flex", flexDirection: "column", gap: 8 }}>
        <label>
          Name
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        </label>

        <label>
          Type
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>

        {inputType === "Text" && (
          <input
            type="text"
            placeholder="Enter text input"
          />
        )}

        {inputType === "File" && (
          <input
            type="file"
          />
        )}
      </div>
    </BaseNode>
  );
}
