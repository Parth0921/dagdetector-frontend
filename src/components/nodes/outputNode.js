// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeSelectWrapper } from '../node-builder/nodeSelect';
import { NodeInputText } from '../node-builder/nodeInputText';
import { NodeWrapper } from '../node-builder/nodeWrapper';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const options = [
    "Text",
    "Image"
  ]

  return (
    <NodeWrapper nodeName="Output">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <div>
        <NodeInputText label="Name:" value={currName} handleChange={handleNameChange} />
        <NodeSelectWrapper label="Type:" value={outputType} handleChange={handleTypeChange} options={options} />
      </div>
    </NodeWrapper>
  )
}
