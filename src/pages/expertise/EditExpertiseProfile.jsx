import React, { useState, useEffect } from "react";
import Biography from "./createExpertiseProfile/Biography";
import CompanyDetails from "./createExpertiseProfile/CompanyDetails";
import AddDocuments from "./createExpertiseProfile/AddDocuments";
import "./createExpertiseProfile.scss";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "react-i18next";

const EditExpertiseProfile = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    biography: "",
    companyName: "",
    address: "",
    website: "",
    email: "",
    phoneNumber: "",
    sirenNumber: "",
    vigilanceCertificate: null,
    taxRegularityCertificate: null,
    honorCertificate: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/expertiseProfile.json");
      const data = await response.json();
      setFormData(data);
    };

    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="Edit-expertise-profile">
      <form onSubmit={handleSubmit}>
        <div className="new_title">{t("create_expertise_profile.title")}</div>
        <div className="Edit_expertise_section">
          <div className="sub_section_title">
            <div>
              <div className="icon">
                <InfoIcon style={{ fontSize: "2rem" }} />
              </div>
              <div>{t("create_expertise_profile.general_info")}</div>
            </div>
          </div>
          <div className="Edit_expertise_section_details">
            <Biography formData={formData} setFormData={setFormData} t={t} />
            <CompanyDetails formData={formData} setFormData={setFormData} t={t} />
            <AddDocuments formData={formData} setFormData={setFormData} t={t} />
          </div>
        </div>
        <div className="Edit_expertise_submit_btn">
          <button type="submit" value="Submit">{t("create_expertise_profile.update")}</button>
        </div>
      </form>
    </div>
  );
};

export default EditExpertiseProfile;
