import React, { useState, useEffect } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useTranslation } from "react-i18next";
import "./add_New_User.scss";
import InfoIcon from "@mui/icons-material/Info";
import { useParams } from "react-router-dom";

const Edit_New_User = () => {
  const [file, setFile] = useState(
    "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  );
  const { t } = useTranslation();
  const { Id } = useParams();
  const [personalInfo, setPersonalInfo] = useState({
    accessRight: "",
    username: "",
    gender: "",
    nameAndSurname: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    country: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // const response = await fetch(`/api/users/$Id}`);
        const response = await fetch(`/user.json`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const userData = await response.json();

        console.log(userData, "userData");

        setPersonalInfo({
          accessRight: userData.accessRight,
          username: userData.username,
          gender: userData.gender,
          nameAndSurname: userData.nameAndSurname,
          email: userData.email,
          phone: userData.phone,
          password: userData.password,
          address: userData.address,
          country: userData.country,
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [Id]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = personalInfo;

      const response = await fetch(`/api/users/${Id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("User updated successfully");
    } catch (error) {
      console.error("Failed to update user data:", error);
      alert("Failed to update user");
    }
  };

  return (
    <div className="Add_new_user">
      <form onSubmit={handleSubmit}>
        <div className="new_title">{t("form.editUser")}</div>
        <div className="gernal_information_section">
          <div className="sub_section_title">
            <div>
              <div className="icon">
                {<InfoIcon style={{ fontSize: "2rem" }} />}
              </div>
              <div>{"General informations"}</div>
            </div>
          </div>
          <div className="gernal_information_details">
            <div className="left">
              <img
                src={
                  file
                    ? file
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <div className="input-group">
                <label htmlFor="file">
                  {t("personalInfo.image")}:{" "}
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  style={{ display: "none" }}
                />
              </div>
              <div className="input-group">
                <label>{t("personalInfo.username")}</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={personalInfo.username}
                  placeholder="john_doe"
                  className="inputField"
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div className="input-group">
                <label>{t("personalInfo.nameAndSurname")}</label>
                <input
                  type="text"
                  id="nameAndSurname"
                  name="nameAndSurname"
                  value={personalInfo.nameAndSurname}
                  placeholder="John Doe"
                  className="inputField"
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div className="input-group">
                <label>{t("personalInfo.email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={personalInfo.email}
                  placeholder="john_doe@gmail.com"
                  className="inputField"
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div className="input-group">
                <label>{t("personalInfo.phone")}</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="+1 234 567 89"
                  value={personalInfo.phone}
                  className="inputField"
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div className="input-group">
                <label>{t("personalInfo.password")}</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={personalInfo.password}
                  className="inputField"
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div className="input-group">
                <label>{t("personalInfo.address")}</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={personalInfo.address}
                  placeholder="Elton St. 216 NewYork"
                  className="inputField"
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div className="input-group">
                <label>{t("personalInfo.country")}</label>
                <input
                  type="text"
                  id="country"
                  value={personalInfo.country}
                  name="country"
                  placeholder="USA"
                  className="inputField"
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="access-right">
                  {t("personalInfo.accessRight")}:
                </label>
                <select
                  id="access-right"
                  name="accessRight"
                  value={personalInfo.accessRight}
                  onChange={handlePersonalInfoChange}
                >
                  <option value="" disabled>
                    {t("personalInfo.selectAccessRight")}
                  </option>
                  <option value="kladeur">{t("personalInfo.kladeur")}</option>
                  <option value="entreprise-owner">
                    {t("personalInfo.entrepriseOwner")}
                  </option>
                  <option value="association-owner">
                    {t("personalInfo.associationOwner")}
                  </option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="gender">{t("personalInfo.gender")}</label>
                <select
                  id="gender"
                  name="gender"
                  value={personalInfo.gender}
                  onChange={handlePersonalInfoChange}
                >
                  <option value="" disabled>
                    {t("personalInfo.selectGender")}
                  </option>
                  <option value="male">{t("personalInfo.male")}</option>
                  <option value="female">{t("personalInfo.female")}</option>
                  <option value="transgender">
                    {t("personalInfo.transgender")}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="add_new_user_submit_btn">
          <button type="submit" value="Submit">
            {t("form.update")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit_New_User;
