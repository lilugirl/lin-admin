import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar.jsx';
import Navbar from '../components/navbar/Navbar.jsx';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div className='main-wrapper'>
      <div className='layout-wrapper'>
        <aside className='sidebar-wrapper'>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </aside>
        <main className='content-wrapper'>
        <Navbar toggleSidebar={toggleSidebar} />
          <div className='contents'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
