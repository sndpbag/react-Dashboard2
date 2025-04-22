import { useState, useEffect } from 'react';
import { Menu, X, Bell, Palette, User } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useNav } from './NavContext';

const Header = () => {
  const { darkMode, currentTheme } = useTheme();
  const { menuOpen, toggleMenu } = useNav();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notificationCount, setNotificationCount] = useState(3);
  const [themeDrawerOpen, setThemeDrawerOpen] = useState(false);

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Format date and time
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const toggleThemeDrawer = () => {
    setThemeDrawerOpen(!themeDrawerOpen);
  };

  return (
    <header className={`p-4 flex items-center justify-between 
      ${darkMode ? 'bg-gray-800/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'} 
      border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} sticky top-0 z-30`}>

      <div className="flex items-center">
        <button onClick={toggleMenu} className="mr-4 lg:hidden">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <h1 className={`text-xl font-bold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Date and Time */}
        <div className="hidden md:flex flex-col items-end">
          <span className="text-sm font-medium">{formatDate(currentTime)}</span>
          <span className="text-xs opacity-70">{formatTime(currentTime)}</span>
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}>
            <Bell className="w-5 h-5" />
            {notificationCount > 0 && (
              <span className={`absolute top-0 right-0 w-4 h-4 flex items-center justify-center text-xs rounded-full bg-red-500 text-white`}>
                {notificationCount}
              </span>
            )}
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleThemeDrawer}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          <Palette className="w-5 h-5" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs opacity-70">Administrator</p>
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center 
            ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;