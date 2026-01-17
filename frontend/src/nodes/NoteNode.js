import { BaseNode } from './BaseNode';
export const NoteNode = ({ id }) => (
  <BaseNode id={id} label="Note" handles={[]}>
    <p>This is a simple note!</p>
  </BaseNode>
);