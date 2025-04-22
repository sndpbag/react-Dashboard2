import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Home,
  BarChart2,
  Users,
  Briefcase,
  Settings,
  Activity,
  LineChart,
  FileText,
  PieChart,
  UserCheck,
  UserPlus,
  Shield,
  UserX,
  Calendar,
  Layers,
  Key,
  HelpCircle
} from 'lucide-react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();

  // Navigation items with submenus
  const navItems = [
    {
      name: 'Dashboard',
      icon: <Home className="w-5 h-5" />,
      path: '/',
      subMenus: [
        { name: 'Overview', path: '/' },
        { name: 'Sales', path: '/dashboard/sales' },
        { name: 'Performance', path: '/dashboard/performance' },
        { name: 'Resources', path: '/dashboard/resources' }
      ]
    },
    {
      name: 'Analytics',
      icon: <BarChart2 className="w-5 h-5" />,
      path: '/analytics',
      subMenus: [
        { name: 'Statistics', path: '/analytics/statistics', icon: <Activity className="w-4 h-4" /> },
        { name: 'Charts', path: '/analytics/charts', icon: <LineChart className="w-4 h-4" /> },
        { name: 'Reports', path: '/analytics/reports', icon: <FileText className="w-4 h-4" /> },
        { name: 'Forecasts', path: '/analytics/forecasts', icon: <PieChart className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Users',
      icon: <Users className="w-5 h-5" />,
      path: '/users',
      subMenus: [
        { name: 'All Users', path: '/users/all', icon: <UserCheck className="w-4 h-4" /> },
        { name: 'Add User', path: '/users/add', icon: <UserPlus className="w-4 h-4" /> },
        { name: 'Permissions', path: '/users/permissions', icon: <Shield className="w-4 h-4" /> },
        { name: 'Inactive', path: '/users/inactive', icon: <UserX className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Projects',
      icon: <Briefcase className="w-5 h-5" />,
      path: '/projects',
      subMenus: [
        { name: 'Active', path: '/projects/active' },
        { name: 'Archived', path: '/projects/archived' },
        { name: 'Timeline', path: '/projects/timeline', icon: <Calendar className="w-4 h-4" /> },
        { name: 'Resources', path: '/projects/resources', icon: <Layers className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      path: '/settings',
      subMenus: [
        { name: 'General', path: '/settings/general' },
        { name: 'Security', path: '/settings/security', icon: <Key className="w-4 h-4" /> },
        { name: 'Notifications', path: '/settings/notifications' },
        { name: 'Help', path: '/settings/help', icon: <HelpCircle className="w-4 h-4" /> }
      ]
    },
  ];

  useEffect(() => {
    // Close mobile menu when route changes
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = (itemName) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  // Check if a nav item is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Check if any submenu of a nav item is active
  const isSubmenuActive = (subMenus) => {
    return subMenus.some(item => location.pathname === item.path);
  };

  return (
    <NavContext.Provider value={{ 
      menuOpen, 
      setMenuOpen, 
      toggleMenu, 
      navItems, 
      expandedItems,
      toggleSubmenu,
      isActive,
      isSubmenuActive
    }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);