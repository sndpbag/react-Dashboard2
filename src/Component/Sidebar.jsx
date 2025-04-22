import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, LogOut, User } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useNav } from './NavContext';

const Sidebar = ({ mobile = false }) => {
  const { darkMode, currentTheme } = useTheme();
  const { navItems, expandedItems, toggleSubmenu, isActive, isSubmenuActive } = useNav();

  return (
    <aside className={`${mobile ? 'lg:hidden' : 'hidden lg:block'} 
      ${mobile ? 'fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out' : 'w-64 h-screen sticky top-16'} 
      ${mobile ? (darkMode ? 'bg-gray-800/95 backdrop-blur-lg' : 'bg-white/95 backdrop-blur-lg') : 
                (darkMode ? 'bg-gray-800/80 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md')} 
      ${mobile ? '' : 'overflow-y-auto'}
      border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      
      <div className={`${mobile ? 'p-4 mt-16' : 'p-6'}`}>
        {!mobile && (
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center
              ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-medium">John Doe</h2>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Administrator</p>
            </div>
          </div>
        )}
        
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col">
              <button
                onClick={() => toggleSubmenu(item.name)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg w-full transition-colors
                  ${(isActive(item.path) || isSubmenuActive(item.subMenus) || expandedItems[item.name])
                    ? `bg-gradient-to-r ${currentTheme.primary}/20 text-blue-400 border border-blue-500/30`
                    : `${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                `}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                {expandedItems[item.name] ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {/* Submenu */}
              {expandedItems[item.name] && (
                <div className={`ml-4 mt-1 pl-2 border-l ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  {item.subMenus.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className={`flex items-center gap-2 px-3 py-2 mt-1 rounded-lg text-sm
                        ${isActive(subItem.path)
                          ? `bg-gradient-to-r ${currentTheme.primary}/10 text-blue-400`
                          : `${darkMode ? 'hover:bg-gray-700/70' : 'hover:bg-gray-200/70'}`}
                      `}
                    >
                      {subItem.icon || <div className="w-4 h-4" />}
                      <span>{subItem.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-20 left-0 right-0 px-6">
        <button className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg
          ${darkMode
            ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20'
            : 'bg-red-100 text-red-500 hover:bg-red-200'}`}>
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;