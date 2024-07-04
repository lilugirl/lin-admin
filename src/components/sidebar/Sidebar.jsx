import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({ isOpen, setIsOpen, toggleSidebar }) => {
  const { dispatch } = useContext(DarkModeContext);
  const { t } = useTranslation();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false); // Close sidebar for screens <= 768px
      } else {
        setIsOpen(true); // Open sidebar for screens > 768px
      }
    };

    // Call handleResize initially and add event listener for resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div
      className={`sidebar_auto_close ${isOpen ? "sidebar" : "sidebar_close"}`}
    >
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">linadmin</span>
        </Link>
        <div className="menu_button" onClick={toggleSidebar}>
          <CloseIcon />
        </div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">{t("titles.main")}</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>{t("links.dashboard")}</span>
            </li>
          </Link>
          <p className="title">{t("titles.ACCOUNTS")}</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>{t("links.users")}</span>
            </li>
          </Link>
          <Link to="/kladers" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>{t("links.kladers")}</span>
            </li>
          </Link>
          <Link to={"/company"} style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>{t("links.companies")}</span>
            </li>
          </Link>
          <Link to={"/associations"} style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>{t("links.associations")}</span>
            </li>
          </Link>
          <Link to={"/expertise"} style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>{t("links.experts")}</span>
            </li>
          </Link>

          <Link to={"/group"} style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>{t("links.groups")}</span>
            </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>{t("links.patents")}</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>{t("links.klads")}</span>
          </li>
          <p className="title">{t("titles.useful")}</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>{t("links.stats")}</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>{t("links.notifications")}</span>
          </li>
          <p className="title">{t("titles.service")}</p>
          <Link to="/accessrights" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>{t("links.rights")}</span>
            </li>
          </Link>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>{t("links.systemHealth")}</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>{t("links.logs")}</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>{t("links.settings")}</span>
          </li>
          <p className="title">{t("titles.user")}</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>{t("links.profile")}</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>{t("links.logout")}</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
