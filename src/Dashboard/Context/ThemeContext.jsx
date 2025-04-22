// ThemeContext.jsx
import { createContext, useContext, useState } from 'react';

const themes = [
  { name: 'Blue Nebula', primary: 'from-blue-400 to-purple-500', bg: 'from-blue-900/10 via-purple-900/5 to-pink-900/10' },
  { name: 'Emerald Dawn', primary: 'from-emerald-400 to-teal-500', bg: 'from-emerald-900/10 via-teal-900/5 to-cyan-900/10' },
  { name: 'Crimson Sunset', primary: 'from-red-400 to-orange-500', bg: 'from-red-900/10 via-orange-900/5 to-yellow-900/10' },
  { name: 'Violet Dreams', primary: 'from-indigo-400 to-violet-500', bg: 'from-indigo-900/10 via-violet-900/5 to-purple-900/10' },
  { name: 'Ocean Breeze', primary: 'from-cyan-400 to-blue-500', bg: 'from-cyan-900/10 via-blue-900/5 to-indigo-900/10' },
];

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ 
      darkMode, 
      setDarkMode, 
      toggleTheme, 
      currentTheme, 
      setCurrentTheme, 
      themes 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);