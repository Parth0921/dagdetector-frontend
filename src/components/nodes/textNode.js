// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeWrapper } from '../node-builder/nodeWrapper';
import { NodeInputText } from '../node-builder/nodeInputText';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <NodeWrapper nodeName="Text">
      <NodeInputText label="Text:" value={currText} handleChange={handleTextChange} />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
        
    </NodeWrapper>
  )
}
