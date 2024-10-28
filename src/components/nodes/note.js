// Note Nodes which are not a part of pipeline but usefull for documentaton

import { useState } from "react";
import { NodeInputTextArea } from "../node-builder/nodeInputTextArea";
import { NodeWrapper } from "../node-builder/nodeWrapper";

export const NoteNode = ({ id, data }) => {
  const [note, setNode] = useState("Document your thoughts here");

  const handleNoteChange = (e) => {
    setNode(e.target.value);
  };

  return (
    <NodeWrapper nodeName="Note" nodeType={data?.nodeType} id={id}>
      <NodeInputTextArea
        handleChange={handleNoteChange}
        value={note}
        label="Note"
      />
    </NodeWrapper>
  );
};
