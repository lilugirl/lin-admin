import React from "react";

const CompanyDetails = ({ formData, setFormData, t }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
     <div className="input-group">
        <label>{t("create_expertise_profile.form.company_details.companyName")}</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>{t("create_expertise_profile.form.company_details.address")}</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>{t("create_expertise_profile.form.company_details.website")}</label>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>{t("create_expertise_profile.form.company_details.email")}</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>{t("create_expertise_profile.form.company_details.phoneNumber")}</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>{t("create_expertise_profile.form.company_details.sirenNumber")}</label>
        <input
          type="text"
          name="sirenNumber"
          value={formData.sirenNumber}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default CompanyDetails;
