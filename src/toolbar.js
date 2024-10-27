// toolbar.js

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { DraggableNode } from "./draggableNode";
import { useThemeStore } from "./storeTheme";
import { nodes } from "./utils/constants/nodesList";

export const PipelineToolbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <div className="p-[10px] flex justify-center items-center">
      <div className="my-6 flex-1 flex flex-wrap gap-2 justify-center gap-x-3">
        {
          // Cleaner and extensible way to render draggable nodes
          nodes.map((node) => (
            <DraggableNode
              key={node.type}
              type={node.type}
              label={node.label}
              Icon={node.icon}
            />
          ))
        }
      </div>
      <button
        className="mr-5 rounded-full bg-black/30 text-white hover:bg-black/50 hover:scale-105 active:scale-[1.025] p-4 dark:bg-white/90 dark:hover:bg-white dark:text-black"
        onClick={() => toggleTheme()}
      >
        {theme === "light" ? (
          <MdOutlineDarkMode size={30} />
        ) : (
          <MdOutlineLightMode size={30} />
        )}
      </button>
    </div>
  );
};
