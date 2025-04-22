import {
    createBrowserRouter,
   
  } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
       
            path: 'users',
            element: <Users />,
         
        }
      ]
    },
  ]);

export default router;