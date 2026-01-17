import { useState } from "react";
import BaseNode from "./BaseNode";

export default function OutputNode({ id, data }) {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || "Text"
  );

  return (
   <BaseNode
  title="Output"
  inputs={[`${id}-value`]}
  accentColor="#16a34a"
  backgroundColor="#ecfdf5"
>

      <div style={{ fontSize: 13 }}>
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={{ width: "100%", marginTop: 4 }}
          />
        </label>

        <label style={{ display: "block", marginTop: 6 }}>
          Type:
          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            style={{ width: "100%", marginTop: 4 }}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
