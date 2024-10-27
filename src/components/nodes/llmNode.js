// llmNode.js

import { Handle, Position } from 'reactflow';
import { NodeWrapper } from '../node-builder/nodeWrapper';

export const LLMNode = ({ id, data }) => {
  return (
    <NodeWrapper nodeName="LLM" nodeType={data?.nodeType}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{top: `${100/3}%`}}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{top: `${200/3}%`}}
      />
      <div>
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </NodeWrapper>
  )
}
