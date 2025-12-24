
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeBase, Field, TextInput, SelectInput } from './NodeBase';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <NodeBase title="Output">
      <Handle type="target" position={Position.Left} id={`${id}-value`} />
      <Field label="Name">
        <TextInput value={currName} onChange={handleNameChange} />
      </Field>
      <Field label="Type">
        <SelectInput
          value={outputType}
          onChange={handleTypeChange}
          options={["Text", "Image"]}
        />
      </Field>
    </NodeBase>
  );
};
