import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from '../Redux/themeSlicer';

function Theme() {

      const [darkMode, setDarkMode] = useState(false);
      const dispatch = useDispatch()

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const handleToggle = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
    console.log(darkMode)
    if(darkMode){
      dispatch(darkTheme())
    }
    else{
      dispatch(lightTheme())
    }
    
  };

  return (
        <div className="flex flex-wrap items-center justify-center gap-12">
      <label className="relative inline-flex items-center cursor-pointer gap-3">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleToggle}
          className="sr-only peer"
        />
        <div className="w-16 h-8 bg-gray-600 peer-checked:bg-slate-300 rounded-full transition-colors duration-200"></div>
        <span className="dot absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-8 flex items-center justify-center">
          {darkMode ? (
            <Sun className="w-4 h-4 text-yellow-500" />
          ) : (
            <Moon className="w-4 h-4 text-gray-800" />
          )}
        </span>
       
      </label>
    </div>
  )
}

export default Theme