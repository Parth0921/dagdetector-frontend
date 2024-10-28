// Takes id of the node and input to create dynamic handlers for the node and is memoized to avoid unnecessary re-renders.

import { Position, useUpdateNodeInternals } from "reactflow";
import { useCallback, useEffect } from "react";
import { StyledHandler } from "./stylesHanlder";
import { getPositionFromTop } from "../../utils/helper/nodeHelper";

export const DynamicHandler = ({ id, dynamicHandlers }) => {
  const updateNodeInternals = useUpdateNodeInternals();

  const updateNode = useCallback(
    () => updateNodeInternals(id),
    [dynamicHandlers, id, updateNodeInternals]
  );
  useEffect(() => updateNode(), [updateNode]);

  return (
    <>
      {dynamicHandlers.length > 0 &&
        dynamicHandlers.map((handle, index) => {
          const len = dynamicHandlers.length;
          const positionFromTop = getPositionFromTop(
            ((index + 1) * 100) / (len + 1)
          );
          const handleId = `${id}-input-${index + 1}-${handle}`;
          return (
            <StyledHandler
              key={handleId}
              type="target"
              position={Position.Left}
              id={handleId}
              label={handle}
              positionFromTop={positionFromTop}
            />
          );
        })}
    </>
  );
};
