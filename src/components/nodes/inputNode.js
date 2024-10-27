// inputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { NodeWrapper } from "../node-builder/nodeWrapper";
import { NodeInputText } from "../node-builder/nodeInputText";
import { NodeSelectWrapper } from "../node-builder/nodeSelect";
import { NodeInputFile } from "../node-builder/nodeInputFile";
import { StyledHandler } from "../node-builder/stylesHanlder";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");
  const [file, setFile] = useState();

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (option) => {
    setInputType(option);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const options = ["Text", "File"];
  return (
    <NodeWrapper nodeName="Input" nodeType={data?.nodeType} id={id}>
      <div>
        {inputType === "Text" && (
          <NodeInputText
            label="Name"
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
      <StyledHandler
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        className="!bg-white"
      />
    </NodeWrapper>
  );
};
