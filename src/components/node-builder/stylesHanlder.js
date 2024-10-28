import { Handle } from "reactflow";
import { useThemeStore } from "../../store/themeStore";

export const StyledHandler = ({
  type,
  position,
  id,
  label,
  positionFromTop,
}) => {
  const { theme } = useThemeStore();
  return (
    <Handle
      type={type}
      position={position}
      id={id}
      style={{
        padding: 4,
        ...(theme === "dark"
          ? { background: "rgba(255,255,255,0.85)", border: "none" }
          : {}),
        ...(positionFromTop ? { top: positionFromTop } : {}),
        ...(position === "left" ? { left: -6 } : { right: -6 }),
      }}
    >
      {" "}
      <span
        className={`absolute bottom-1/2 text-sm font-semibold cursor-auto ${
          theme === "dark" ? "text-white" : ""
        } ${position === "left" ? "right-full mr-2" : "left-full ml-2"}`}
      >
        {label}
      </span>
    </Handle>
  );
};
