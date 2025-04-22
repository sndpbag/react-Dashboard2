import {
    createBrowserRouter,
   
  } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../ItemCompoent/Dashboard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          index: true,
          element: <Dashboard />,
        }
      
      ]
    },
  ]);

export default router;