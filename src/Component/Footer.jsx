 
import { useTheme } from '../Dashboard/Context/ThemeContext';

const Footer = () => {
  const { darkMode, currentTheme } = useTheme();
  
  return (
    <footer className={`mt-6 p-4 rounded-lg text-center text-sm
      ${darkMode ? 'bg-gray-800/70 text-gray-400' : 'bg-white/70 text-gray-600'} 
      border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© 2025 Dashboard Company. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <span>Powered by</span>
          <span className={`font-bold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
            Glass UI
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;