import { useContext } from "react";
import { DarkModeContext } from "./DarkmoodContext/DarkModeContext";

function App() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <div
        className={`bg-white dark:bg-gray-800 ${isDarkMode ? "dark" : ""}`}
      ></div>
    </>
  );
}

export default App;
