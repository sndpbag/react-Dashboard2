// ContentArea.jsx
import { Outlet } from 'react-router-dom';
 
import { useTheme } from '../Dashboard/Context/ThemeContext';

const ContentArea = () => {
  const { darkMode, currentTheme } = useTheme();
  
  return (
    <div className={`rounded-2xl flex-1 p-3
      ${darkMode ? 'bg-gray-800/50 backdrop-blur-lg' : 'bg-white/50 backdrop-blur-lg'} 
      border ${darkMode ? 'border-gray-700' : 'border-gray-200'}
      shadow-lg`}>
      <Outlet />
    </div>
  );
};

export default ContentArea;