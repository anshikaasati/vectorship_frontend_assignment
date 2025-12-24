

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeBase, Field, TextInput, SelectInput } from './NodeBase';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <NodeBase title="Input">
      <Field label="Name">
        <TextInput value={currName} onChange={handleNameChange} />
      </Field>
      <Field label="Type">
        <SelectInput
          value={inputType}
          onChange={handleTypeChange}
          options={["Text", "File"]}
        />
      </Field>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </NodeBase>
  );
};
