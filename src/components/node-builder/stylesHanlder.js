import { Handle } from "reactflow";
import { useThemeStore } from "../../storeTheme";

export const StyledHandler = ({ type, position, id, style }) => {
  const { theme } = useThemeStore();

  return (
    <Handle
      type={type}
      position={position}
      id={id}
      style={style}
      className={`${theme === "dark" ? "!bg-white" : ""}`}
    />
  );
};
