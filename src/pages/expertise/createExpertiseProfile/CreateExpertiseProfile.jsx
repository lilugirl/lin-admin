import React, { useState } from "react";
import Biography from "./Biography";
import CompanyDetails from "./CompanyDetails";
import AddDocuments from "./AddDocuments";
import "./createExpertiseProfile.scss";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "react-i18next";


const CreateExpertiseProfile = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="create-expertise-profile">
    <form onSubmit={handleSubmit}>
      <div className="new_title">{t("create_expertise_profile.title")}</div>
      <div className="expertise_section">
        <div className="sub_section_title">
          <div>
            <div className="icon">
              <InfoIcon style={{ fontSize: "2rem" }} />
            </div>
            <div>{t("create_expertise_profile.general_info")}</div>
          </div>
        </div>
        <div className="expertise_section_details">
          <Biography formData={formData} setFormData={setFormData} t={t} />
          <CompanyDetails formData={formData} setFormData={setFormData} t={t} />
          <AddDocuments formData={formData} setFormData={setFormData} t={t} />
        </div>
      </div>
      <div className="create_expertise_submit_btn">
        <button type="submit" value="Submit">{t("create_expertise_profile.submit")}</button>
      </div>
    </form>
  </div>
  );
};

export default CreateExpertiseProfile;
