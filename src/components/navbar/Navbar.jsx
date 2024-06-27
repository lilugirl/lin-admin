import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ toggleSidebar }) => {
  const { dispatch } = useContext(DarkModeContext);
  return (
<div className="navbar">
  <div className="wrapper">
    <div className="navbar__left">
      <button className="navbar__toggle-btn" onClick={toggleSidebar}>
        <MenuIcon />
      </button>
    </div>
    <div className="search">
      <input type="text" placeholder="Search..." />
      <SearchOutlinedIcon />
    </div>
    <div className="items">
      <div className="item">
        <LanguageOutlinedIcon className="icon" /> English
      </div>
      <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
        <DarkModeOutlinedIcon className="icon" />
      </div>
      <div className="item">
        <FullscreenExitOutlinedIcon className="icon" />
      </div>
      <div className="item">
        <NotificationsNoneOutlinedIcon className="icon" />
        <div className="counter">1</div>
      </div>
      <div className="item">
        <ChatBubbleOutlineOutlinedIcon className="icon" />
        <div className="counter">2</div>
      </div>
      <div className="item">
        <ListOutlinedIcon className="icon" />
      </div>
      <div className="item">
        <img
          src="https://avatars.githubusercontent.com/u/2498335?v=4"
          alt=""
          className="avatar"
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default Navbar;
