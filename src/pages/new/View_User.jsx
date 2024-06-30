import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./view_user.scss";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { useTranslation } from "react-i18next";

const View_User = () => {
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
    <div className="view_user">
      <div className="new_title">{t("form.viewUser")}</div>
      <div className="general_information_section">
        <div className="sub_section_title">
          <div>
            <div className="icon">{<InfoIcon />}</div>
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
            <div className="icon">{<AddLocationIcon />}</div>
            <div>{t("form.addresses")}</div>
          </div>
        </div>
        {userData.addresses.map((address, index) => (
          <>
            <div className="address_details" key={index}>
              <div className="input-group">
                <label>{t("addressSection.addressType")}</label>
                <div>{address.addressType}</div>
              </div>
              <div className="input-group">
                <label>{t("addressSection.house")}</label>
                <div>{address.house}</div>
              </div>
              <div className="input-group">
                <label>{t("addressSection.street")}</label>
                <div>{address.street}</div>
              </div>
              <div className="input-group">
                <label>{t("addressSection.city")}</label>
                <div>{address.city}</div>
              </div>
              <div className="input-group">
                <label>{t("addressSection.countryCode")}</label>
                <div>{address.countryCode}</div>
              </div>
              <div className="input-group">
                <label>{t("addressSection.postalCode")}</label>
                <div>{address.postalCode}</div>
              </div>
              <div className="input-group">
                <label>{t("addressSection.comments")}</label>
                <div>{address.comments}</div>
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
            <div className="icon">{<SchoolIcon />}</div>
            <div>{t("form.formations")}</div>
          </div>
        </div>
        {userData.educationList.map((education, index) => (
          <>
            <div className="formations_details" key={index}>
              <div className="input-group">
                <label>{t("educationSection.school")}</label>
                <div>{education.school}</div>
              </div>
              <div className="input-group">
                <label>{t("educationSection.place")}</label>
                <div>{education.place}</div>
              </div>
              <div className="input-group">
                <label>{t("educationSection.degree")}</label>
                <div>{education.degree}</div>
              </div>
              <div className="input-group">
                <label>{t("educationSection.year")}</label>
                <div>{education.year}</div>
              </div>
              <div className="input-group">
                <label>{t("educationSection.activities")}</label>
                <div>
                  {education.activities
                    .map((activity) => activity.label)
                    .join(", ")}
                </div>
              </div>
              <div className="input-group">
                <label>{t("educationSection.skills")}</label>
                <div>
                  {education.skills.map((skill) => skill.label).join(", ")}
                </div>
              </div>
              <div className="input-group">
                <label>{t("educationSection.description")}</label>
                <div>{education.description}</div>
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
            <div className="icon">{<WorkIcon />}</div>
            <div>{t("form.experiences")}</div>
          </div>
        </div>
        {userData.experienceList.map((experience, index) => (
          <>
            <div className="experiences_details" key={index}>
              <div className="input-group">
                <label>{t("experiencesSection.companyName")}</label>
                <div>{experience.company_name}</div>
              </div>
              <div className="input-group">
                <label>{t("experiencesSection.designation")}</label>
                <div>{experience.designation}</div>
              </div>
              <div className="input-group">
                <label>{t("experiencesSection.startDate")}</label>
                <div>{experience.start_date}</div>
              </div>
              <div className="input-group">
                <label>{t("experiencesSection.endDate")}</label>
                <div>{experience.end_date}</div>
              </div>
              <div className="input-group">
                <label>{t("experiencesSection.skills")}</label>
                <div>
                  {experience.skills.map((skill) => skill.label).join(", ")}
                </div>
              </div>
              <div className="input-group">
                <label>{t("experiencesSection.description")}</label>
                <div>{experience.description}</div>
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

export default View_User;
