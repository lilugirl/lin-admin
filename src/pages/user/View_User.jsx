import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./view_user.scss";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "react-i18next";

const View_User = () => {
  const [userData, setUserData] = useState(null);
  console.log(userData, "userData");
  const { t } = useTranslation();
  const { Id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // const response = await fetch(`/api/users/${Id}`);
        const response = await fetch(`/user.json`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [Id]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view_user">
      <div className="new_title">{t("form.viewUser")}</div>
      <div className="general_information_section">
        <div className="sub_section_title">
          <div>
            <div className="icon">
              {<InfoIcon style={{ fontSize: "2rem" }} />}
            </div>
            <div>{t("form.generalinformations")}</div>
            <div>{t("form.addresses")}</div>
          </div>
        </div>
        <div className="general_information_details">
          <div className="left">
            <img
              src={
                userData.profileImageUrl
                  ? userData.profileImageUrl
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <div className="input-group">
              <label>{t("personalInfo.username")}</label>
              <div>{userData.username}</div>
            </div>
            <div className="input-group">
              <label>{t("personalInfo.nameAndSurname")}</label>
              <div>{userData.nameAndSurname}</div>
            </div>
            <div className="input-group">
              <label>{t("personalInfo.email")}</label>
              <div>{userData.email}</div>
            </div>
            <div className="input-group">
              <label>{t("personalInfo.phone")}</label>
              <div>{userData.phone}</div>
            </div>
            <div className="input-group">
              <label>{t("personalInfo.address")}</label>
              <div>{userData.address}</div>
            </div>
            <div className="input-group">
              <label>{t("personalInfo.country")}</label>
              <div>{userData.country}</div>
            </div>
            <div className="input-group">
              <label>{t("personalInfo.accessRight")}</label>
              <div>{userData.accessRight}</div>
            </div>
            <div className="input-group">
              <label>{t("personalInfo.gender")}</label>
              <div>{userData.gender}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_User;
