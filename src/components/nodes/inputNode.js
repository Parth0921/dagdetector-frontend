// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { NodeWrapper } from "../node-builder/nodeWrapper";
import { NodeInputText } from "../node-builder/nodeInputText";
import { NodeSelectWrapper } from "../node-builder/nodeSelect";
import { NodeInputFile } from "../node-builder/nodeInputFile";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");
  const [file, setFile] = useState();

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const options = ["Text", "File"];
  return (
    <NodeWrapper nodeName="Input" nodeType={data?.nodeType}>
      <div>
        {inputType === "Text" && (
          <NodeInputText
            label="Name:"
            value={currName}
            handleChange={handleNameChange}
          />
        )}
        {inputType === "File" && (
          <NodeInputFile handleChange={handleFileChange} />
        )}
        <NodeSelectWrapper
          label="Type"
          value={inputType}
          handleChange={handleTypeChange}
          options={options}
        />
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </NodeWrapper>
  );
};
