import { useState } from "react";
import { NodeWrapper } from "../node-builder/nodeWrapper";
import { NodeInputText } from "../node-builder/nodeInputText";
import { NodeSelectWrapper } from "../node-builder/nodeSelect";
import { StyledHandler } from "../node-builder/stylesHanlder";
import { Position, useUpdateNodeInternals } from "reactflow";
import { useNodeStore } from "../../store/nodeStore";

const conditionOptions = ["Condition", ">", "<", ">=", "<=", "=="];

const branchOptions = ["Yes", "No"];

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState("Condition");
  const [conditionValue, setConditionValue] = useState("Condition");
  const [branch, setBranch] = useState("No");
  const updateNodeInternals = useUpdateNodeInternals();
  const { deleteEdgeFromSourceHandle } = useNodeStore();

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  const handleConditionValueChange = (conditionOption) => {
    setConditionValue(conditionOption);
  };

  const handleBranchChange = (branchOption) => {
    setBranch(branchOption);
    deleteEdgeFromSourceHandle(`${id}-yes`);
    updateNodeInternals(id);
  };

  return (
    <NodeWrapper nodeName="Condition" nodeType="condition" id={id}>
      <StyledHandler
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        label="Input"
      />
      <NodeInputText
        value={condition}
        handleChange={handleConditionChange}
        label="Input Condition"
      />
      <NodeSelectWrapper
        options={conditionOptions}
        value={conditionValue}
        handleChange={handleConditionValueChange}
        label="Comparison"
      />
      <NodeSelectWrapper
        options={branchOptions}
        value={branch}
        handleChange={handleBranchChange}
        label="Branch"
      />
      {branch === "Yes" && (
        <StyledHandler
          type="output"
          position={Position.Right}
          id={`${id}-yes`}
          label="Yes"
        />
      )}
    </NodeWrapper>
  );
};
