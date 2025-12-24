
import { Handle, Position } from 'reactflow';
import { NodeBase } from './NodeBase';

export const MergeNode = ({ id }) => {
  return (
    <NodeBase title="Merge">
      <Handle type="target" position={Position.Left} id={`${id}-in-a`} style={{ top: '33%' }} />
      <Handle type="target" position={Position.Left} id={`${id}-in-b`} style={{ top: '66%' }} />
      <Handle type="source" position={Position.Right} id={`${id}-out`} />
    </NodeBase>
  );
};