import { useEffect } from "react";

const ThemeToggle = () => {
  useEffect(() => {
    // Always set dark theme
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  // Return null to hide the toggle button
  return null;
};

export default ThemeToggle;
