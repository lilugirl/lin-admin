import React from "react";
import { useTranslation } from "react-i18next";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import "./single.scss";

const Single = () => {
  const { t } = useTranslation();

  return (
    <div className="single">
      <div className="top">
        <div className="left">
          <div className="editButton">{t("view_profile.editButton")}</div>
          <h1 className="title">{t("view_profile.informationTitle")}</h1>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">Liu Yi</h1>
              <div className="detailItem">
                <span className="itemKey">{t("view_profile.emailKey")}</span>
                <span className="itemValue">794516454@qq.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">{t("view_profile.phoneKey")}</span>
                <span className="itemValue">+86 138xxxxxxx</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">{t("view_profile.addressKey")}</span>
                <span className="itemValue">上海市宝山区</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">{t("view_profile.countryKey")}</span>
                <span className="itemValue">中国</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title={t("view_profile.userSpendingChartTitle")} />
        </div>
      </div>
      <div className="single_table">
        <h1 className="title">{t("view_profile.lastTransactionsTitle")}</h1>
        <List />
      </div>
    </div>
  );
};

export default Single;
