
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeBase, Field, TextInput } from './NodeBase';

export const MathNode = ({ id, data }) => {
  const [expression, setExpression] = useState(data?.expression || 'x => x');

  return (
    <NodeBase title="Math">
      <Handle type="target" position={Position.Left} id={`${id}-in`} />
      <Field label="Expression (JS)">
        <TextInput value={expression} onChange={(e) => setExpression(e.target.value)} />
      </Field>
      <Handle type="source" position={Position.Right} id={`${id}-out`} />
    </NodeBase>
  );
};