// Takes id of the node and input to create dynamic handlers for the node and is memoized to avoid unnecessary re-renders.

import { Handle, Position, useUpdateNodeInternals } from "reactflow";
import { extractInputHandler } from "../../utils/helper/textNodeHelper";
import { useCallback, useEffect } from "react";
import { StyledHandler } from "./stylesHanlder";

export const DynamicHandler = ({ id, input }) => {
  const dynamicHandlers = extractInputHandler(input);
  const updateNodeInternals = useUpdateNodeInternals();

  const updateNode = useCallback(
    () => updateNodeInternals(id),
    [id, dynamicHandlers, updateNodeInternals]
  );
  useEffect(() => updateNode(), [updateNode]);

  return (
    <>
      {dynamicHandlers.length > 0 &&
        dynamicHandlers.map((handle, index) => {
          const len = dynamicHandlers.length;
          const positionFromTop = ((index + 1) * 100) / (len + 1);
          const handleId = `${id}-input-${index + 1}-${handle}`;
          return (
            <StyledHandler
              key={handleId}
              type="target"
              position={Position.Left}
              id={handleId}
              style={{ top: `${positionFromTop}%` }}
            />
          );
        })}
    </>
  );
};
