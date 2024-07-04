import React, { useState } from "react";
import "./createGroupProfile.scss";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "react-i18next";

const CreateGroupProfile = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    profilePhoto: null,
    groupName: "",
    fieldOfActivity: "",
    subscription: "",
    subscriptionValue: "",
    email: "",
    phoneNumber: "",
    website: "",
    biography: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePhoto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="create-group-profile">
      <form onSubmit={handleSubmit}>
        <div className="new_title">{t("createGroupProfile.createProfileTitle")}</div>

        <div className="create-group-profile_section">
          <div className="sub_section_title">
            <div>
              <div className="icon">
                <InfoIcon style={{ fontSize: "2rem" }} />
              </div>
              <div>{t("createGroupProfile.generalInformation")}</div>
            </div>
          </div>
          <div className="create-group-profile_section_details">
            <div className="input-group">
              <label>{t("createGroupProfile.profilePhoto")}</label>
              <input
                type="file"
                name="profilePhoto"
                onChange={handleFileChange}
              />
            </div>

            <div className="input-group">
              <label>{t("createGroupProfile.groupName")}</label>
              <input
                type="text"
                name="groupName"
                value={formData.groupName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>{t("createGroupProfile.fieldOfActivity")}</label>
              <input
                type="text"
                name="fieldOfActivity"
                value={formData.fieldOfActivity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>{t("createGroupProfile.subscription")}</label>
              <input
                type="text"
                name="subscription"
                value={formData.subscription}
                onChange={handleChange}
              />
              {formData.subscription && (
                <div className="input-group">
                  <label>{t("createGroupProfile.subscriptionValue")}</label>
                  <input
                    type="text"
                    name="subscriptionValue"
                    value={formData.subscriptionValue}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>

            <div className="input-group">
              <label>{t("createGroupProfile.email")}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>{t("createGroupProfile.phoneNumber")}</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>{t("createGroupProfile.website")}</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>{t("createGroupProfile.biography")}</label>
              <textarea
                name="biography"
                value={formData.biography}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="create-group-profile_submit_btn">
          <button type="submit" value="Submit">
            {t("createGroupProfile.submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroupProfile;
