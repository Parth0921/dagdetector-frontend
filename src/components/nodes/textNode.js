// textNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { NodeWrapper } from "../node-builder/nodeWrapper";
import { DynamicHandler } from "../node-builder/dynamicHandler";
import { NodeInputTextArea } from "../node-builder/nodeInputTextArea";
import { StyledHandler } from "../node-builder/stylesHanlder";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <NodeWrapper nodeName="Text" nodeType={data?.nodeType} id={id}>
      <DynamicHandler id={id} input={currText} />
      <NodeInputTextArea
        label="Text"
        value={currText}
        handleChange={handleTextChange}
      />
      <StyledHandler
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        label="Output"
      />
    </NodeWrapper>
  );
};
