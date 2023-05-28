import { useContext } from "react";
import { DarkModeContext } from "./DarkmoodContext/DarkModeContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";

function App() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className={`bg-white dark:bg-gray-800 ${isDarkMode ? "dark" : ""}`}>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
