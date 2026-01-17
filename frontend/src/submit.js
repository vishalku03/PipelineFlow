import React from "react";
import { useReactFlow } from "reactflow";

export default function SubmitButton() {
  const { getNodes, getEdges } = useReactFlow();

  const handleSubmit = async () => {
    const nodes = getNodes();
    const edges = getEdges();

    try {
      const res = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await res.json();

      alert(
        `Pipeline Info\n\n` +
          `Nodes: ${data.num_nodes}\n` +
          `Edges: ${data.num_edges}\n` +
          `Is DAG: ${data.is_dag ? "Yes" : "No"}`
      );
    } catch (e) {
      alert("Backend nahi chal raha (uvicorn?)");
    }
  };

  return (
    <div
      style={{
        padding: "14px",
        textAlign: "center",
        background: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        boxShadow: "0 -4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 22px",
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          color: "white",
          borderRadius: 999,
          border: "none",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(34,197,94,0.35)",
        }}
      >
        Submit
      </button>
    </div>
  );
}
