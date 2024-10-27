import { useEffect, useState } from "react";

export const useFocus = (ref) => {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    const element = ref.current;
    if (element) {
      element.addEventListener("focus", handleFocus);
      element.addEventListener("blur", handleBlur);
    }

    return () => {
      element.removeEventListener("focus", handleFocus);
      element.removeEventListener("blur", handleBlur);
    };
  }, [ref]);

  return focused;
};
