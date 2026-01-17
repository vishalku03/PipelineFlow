import BaseNode from "./BaseNode";

export default function DelayNode() {
  return (
    <BaseNode title="Delay" inputs={["in"]} outputs={["out"]}>
      <div>Delay</div>
    </BaseNode>
  );
}
