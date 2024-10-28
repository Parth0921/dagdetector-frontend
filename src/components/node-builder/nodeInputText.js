// Input wrapper for nodes

import { useRef } from "react";
import { NodeLabel } from "./nodeLabel";
import { useFocus } from "../../utils/hooks/useFocus";

export const NodeInputText = ({ label, value, handleChange }) => {
  const inputRef = useRef(null);

  const focused = useFocus(inputRef);

  return (
    <div
      className={`my-2 p-1 rounded-xl border-2 ${
        focused ? "border-accent" : ""
      }`}
    >
      <NodeLabel label={label} />
      <input
        type="text"
        id={label}
        value={value}
        onChange={handleChange}
        ref={inputRef}
        className="px-2 w-full rounded-lg focus:outline-none dark:bg-black dark:text-white"
      />
    </div>
  );
};
