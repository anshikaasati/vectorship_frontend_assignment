
import { Handle, Position } from 'reactflow';
import { NodeBase, Field, TextInput, SelectInput } from './NodeBase';
import { useState } from 'react';

export const LLMNode = ({ id, data }) => {
  const [provider, setProvider] = useState(data?.provider || 'OpenAI');
  const [model, setModel] = useState(data?.model || 'gpt-4o-mini');

  return (
    <NodeBase title="LLM">
      <Handle type="target" position={Position.Left} id={`${id}-system`} style={{ top: `${100 / 3}%` }} />
      <Handle type="target" position={Position.Left} id={`${id}-prompt`} style={{ top: `${200 / 3}%` }} />
      <Field label="Provider">
        <SelectInput value={provider} onChange={(e) => setProvider(e.target.value)} options={["OpenAI", "Anthropic", "Google"]} />
      </Field>
      <Field label="Model">
        <TextInput value={model} onChange={(e) => setModel(e.target.value)} />
      </Field>
      <Handle type="source" position={Position.Right} id={`${id}-response`} />
    </NodeBase>
  );
};
