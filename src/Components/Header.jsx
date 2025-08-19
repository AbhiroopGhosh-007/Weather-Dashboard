import { useEffect, useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className=" text-white flex justify-between shadow shadow-black items-center p-4 bg-emerald-300 dark:bg-gray-800 dark:shadow-white dark:text-gray-200">
      <h1 className="p-4 text-2xl font-bold text-black dark:text-white">
        WEATHER APP
      </h1>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="bg-blue-700 rounded text-white px-4 py-2"
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </header>
  );
}

export default Header;
