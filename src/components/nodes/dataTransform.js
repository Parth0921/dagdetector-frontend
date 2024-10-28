// Data transformation node which takes input and transforms it to desired output

import { useState } from "react";
import { NodeWrapper } from "../node-builder/nodeWrapper";
import { NodeSelectWrapper } from "../node-builder/nodeSelect";
import { StyledHandler } from "../node-builder/stylesHanlder";
import { Position } from "reactflow";

const outputOptions = ["Text", "JSON", "CSV", "PDF", "Image"];

export const DataTransformNode = ({ id, data }) => {
  const [output, setOutput] = useState("Text");

  const handleOutputChange = (option) => {
    setOutput(option);
  };

  return (
    <NodeWrapper nodeName="Data Transform" nodeType={data?.nodeType} id={id}>
      <StyledHandler
        id={`${id}-input`}
        type="target"
        position={Position.Left}
        label="Input"
      />
      <NodeSelectWrapper
        options={outputOptions}
        label="Output"
        value={output}
        handleChange={handleOutputChange}
      />
      <StyledHandler
        id={`${id}-output`}
        type="source"
        position={Position.Right}
        label="Output"
      />
    </NodeWrapper>
  );
};
