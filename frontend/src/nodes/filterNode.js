  
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeBase, Field, TextInput } from './NodeBase';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'item => true');

  return (
    <NodeBase title="Filter">
      <Handle type="target" position={Position.Left} id={`${id}-in`} />
      <Field label="Condition (JS)">
        <TextInput value={condition} onChange={(e) => setCondition(e.target.value)} />
      </Field>
      <Handle type="source" position={Position.Right} id={`${id}-out`} />
    </NodeBase>
  );
};