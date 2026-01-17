
import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import Toolbar from "./toolbar";
import InputNode from "./nodes/inputNode";
import OutputNode from "./nodes/outputNode";
import TextNode from "./nodes/textNode";
import LLMNode from "./nodes/llmNode";
import SubmitButton from "./submit";

import "reactflow/dist/style.css";

const nodeTypes = {
  input: InputNode,
  output: OutputNode,
  text: TextNode,
  llm: LLMNode,
};

let idCounter = 1;

export default function UI() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const addNode = useCallback((type) => {
    const newNode = {
      id: `${type}-${idCounter++}`,
      type,
      position: { x: 150 + idCounter * 20, y: 150 },
      data: {},
    };
    setNodes((nds) => [...nds, newNode]);
  }, []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Toolbar onAddNode={addNode} />

 <div
  style={{
    flex: 1,
    background: "linear-gradient(180deg, #f1f5f9, #e0e7ff)",
  }}
>


        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        />
      </div>

      <div style={{ padding: 10, textAlign: "center" }}>
        <SubmitButton />
      </div>
    </div>
  );
}
