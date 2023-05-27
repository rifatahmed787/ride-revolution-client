import { useContext } from "react";
import { DarkModeContext } from "./DarkmoodContext/DarkModeContext";

function App() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className={`bg-white dark:bg-gray-800 ${isDarkMode ? "dark" : ""}`}>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </div>
    </>
  );
}

export default App;
