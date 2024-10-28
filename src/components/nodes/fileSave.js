// File save node which takes an intermediate/output file and saves it locally. Output can be text or image

import { useState } from "react";
import { NodeWrapper } from "../node-builder/nodeWrapper";
import { NodeInputText } from "../node-builder/nodeInputText";
import { NodeSelectWrapper } from "../node-builder/nodeSelect";
import { StyledHandler } from "../node-builder/stylesHanlder";
import { Position } from "reactflow";

const options = ["Text", "Image"];

export const FileSaveNode = ({ id, data }) => {
  const [fileName, setFileName] = useState(
    id.replace("fileSave-", "file_") + ".txt" || ""
  );
  const [fileType, setFileType] = useState("Text");

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const fileTypeChange = (option) => {
    let name = fileName.split(".")[0];
    if (name === "") {
      name = id.replace("fileSave-", "file_");
    }
    if (option === "Image") {
      setFileName(`${name}.png`);
    } else {
      setFileName(`${name}.txt`);
    }
    setFileType(option);
  };

  return (
    <NodeWrapper nodeName="File Save" nodeType={data?.nodeType} id={id}>
      <StyledHandler
        type={"target"}
        position={Position.Left}
        id={`${id}-value`}
        label="File"
      />
      <NodeInputText
        label="File Name"
        value={fileName}
        handleChange={handleFileNameChange}
      />
      <NodeSelectWrapper
        label="File Type"
        value={fileType}
        handleChange={fileTypeChange}
        options={options}
      />
    </NodeWrapper>
  );
};
