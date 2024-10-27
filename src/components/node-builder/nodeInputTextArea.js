import TextareaAutosize from "react-textarea-autosize";
import { NodeLabel } from "./nodeLabel";
import { useFocus } from "../../utils/hooks/useFocus";
import { useRef } from "react";

export const NodeInputTextArea = ({ label, value, handleChange }) => {
  const textareaRef = useRef(null);
  const focused = useFocus(textareaRef);
  return (
    <div
      className={`my-2 p-1 rounded-xl border ${focused ? "border-accent" : ""}`}
    >
      <NodeLabel label={label} />
      <TextareaAutosize
        minRows={5}
        maxRows={13}
        value={value}
        onChange={handleChange}
        ref={textareaRef}
        className="resize-none w-full self-center focus:outline-none dark:bg-black dark:text-white"
      />
    </div>
  );
};
