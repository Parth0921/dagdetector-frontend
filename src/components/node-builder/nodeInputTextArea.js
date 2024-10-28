import TextareaAutosize from "react-textarea-autosize";
import { NodeLabel } from "./nodeLabel";
import { useFocus } from "../../utils/hooks/useFocus";
import { useRef } from "react";

export const NodeInputTextArea = ({ label, value, handleChange, maxRows }) => {
  const textareaRef = useRef(null);
  const focused = useFocus(textareaRef);
  return (
    <div
      className={`my-2 p-1 rounded-xl border-2 ${
        focused ? "border-accent" : ""
      }`}
    >
      <NodeLabel label={label} />
      <TextareaAutosize
        minRows={5}
        maxRows={maxRows || 10}
        value={value}
        onChange={handleChange}
        ref={textareaRef}
        className="px-2 resize-none w-full self-center focus:outline-none dark:bg-black dark:text-white"
      />
    </div>
  );
};
