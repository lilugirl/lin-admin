import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";
import Datatable from "../../components/datatable/Datatable";
import { useState } from "react";

const List = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="home">
       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="homeContainer">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="main_content">
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default List;
