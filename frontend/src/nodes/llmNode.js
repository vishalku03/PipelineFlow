import BaseNode from "./BaseNode";

export default function LLMNode({ id, data }) {
  return (
    <BaseNode
  title="LLM"
  inputs={[`${id}-prompt`]}
  outputs={[`${id}-result`]}
  accentColor="#7c3aed"
  backgroundColor="#f5f3ff"
>
      <div style={{ fontSize: 13, color: "#6b7280" }}>
        LLM Call
      </div>
    </BaseNode>
  );
}
