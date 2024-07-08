import React from 'react';

const Biography = ({ formData, setFormData,t }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, biography: e.target.value });
  };

  return (
    <div className="input-group">
    <label>{t("create_expertise_profile.form.biography")}</label>
    <textarea value={formData.biography} onChange={handleChange} />
  </div>
  );
};

export default Biography;
