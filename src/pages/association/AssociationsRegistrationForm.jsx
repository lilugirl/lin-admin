import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "react-i18next";
import "./associations.scss";

const AssociationsRegistrationForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    associationName: "",
    registrationNumber: "",
    industry: "",
    website: "",
    description: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    numberOfMembers: "",
    yearFounded: "",
    annualBudget: "",
    logo: null,
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const validate = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "logo") {
        newErrors[key] = t("associationsRegistrationForm.required");
      }
    });
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t("associationsRegistrationForm.passwordMismatch");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      // Proceed with form submission
    }
  };

  return (
    <div className="Add_Association">
      <form onSubmit={handleSubmit}>
        <div className="new_title">{t("associationsRegistrationForm.title")}</div>
        <div className="association_section">
          <div className="sub_section_title">
            <div>
              <div className="icon">
                <InfoIcon style={{ fontSize: "2rem" }} />
              </div>
              <div>{t("associationsRegistrationForm.generalInfo")}</div>
            </div>
          </div>

          <div className="association_section_details">
            <div className="input-group">
              <label>{t("associationsRegistrationForm.associationName")}</label>
              <input
                className="inputField"
                name="associationName"
                value={formData.associationName}
                onChange={handleChange}
              />
              {errors.associationName && <span>{errors.associationName}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.registrationNumber")}</label>
              <input
                className="inputField"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
              />
              {errors.registrationNumber && <span>{errors.registrationNumber}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.industry")}</label>
              <input
                className="inputField"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
              />
              {errors.industry && <span>{errors.industry}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.website")}</label>
              <input
                className="inputField"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
              {errors.website && <span>{errors.website}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.description")}</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              {errors.description && <span>{errors.description}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.contactName")}</label>
              <input
                className="inputField"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
              />
              {errors.contactName && <span>{errors.contactName}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.contactEmail")}</label>
              <input
                className="inputField"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
              />
              {errors.contactEmail && <span>{errors.contactEmail}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.contactPhone")}</label>
              <input
                className="inputField"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
              />
              {errors.contactPhone && <span>{errors.contactPhone}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.address")}</label>
              <input
                className="inputField"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <span>{errors.address}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.city")}</label>
              <input
                className="inputField"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <span>{errors.city}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.state")}</label>
              <input
                className="inputField"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
              {errors.state && <span>{errors.state}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.postalCode")}</label>
              <input
                className="inputField"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
              {errors.postalCode && <span>{errors.postalCode}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.country")}</label>
              <input
                className="inputField"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
              {errors.country && <span>{errors.country}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.numberOfMembers")}</label>
              <input
                className="inputField"
                name="numberOfMembers"
                value={formData.numberOfMembers}
                onChange={handleChange}
              />
              {errors.numberOfMembers && <span>{errors.numberOfMembers}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.yearFounded")}</label>
              <input
                className="inputField"
                name="yearFounded"
                value={formData.yearFounded}
                onChange={handleChange}
              />
              {errors.yearFounded && <span>{errors.yearFounded}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.annualBudget")}</label>
              <input
                className="inputField"
                name="annualBudget"
                value={formData.annualBudget}
                onChange={handleChange}
              />
              {errors.annualBudget && <span>{errors.annualBudget}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.logo")}</label>
              <input
                className="inputField"
                type="file"
                name="logo"
                onChange={handleChange}
              />
              {errors.logo && <span>{errors.logo}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.email")}</label>
              <input
                className="inputField"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.password")}</label>
              <input
                className="inputField"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>

            <div className="input-group">
              <label>{t("associationsRegistrationForm.confirmPassword")}</label>
              <input
                className="inputField"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                {t("associationsRegistrationForm.terms")}
              </label>
              {errors.terms && <span>{errors.terms}</span>}
            </div>
          </div>
        </div>
        <div className="Register_association_submit_btn">
          <button type="submit" value="Submit">
            {t("associationsRegistrationForm.submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssociationsRegistrationForm;
