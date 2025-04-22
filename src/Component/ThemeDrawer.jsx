import { ChevronLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

const ThemeDrawer = ({ isOpen, onClose }) => {
  const { darkMode, setDarkMode, currentTheme, setCurrentTheme, themes } = useTheme();

  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-72 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        ${darkMode ? 'bg-gray-800/95 backdrop-blur-lg' : 'bg-white/95 backdrop-blur-lg'} 
        border-l ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-bold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
            Theme Settings
          </h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-700/50">
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Mode</h3>
          <div className="flex gap-4">
            <button
              onClick={() => setDarkMode(true)}
              className={`flex-1 py-2 px-4 rounded-lg border ${darkMode
                ? 'border-blue-500 bg-blue-500/20'
                : 'border-gray-600 hover:bg-gray-700/20'}`}
            >
              <Moon className="w-5 h-5 mx-auto" />
              <span className="block text-xs mt-1">Dark</span>
            </button>
            <button
              onClick={() => setDarkMode(false)}
              className={`flex-1 py-2 px-4 rounded-lg border ${!darkMode
                ? 'border-blue-500 bg-blue-500/20'
                : 'border-gray-600 hover:bg-gray-700/20'}`}
            >
              <Sun className="w-5 h-5 mx-auto" />
              <span className="block text-xs mt-1">Light</span>
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Color Themes</h3>
          <div className="flex flex-col gap-2">
            {themes.map((theme, index) => (
              <button
                key={index}
                onClick={() => setCurrentTheme(theme)}
                className={`flex items-center p-3 rounded-lg ${currentTheme.name === theme.name
                  ? `bg-gradient-to-r ${theme.primary}/20 border border-blue-500/30`
                  : `${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200/50'}`}`}
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${theme.primary} mr-3`}></div>
                <span>{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDrawer;