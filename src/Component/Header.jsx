

// import { useState, useEffect } from 'react';
// import { Menu, X, Bell, Palette, User } from 'lucide-react';
// import { useTheme } from '../Dashboard/Context/ThemeContext';
// import { useNav } from '../Dashboard/Context/NavContext';

// const Header = ({ toggleThemeDrawer }) => { // Accept toggleThemeDrawer as a prop
//   const { darkMode, currentTheme } = useTheme();
//   const { menuOpen, toggleMenu } = useNav();
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [notificationCount, setNotificationCount] = useState(3);


//   const [userProfileOpen, setUserProfileOpen] = useState(false);
//   const [profileImage, setProfileImage] = useState('/api/placeholder/64/64');
//   const [userName, setUserName] = useState('sndp bag');
//   const [userRole, setUserRole] = useState('Administrator');
//   const [editMode, setEditMode] = useState(false);


//   const toggleUserProfile = () => {
//     setUserProfileOpen(!userProfileOpen);
//     if (!userProfileOpen) {
//       setEditMode(false);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // In a real app, you would upload the file to your server
//       // For now, we'll use a placeholder
//       setProfileImage('/api/placeholder/64/64');
//     }
//   };

//   const handleSaveProfile = () => {
//     // Here you would typically save the updated profile to your backend
//     setEditMode(false);
//   };



//     // Close profile popup when clicking outside
//     useEffect(() => {
//         if (userProfileOpen) {
//           const handleClickOutside = (event) => {
//             if (!event.target.closest('#user-profile-popup') && !event.target.closest('#user-profile-button')) {
//               setUserProfileOpen(false);
//               setEditMode(false);
//             }
//           };
    
//           document.addEventListener('mousedown', handleClickOutside);
//           return () => document.removeEventListener('mousedown', handleClickOutside);
//         }
//       }, [userProfileOpen]);





//   // Update time every minute
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   // Format date and time
//   const formatDate = (date) => {
//     return date.toLocaleDateString('en-US', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   const formatTime = (date) => {
//     return date.toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   return (
//     <header className={`p-4 flex items-center justify-between 
//       ${darkMode ? 'bg-gray-800/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'} 
//       border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} sticky top-0 z-30`}>

//       <div className="flex items-center">
//         <button onClick={toggleMenu} className="mr-4 lg:hidden">
//           {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//         <h1 className={`text-xl font-bold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
//           Dashboard
//         </h1>
//       </div>

//       <div className="flex items-center gap-4">
//         {/* Date and Time */}
//         <div className="hidden md:flex flex-col items-end">
//           <span className="text-sm font-medium">{formatDate(currentTime)}</span>
//           <span className="text-xs opacity-70">{formatTime(currentTime)}</span>
//         </div>

//         {/* Notification Bell */}
//         <div className="relative">
//           <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}>
//             <Bell className="w-5 h-5" />
//             {notificationCount > 0 && (
//               <span className={`absolute top-0 right-0 w-4 h-4 flex items-center justify-center text-xs rounded-full bg-red-500 text-white`}>
//                 {notificationCount}
//               </span>
//             )}
//           </button>
//         </div>

//         {/* Theme Toggle - Now using the passed function */}
//         <button
//           onClick={toggleThemeDrawer}
//           className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
//         >
//           <Palette className="w-5 h-5" />
//         </button>

//         {/* User Profile */}
//         <div className="flex items-center gap-2">
//           <div className="hidden sm:block text-right">
//             <p className="text-sm font-medium">sndp bag</p>
//             <p className="text-xs opacity-70">Administrator</p>
//           </div>
//           <div id="user-profile-button"
//             onClick={toggleUserProfile} className={`w-8 h-8 rounded-full flex items-center justify-center 
//             ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
//             <User className="w-5 h-5" />
//           </div>
//         </div>



//               {/* User Profile Popup */}
//               {userProfileOpen && (
//             <div 
//               id="user-profile-popup"
//               className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg z-50 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
//             >
//               <div className="p-4">
//                 {editMode ? (
//                   <div className="space-y-4">
//                     <div className="flex justify-center">
//                       <div className="relative">
//                         <img 
//                           src={profileImage} 
//                           alt="Profile" 
//                           className="w-16 h-16 rounded-full object-cover"
//                         />
//                         <label 
//                           htmlFor="profile-image-upload" 
//                           className={`absolute bottom-0 right-0 p-1 rounded-full cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
//                         >
//                           <Edit size={14} />
//                         </label>
//                         <input 
//                           type="file" 
//                           id="profile-image-upload" 
//                           className="hidden" 
//                           accept="image/*"
//                           onChange={handleImageChange}
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-xs mb-1 opacity-75">Name</label>
//                       <input 
//                         type="text" 
//                         value={userName} 
//                         onChange={(e) => setUserName(e.target.value)} 
//                         className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border`}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs mb-1 opacity-75">Role</label>
//                       <input 
//                         type="text" 
//                         value={userRole} 
//                         onChange={(e) => setUserRole(e.target.value)} 
//                         className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border`}
//                       />
//                     </div>
//                     <div className="flex justify-end space-x-2 pt-2">
//                       <button 
//                         onClick={() => setEditMode(false)} 
//                         className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
//                       >
//                         Cancel
//                       </button>
//                       <button 
//                         onClick={handleSaveProfile} 
//                         className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white"
//                       >
//                         Save
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div>
//                     <div className="flex items-center mb-4">
//                       <img 
//                         src={profileImage} 
//                         alt="Profile" 
//                         className="w-16 h-16 rounded-full object-cover mr-3"
//                       />
//                       <div>
//                         <h3 className="font-medium">{userName}</h3>
//                         <p className="text-sm opacity-75">{userRole}</p>
//                       </div>
//                     </div>
//                     <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} py-2`}>
//                       <button 
//                         onClick={() => setEditMode(true)} 
//                         className={`flex items-center w-full text-left p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
//                       >
//                         <Edit size={16} className="mr-2" />
//                         Edit Profile
//                       </button>
//                       <button 
//                         className={`flex items-center w-full text-left p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
//                       >
//                         <Settings size={16} className="mr-2" />
//                         Settings
//                       </button>
//                       <button 
//                         className={`flex items-center w-full text-left p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
//                       >
//                         <LogOut size={16} className="mr-2" />
//                         Sign Out
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//       </div>


      
//     </header>
//   );
// };

// export default Header;


import { useState, useEffect } from 'react';
import { Menu, X, Bell, Palette, User, Edit, Settings, LogOut } from 'lucide-react';
import { useTheme } from '../Dashboard/Context/ThemeContext';
import { useNav } from '../Dashboard/Context/NavContext';

const Header = ({ toggleThemeDrawer }) => { // Accept toggleThemeDrawer as a prop
  const { darkMode, currentTheme } = useTheme();
  const { menuOpen, toggleMenu } = useNav();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notificationCount, setNotificationCount] = useState(3);

  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const [profileImage, setProfileImage] = useState('/api/placeholder/64/64');
  const [userName, setUserName] = useState('sndp bag');
  const [userRole, setUserRole] = useState('Administrator');
  const [editMode, setEditMode] = useState(false);

  const toggleUserProfile = () => {
    setUserProfileOpen(!userProfileOpen);
    if (!userProfileOpen) {
      setEditMode(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you would upload the file to your server
      // For now, we'll use a placeholder
      setProfileImage('/api/placeholder/64/64');
    }
  };

  const handleSaveProfile = () => {
    // Here you would typically save the updated profile to your backend
    setEditMode(false);
  };

  // Close profile popup when clicking outside
  useEffect(() => {
    if (userProfileOpen) {
      const handleClickOutside = (event) => {
        if (!event.target.closest('#user-profile-popup') && !event.target.closest('#user-profile-button')) {
          setUserProfileOpen(false);
          setEditMode(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [userProfileOpen]);

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

        {/* Theme Toggle - Now using the passed function */}
        <button
          onClick={toggleThemeDrawer}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          <Palette className="w-5 h-5" />
        </button>

        {/* User Profile */}
        <div className="relative">
          <div className="flex items-center gap-2">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium">{userName}</p>
              <p className="text-xs opacity-70">{userRole}</p>
            </div>
            <div 
              id="user-profile-button"
              onClick={toggleUserProfile} 
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer
              ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
            >
              <User className="w-5 h-5" />
            </div>
          </div>

          {/* User Profile Popup */}
          {userProfileOpen && (
            <div 
              id="user-profile-popup"
              className={`absolute right-0 top-full mt-2 w-64 rounded-lg shadow-lg z-50 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
            >
              <div className="p-4">
                {editMode ? (
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="relative">
                        <img 
                          src={profileImage} 
                          alt="Profile" 
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <label 
                          htmlFor="profile-image-upload" 
                          className={`absolute bottom-0 right-0 p-1 rounded-full cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                        >
                          <Edit size={14} />
                        </label>
                        <input 
                          type="file" 
                          id="profile-image-upload" 
                          className="hidden" 
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs mb-1 opacity-75">Name</label>
                      <input 
                        type="text" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                        className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1 opacity-75">Role</label>
                      <input 
                        type="text" 
                        value={userRole} 
                        onChange={(e) => setUserRole(e.target.value)} 
                        className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border`}
                        readOnly
                      />
                    </div>
                    <div className="flex justify-end space-x-2 pt-2">
                      <button 
                        onClick={() => setEditMode(false)} 
                        className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={handleSaveProfile} 
                        className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center mb-4">
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="w-16 h-16 rounded-full object-cover mr-3"
                      />
                      <div>
                        <h3 className="font-medium">{userName}</h3>
                        <p className="text-sm opacity-75">{userRole}</p>
                      </div>
                    </div>
                    <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} py-2`}>
                      <button 
                        onClick={() => setEditMode(true)} 
                        className={`flex items-center w-full text-left p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                      >
                        <Edit size={16} className="mr-2" />
                        Edit Profile
                      </button>
                      <button 
                        className={`flex items-center w-full text-left p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                      >
                        <Settings size={16} className="mr-2" />
                        Settings
                      </button>
                      <button 
                        className={`flex items-center w-full text-left p-2 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                      >
                        <LogOut size={16} className="mr-2" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
