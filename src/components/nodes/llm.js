// llmNode.js

import { Position } from "reactflow";
import { NodeWrapper } from "../node-builder/nodeWrapper";
import { StyledHandler } from "../node-builder/stylesHanlder";
import { getPositionFromTop } from "../../utils/helper/nodeHelper";

export const LLMNode = ({ id, data }) => {
  return (
    <NodeWrapper nodeName="LLM" nodeType={data?.nodeType} id={id}>
      <StyledHandler
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        label="System"
        positionFromTop={`${getPositionFromTop(100/3)}`}
      />

      <StyledHandler
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        label="Prompt"
        positionFromTop={`${getPositionFromTop(200/3)}`}
      />
      <div>
        <span>This is a LLM.</span>
      </div>
      <StyledHandler
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        label="Response"
      />
    </NodeWrapper>
  );
};
