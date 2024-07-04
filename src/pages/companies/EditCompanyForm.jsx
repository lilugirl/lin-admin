import React, { useState, useEffect } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "react-i18next";
import "./company.scss";

const EditCompanyForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    companyName: "",
    companyRegistrationNumber: "",
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
    employees: "",
    yearFounded: "",
    revenue: "",
    logo: null,
    email: "",
    password: "",
    confirmPassword: "",
    terms: true, // Assuming terms are already accepted
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching from an API endpoint
    fetchCompanyData()
      .then((data) => {
        setFormData({
          ...data,
          password: "", // Assuming you don't edit passwords here
          confirmPassword: "", // Assuming you don't edit passwords here
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching company data:", error);
        setLoading(false);
      });
  }, []);

  const fetchCompanyData = async () => {
    // Simulated fetch function
    return {
      companyName: "Example Company",
      companyRegistrationNumber: "123456789",
      industry: "Technology",
      website: "https://example.com",
      description: "Example Company Description",
      contactName: "John Doe",
      contactEmail: "john.doe@example.com",
      contactPhone: "123-456-7890",
      address: "123 Example St",
      city: "Exampleville",
      state: "Ex",
      postalCode: "12345",
      country: "Exampleland",
      employees: "100",
      yearFounded: "2000",
      revenue: "1000000",
      // Assuming you don't fetch or edit the logo in this form
      email: "john.doe@example.com",
      terms: true,
    };
  };

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
        newErrors[key] = t("companyRegistrationForm.required");
      }
    });
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t("companyRegistrationForm.passwordMismatch");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      // Proceed with form submission for update
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Edit_Company">
      <form onSubmit={handleSubmit}>
        <div className="new_title">
          {t("companyRegistrationForm.editTitle")}
        </div>
        <div className="company_section">
          <div className="sub_section_title">
            <div>
              <div className="icon">
                <InfoIcon style={{ fontSize: "2rem" }} />
              </div>
              <div>{t("companyRegistrationForm.generalInfo")}</div>
            </div>
          </div>

          <div className="company_section_details">
            <div className="input-group">
              <label>{t("companyRegistrationForm.companyName")}</label>
              <input
                className="inputField"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
              {errors.companyName && <span>{errors.companyName}</span>}
            </div>

            <div className="input-group">
              <label>
                {t("companyRegistrationForm.companyRegistrationNumber")}
              </label>
              <input
                className="inputField"
                name="companyRegistrationNumber"
                value={formData.companyRegistrationNumber}
                onChange={handleChange}
              />
              {errors.companyRegistrationNumber && (
                <span>{errors.companyRegistrationNumber}</span>
              )}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.industry")}</label>
              <input
                className="inputField"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
              />
              {errors.industry && <span>{errors.industry}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.website")}</label>
              <input
                className="inputField"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
              {errors.website && <span>{errors.website}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.description")}</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              {errors.description && <span>{errors.description}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.contactName")}</label>
              <input
                className="inputField"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
              />
              {errors.contactName && <span>{errors.contactName}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.contactEmail")}</label>
              <input
                className="inputField"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
              />
              {errors.contactEmail && <span>{errors.contactEmail}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.contactPhone")}</label>
              <input
                className="inputField"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
              />
              {errors.contactPhone && <span>{errors.contactPhone}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.address")}</label>
              <input
                className="inputField"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <span>{errors.address}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.city")}</label>
              <input
                className="inputField"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <span>{errors.city}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.state")}</label>
              <input
                className="inputField"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
              {errors.state && <span>{errors.state}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.postalCode")}</label>
              <input
                className="inputField"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
              {errors.postalCode && <span>{errors.postalCode}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.country")}</label>
              <input
                className="inputField"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
              {errors.country && <span>{errors.country}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.employees")}</label>
              <input
                className="inputField"
                name="employees"
                value={formData.employees}
                onChange={handleChange}
              />
              {errors.employees && <span>{errors.employees}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.yearFounded")}</label>
              <input
                className="inputField"
                name="yearFounded"
                value={formData.yearFounded}
                onChange={handleChange}
              />
              {errors.yearFounded && <span>{errors.yearFounded}</span>}
            </div>

            <div className="input-group">
              <label>{t("companyRegistrationForm.revenue")}</label>
              <input
                className="inputField"
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
              />
              {errors.revenue && <span>{errors.revenue}</span>}
            </div>

            {/* Assuming you don't edit the logo in edit mode */}

            <div className="input-group">
              <label>{t("companyRegistrationForm.email")}</label>
              <input
                className="inputField"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  disabled // Assuming terms are not editable in edit mode
                />
                {t("companyRegistrationForm.terms")}
              </label>
              {errors.terms && <span>{errors.terms}</span>}
            </div>
          </div>
        </div>
        <div className="Edit_company_submit_btn">
          <button type="submit" value="Update">
            {t("companyRegistrationForm.update")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCompanyForm;
