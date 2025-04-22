import { useState } from 'react';
import { ThemeProvider } from '../Dashboard/Context/ThemeContext';
import { NavProvider } from '../Dashboard/Context/NavContext';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import ThemeDrawer from '../Component/ThemeDrawer';
import ContentArea from '../Component/ContentArea';
import Footer from '../Component/Footer';
 

const DashboardLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeDrawerOpen, setThemeDrawerOpen] = useState(false);

  const toggleThemeDrawer = () => {
    setThemeDrawerOpen(!themeDrawerOpen);
  };

  return (
    <ThemeProvider>
      <NavProvider>
        {({ darkMode, currentTheme }) => (
          <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            {/* Glass gradient overlay for background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.bg} pointer-events-none`} />

            <Header />

            <div className="flex flex-1 relative">
              {/* Mobile sidebar */}
              <Sidebar mobile={true} />

              {/* Theme drawer */}
              <ThemeDrawer isOpen={themeDrawerOpen} onClose={toggleThemeDrawer} />

              {/* Desktop sidebar */}
              <Sidebar mobile={false} />

              {/* Main content */}
              <main className="flex-1 p-4 lg:p-6 flex flex-col min-h-screen">
                <ContentArea />
                <Footer />
              </main>
            </div>

            {/* Overlay for mobile when drawer is open */}
            {(menuOpen || themeDrawerOpen) && (
              <div
                className="lg:hidden fixed inset-0 bg-black/50 z-30"
                onClick={() => {
                  setMenuOpen(false);
                  setThemeDrawerOpen(false);
                }}
              />
            )}
          </div>
        )}
      </NavProvider>
    </ThemeProvider>
  );
};

export default DashboardLayout;