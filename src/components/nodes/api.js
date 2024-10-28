// API node for making external API calls whose data is to be used in the pipeline

import { useState } from "react";
import { NodeWrapper } from "../node-builder/nodeWrapper";
import { NodeInputText } from "../node-builder/nodeInputText";
import { NodeSelectWrapper } from "../node-builder/nodeSelect";
import { NodeInputTextArea } from "../node-builder/nodeInputTextArea";
import { StyledHandler } from "../node-builder/stylesHanlder";
import { Position } from "reactflow";

const methodOptions = ["GET", "POST"];

export const APINode = ({ id, data }) => {
  const [apiEndpoint, setApiEndpoint] = useState("");
  const [apiMethod, setApiMethod] = useState("GET");
  const [apiBody, setApiBody] = useState("");

  const handleApiEndpointChange = (e) => {
    setApiEndpoint(e.target.value);
  };
  const handleApiMethodChange = (method) => {
    setApiMethod(method);
  };
  const handleApiBodyChange = (e) => {
    setApiBody(e.target.value);
  };

  return (
    <NodeWrapper nodeName="API Node" nodeType="api" id={id}>
      <NodeInputText
        label="API Endpoint"
        value={apiEndpoint}
        handleChange={handleApiEndpointChange}
      />
      <NodeSelectWrapper
        label="Method"
        options={methodOptions}
        value={apiMethod}
        handleChange={handleApiMethodChange}
      />
      {apiMethod === "POST" && (
        <NodeInputTextArea
          label="Body"
          value={apiBody}
          handleChange={handleApiBodyChange}
        />
      )}
      <StyledHandler
        id={`${id}-response`}
        type="source"
        position={Position.Right}
        label="API Response"
      />
    </NodeWrapper>
  );
};
