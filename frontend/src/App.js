
import React from "react";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";

import UI from "./ui";

export default function App() {
  return (
    <ReactFlowProvider>
      <div style={{ height: "100vh" }}>
        <UI />
      </div>
    </ReactFlowProvider>
  );
}
