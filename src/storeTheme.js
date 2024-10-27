import { create } from "zustand";

const loadThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  return theme;
};

const saveThemeToLocalStorage = (theme) => {
  localStorage.setItem("theme", theme);
};

const getSystemTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

const applyTheme = (theme) => {
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

export const useThemeStore = create((set) => {
  const initialTheme = loadThemeFromLocalStorage() || getSystemTheme();

  // Apply the theme immediately based on the initial state
  applyTheme(initialTheme);

  return {
    theme: initialTheme,

    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === "light" ? "dark" : "light";
        saveThemeToLocalStorage(newTheme);
        applyTheme(newTheme);
        return { theme: newTheme };
      }),
  };
});
