// Reusable component for file input

import { NodeLabel } from "./nodeLabel";

export const NodeInputFile = ({ handleChange }) => {
  return (
    <div className="px-2 rounded-lg p-1 relative border my-2">
      <NodeLabel label="Upload File" />
      <input
        className="mt-2 text-[10px] block w-full cursor-pointer focus:outline-none dark:bg-black dark:text-white"
        type="file"
        onChange={handleChange}
      />
    </div>
  );
};
