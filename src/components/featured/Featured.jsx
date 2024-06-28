import React from "react";
import { useTranslation } from "react-i18next";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  const { t } = useTranslation();

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">{t("total_revenue.title")}</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">{t("total_revenue.totalSalesTodayTitle")}</p>
        <p className="amount">{t("total_revenue.totalSalesAmount")}</p>
        <p className="desc">{t("total_revenue.desc")}</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              {t("total_revenue.targetTitle")}
            </div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$23.3</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              {t("total_revenue.lastWeekTitle")}
            </div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$23.3</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              {t("total_revenue.lastMonthTitle")}
            </div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$23.3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
