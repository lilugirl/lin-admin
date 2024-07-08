import React from "react";

const AddDocuments = ({ formData, setFormData,t }) => {
  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  return (
    <>
       <div className="input-group">
        <label>{t("create_expertise_profile.form.add_documents.vigilanceCertificate")}</label>
        <input
          type="file"
          name="vigilanceCertificate"
          onChange={handleFileChange}
        />
      </div>
      <div className="input-group">
        <label>{t("create_expertise_profile.form.add_documents.taxRegularityCertificate")}</label>
        <input
          type="file"
          name="taxRegularityCertificate"
          onChange={handleFileChange}
        />
      </div>
      <div className="input-group">
        <label>{t("create_expertise_profile.form.add_documents.honorCertificate")}</label>
        <input
          type="file"
          name="honorCertificate"
          onChange={handleFileChange}
        />
      </div>
    </>
  );
};

export default AddDocuments;
