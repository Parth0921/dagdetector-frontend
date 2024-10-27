// reusable node wrapper component
// Including name of the node as it would be common to every type of node created
// Children pattern allows us to put any type of content inside the node keeping the styles consistent

import { RiDeleteBin6Line } from "react-icons/ri";
import { getNodeIcon } from "../../utils/helper/nodeHelper";

export const NodeWrapper = ({ nodeName, nodeType, children }) => {
  const Icon = getNodeIcon(nodeType);
  return (
    <div className="p-1 w-[220px] max-h-[380px] bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] rounded-2xl shadow-lg shadow-[#36C2CE]/60">
      <div className="p-2 m-[2px] bg-white rounded-2xl">
        <div className="text-lg m-2 flex justify-between items-center border-b-2">
          <div className="text-[#36C2CE] flex items-center gap-x-2">
            <p className="">{nodeName}</p>
            {Icon && <Icon className="text-lg" />}
          </div>
          <div className="cursor-pointer">
            <RiDeleteBin6Line />
          </div>
        </div>
        <div className="p-2 text-sm">{children}</div>
      </div>
    </div>
  );
};
