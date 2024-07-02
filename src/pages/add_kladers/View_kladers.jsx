import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./view_kladers.scss";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { useTranslation } from "react-i18next";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import HomeIcon from "@mui/icons-material/Home";
import StreetviewIcon from "@mui/icons-material/Streetview";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LanguageIcon from "@mui/icons-material/Language";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";
const View_kladers = () => {
  const [userData, setUserData] = useState(null);
  console.log(userData, "userData");
  const { t } = useTranslation();
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // const response = await fetch(`/api/users/${userId}`);
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
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="View_kladers">
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
      <div className="address_section">
        <div className="sub_section_title">
          <div>
            <div className="icon">
              {<AddLocationIcon style={{ fontSize: "2rem" }} />}
            </div>
            <div>{t("form.addresses")}</div>
          </div>
        </div>
        {userData.addresses.map((address, index) => (
          <>
            <div className="address_details" key={index}>
              <div className="input-group">
                <div className="icon">
                  {<MyLocationIcon style={{ fontSize: "2rem" }} />}
                </div>
                <div>
                  <label>{t("addressSection.addressType")}</label>
                  <div>{address.addressType}</div>
                </div>
              </div>
              <div className="input-group">
                <div className="icon">
                  {<HomeIcon style={{ fontSize: "1.5rem" }} />}
                </div>
                <div>
                  <label>{t("addressSection.house")}</label>
                  <div>{address.house}</div>
                </div>
              </div>
              <div className="input-group">
                <div className="icon">
                  {<StreetviewIcon style={{ fontSize: "1.5rem" }} />}
                </div>
                <div>
                  <label>{t("addressSection.street")}</label>
                  <div>{address.street}</div>
                </div>
              </div>
              <div className="input-group">
                <div className="icon">
                  {<LocationCityIcon style={{ fontSize: "1.5rem" }} />}
                </div>
                <div>
                  <label>{t("addressSection.city")}</label>
                  <div>{address.city}</div>
                </div>
              </div>
              <div className="input-group">
                <div className="icon">
                  {<LanguageIcon style={{ fontSize: "1.5rem" }} />}
                </div>
                <div>
                  <label>{t("addressSection.countryCode")}</label>
                  <div>{address.countryCode}</div>
                </div>
              </div>
              <div className="input-group">
                <div className="icon">
                  {<MarkAsUnreadIcon style={{ fontSize: "1.5rem" }} />}
                </div>
                <div>
                  <label>{t("addressSection.postalCode")}</label>
                  <div>{address.postalCode}</div>
                </div>
              </div>
              <div className="input-group">
                <div className="icon">
                  {<CommentsDisabledIcon style={{ fontSize: "1.5rem" }} />}
                </div>
                <div>
                  <label>{t("addressSection.comments")}</label>
                  <div>{address.comments}</div>
                </div>
              </div>
            </div>
            {index < userData.addresses.length - 1 && (
              <hr className="horizontal_line" />
            )}
          </>
        ))}
      </div>

      <div className="formations_section">
        <div className="sub_section_title">
          <div>
            <div className="icon">
              {<SchoolIcon style={{ fontSize: "2rem" }} />}
            </div>
            <div>{t("form.formations")}</div>
          </div>
        </div>
        {userData.educationList.map((education, index) => (
          <>
            <div className="formations_details" key={index}>
              <div className="icon_wrapper">
                <div className="icon">
                  {<SchoolIcon style={{ fontSize: "2rem" }} />}
                </div>
                <div className="school_wrapper">
                  <div className="school_heading">{education.school}</div>
                  <div className="school_place">({education.place})</div>
                </div>
              </div>
              <div>{education.degree}</div>
              <div className="school_year">
                Years : <span>{education.year}</span>
              </div>
              <div>{education.description}</div>
              <div className="activity-wrapper">
                Activities
                <div className="activity-content">
                  {education.activities.map((activity, index) => (
                    <div key={index} className="activity-box">
                      {activity.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="skills_wrapper">
                Skills :
                <div className="skills-content">
                  {education.skills.map((skills, index) => (
                    <div key={index} className="skills-box">
                      {skills.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {index < userData.educationList.length - 1 && (
              <hr className="horizontal_line" />
            )}
          </>
        ))}
      </div>
      <div className="experiences_section">
        <div className="sub_section_title">
          <div>
            <div className="icon">
              {<WorkIcon style={{ fontSize: "2rem" }} />}
            </div>
            <div>{t("form.experiences")}</div>
          </div>
        </div>
        {userData.experienceList.map((experience, index) => (
          <>
            <div className="experiences_details" key={index}>
              <div className="icon_wrapper">
                <div className="icon">
                  {<SchoolIcon style={{ fontSize: "2rem" }} />}
                </div>
                <div className="experience_wrapper">
                  <div className="experience_heading">
                    {experience.company_name}
                  </div>
                  <div className="experience_place">({experience.place})</div>
                </div>
              </div>
              <div className="experience_designation">
                {experience.designation}
              </div>
              <div className="designation_year">
                <span>{experience.start_date}</span> /{" "}
                <span>{experience.end_date}</span>
              </div>
              <div>{experience.description}</div>
              <div className="skills_wrapper">
                Skills :
                <div className="skills-content">
                  {experience.skills.map((skills, index) => (
                    <div key={index} className="skills-box">
                      {skills.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {index < userData.experienceList.length - 1 && (
              <hr className="horizontal_line" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default View_kladers;
