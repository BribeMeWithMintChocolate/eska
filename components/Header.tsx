"use client";  // 👈 Ensures this is a Client Component

import { useState } from "react";
import { LogOut, Moon, Sun } from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className={`flex justify-between items-center px-6 py-4 shadow-md ${darkMode ? "bg-gray-900 text-white" : "bg-white"}`}>
      {/* Title */}
      <h1 className="text-lg font-semibold">Dashboard</h1>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Logout Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg transition hover:bg-red-700">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
