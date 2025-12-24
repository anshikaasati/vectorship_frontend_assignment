
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeBase, Field, TextInput } from './NodeBase';

export const DelayNode = ({ id, data }) => {
  const [ms, setMs] = useState(data?.ms ?? 1000);

  return (
    <NodeBase title="Delay">
      <Handle type="target" position={Position.Left} id={`${id}-in`} />
      <Field label="Milliseconds">
        <TextInput value={ms} onChange={(e) => setMs(e.target.value)} />
      </Field>
      <Handle type="source" position={Position.Right} id={`${id}-out`} />
    </NodeBase>
  );
};