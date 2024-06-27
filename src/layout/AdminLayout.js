import React, { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import "./adminLayout.scss";
import '../components/sidebar/sidebar.scss'
import '../components/navbar/navbar.scss'

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="main-wrapper">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="layout-wrapper">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="main_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
