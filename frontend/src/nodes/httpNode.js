
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeBase, Field, TextInput, SelectInput } from './NodeBase';

export const HTTPNode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'GET');
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');

  return (
    <NodeBase title="HTTP">
      <Handle type="target" position={Position.Left} id={`${id}-in`} />
      <Field label="Method">
        <SelectInput value={method} onChange={(e) => setMethod(e.target.value)} options={["GET", "POST", "PUT", "DELETE"]} />
      </Field>
      <Field label="URL">
        <TextInput value={url} onChange={(e) => setUrl(e.target.value)} />
      </Field>
      <Handle type="source" position={Position.Right} id={`${id}-out`} />
    </NodeBase>
  );
};