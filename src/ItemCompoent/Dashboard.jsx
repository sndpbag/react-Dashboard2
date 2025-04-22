import { useTheme } from '../Dashboard/Context/ThemeContext';

const Dashboard = () => {
  const { darkMode, currentTheme } = useTheme();
  
  return (
    <div className="p-6">
      <h1 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
        Dashboard Overview
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stats cards */}
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-white/50'} 
          border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
          <h2 className="text-lg font-medium mb-2">Total Users</h2>
          <p className="text-3xl font-bold">12,345</p>
          <p className={`text-sm mt-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>↑ 12% from last month</p>
        </div>
        
        {/* More content... */}
      </div>
    </div>
  );
};

export default Dashboard;