import React, { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import "./add_kladers.scss";
import InfoIcon from "@mui/icons-material/Info";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import AddLocationIcon from "@mui/icons-material/AddLocation";
const Add_kladers = () => {
  const [file, setFile] = useState("");
  const { t } = useTranslation();
  console.log("file", file);

  const activitiesOptions = [
    { value: "activity1", label: "Activity 1" },
    { value: "activity2", label: "Activity 2" },
    { value: "activity3", label: "Activity 3" },
  ];

  const skillsOptions = [
    { value: "skill1", label: "Skill 1" },
    { value: "skill2", label: "Skill 2" },
    { value: "skill3", label: "Skill 3" },
  ];

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

  const [educationList, setEducationList] = useState([
    {
      school: "",
      degree: "",
      place: "",
      year: "",
      description: "",
      activities: [],
      skills: [],
    },
  ]);

  const [experienceList, setExperienceList] = useState([
    {
      company_name: "",
      designation: "",
      start_date: "",
      end_date: "",
      skills: [],
      description: "",
    },
  ]);

  const [addresses, setAddresses] = useState([
    {
      addressType: "",
      house: "",
      street: "",
      city: "",
      countryCode: "",
      postalCode: "",
      comments: "",
    },
  ]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducationList = [...educationList];
    updatedEducationList[index] = {
      ...updatedEducationList[index],
      [name]: value,
    };
    setEducationList(updatedEducationList);
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperienceList = [...experienceList];
    updatedExperienceList[index] = {
      ...updatedExperienceList[index],
      [name]: value,
    };
    setExperienceList(updatedExperienceList);
  };

  const handleAddressChange = (e, index) => {
    const { name, value } = e.target;
    const updatedAddresses = [...addresses];
    updatedAddresses[index] = {
      ...updatedAddresses[index],
      [name]: value,
    };
    setAddresses(updatedAddresses);
  };
  const handleMultiSelectChange_experienceList = (
    index,
    name,
    selectedOptions
  ) => {
    const updatedExperienceList = [...experienceList];
    updatedExperienceList[index] = {
      ...updatedExperienceList[index],
      [name]: selectedOptions,
    };
    setExperienceList(updatedExperienceList);
  };

  const handleMultiSelectChange = (index, name, selectedOptions) => {
    const updatedEducationList = [...educationList];
    updatedEducationList[index] = {
      ...updatedEducationList[index],
      [name]: selectedOptions,
    };
    setEducationList(updatedEducationList);
  };

  const addAddress = (e) => {
    e.preventDefault();
    setAddresses([
      ...addresses,
      {
        addressType: "",
        house: "",
        street: "",
        city: "",
        countryCode: "",
        postalCode: "",
        comments: "",
      },
    ]);
  };

  const addEducation = (e) => {
    e.preventDefault();
    setEducationList([
      ...educationList,
      {
        school: "",
        degree: "",
        place: "",
        year: "",
        description: "",
        activities: [],
        skills: [],
      },
    ]);
  };
  const addExperience = (e) => {
    e.preventDefault();
    setExperienceList([
      ...experienceList,
      {
        company_name: "",
        designation: "",
        start_date: "",
        end_date: "",
        skills: [],
        description: "",
      },
    ]);
  };

  const deleteAddress = (index) => {
    const updatedAddresses = [...addresses];
    updatedAddresses.splice(index, 1);
    setAddresses(updatedAddresses);
  };
  const deleteEducation = (index) => {
    const updatedEducationList = [...educationList];
    updatedEducationList.splice(index, 1);
    setEducationList(updatedEducationList);
  };
  const deleteExperience = (index) => {
    const updatedExperienceList = [...experienceList];
    updatedExperienceList.splice(index, 1);
    setExperienceList(updatedExperienceList);
  };

  return (
    <>
      <div className="Add_kladers">
        <form action="">
          <div className="new_title">{t("form.addKladers")}</div>
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
                      ? URL.createObjectURL(file)
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
          <div className="address-section">
            <div className="sub_section_title">
              <div>
                <div className="icon">
                  <AddLocationIcon style={{ fontSize: "2rem" }} />
                </div>
                <div>{"Addresses"}</div>
              </div>
              <button className="add_button" onClick={addAddress}>
                Add
              </button>
            </div>

            {addresses.map((address, index) => (
              <>
                {addresses.length > 1 && ( // Render delete button only if there is more than one address
                  <div className="deleteAddress_btn">
                    <button
                      className="delete_button"
                      onClick={() => deleteAddress(index)}
                    >
                      Delete
                    </button>
                  </div>
                )}
                <div className="address-details" key={index}>
                  <div className="input-group">
                    <label htmlFor={`addressType-${index}`}>
                      {t("addressSection.addressType")}:{" "}
                    </label>
                    <select
                      id={`addressType-${index}`}
                      value={address.addressType}
                      onChange={(e) => handleAddressChange(e, index)}
                    >
                      <option value="" disabled>
                        {t("addressSection.selectAddressType")}
                      </option>
                      <option value="Home">{t("addressSection.home")}</option>
                      <option value="Office">
                        {t("addressSection.office")}
                      </option>
                      <option value="More">{t("addressSection.more")}</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label htmlFor={`house-${index}`}>
                      {t("addressSection.house")}:{" "}
                    </label>
                    <input
                      type="text"
                      id={`house-${index}`}
                      name={`house-${index}`}
                      value={address.house}
                      onChange={(e) => handleAddressChange(e, index)}
                      className="inputField"
                      placeholder={t("addressSection.house")}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor={`street-${index}`}>
                      {t("addressSection.street")}:{" "}
                    </label>
                    <input
                      type="text"
                      id={`street-${index}`}
                      name={`street-${index}`}
                      value={address.street}
                      onChange={(e) => handleAddressChange(e, index)}
                      className="inputField"
                      placeholder={t("addressSection.street")}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor={`city-${index}`}>
                      {t("addressSection.city")}:{" "}
                    </label>
                    <input
                      type="text"
                      id={`city-${index}`}
                      name={`city-${index}`}
                      value={address.city}
                      onChange={(e) => handleAddressChange(e, index)}
                      className="inputField"
                      placeholder={t("addressSection.city")}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor={`countryCode-${index}`}>
                      {t("addressSection.countryCode")}:{" "}
                    </label>
                    <input
                      type="text"
                      id={`countryCode-${index}`}
                      name={`countryCode-${index}`}
                      value={address.countryCode}
                      onChange={(e) => handleAddressChange(e, index)}
                      className="inputField"
                      placeholder={t("addressSection.countryCode")}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor={`postalCode-${index}`}>
                      {t("addressSection.postalCode")}:{" "}
                    </label>
                    <input
                      type="text"
                      id={`postalCode-${index}`}
                      name={`postalCode-${index}`}
                      value={address.postalCode}
                      onChange={(e) => handleAddressChange(e, index)}
                      className="inputField"
                      placeholder={t("addressSection.postalCode")}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor={`comments-${index}`}>
                      {t("addressSection.comments")}:{" "}
                    </label>
                    <input
                      type="text"
                      id={`comments-${index}`}
                      name={`comments-${index}`}
                      value={address.comments}
                      onChange={(e) => handleAddressChange(e, index)}
                      className="inputField"
                      placeholder={t("addressSection.comments")}
                    />
                  </div>
                </div>

                {index !== addresses.length - 1 && addresses.length > 1 && (
                  <hr className="horizental_line" />
                )}
              </>
            ))}
          </div>
          <div className="formations_section">
            <div className="sub_section_title">
              <div>
                <div className="icon">
                  <SchoolIcon style={{ fontSize: "2rem" }} />
                </div>
                <div>{"Formations"}</div>
              </div>
              <button className="add_button" onClick={addEducation}>
                Add
              </button>
            </div>
            {educationList.map((education, index) => (
              <>
                {educationList.length > 1 && ( // Render delete button only if there is more than one address
                  <div className="deleteAddress_btn">
                    <button
                      className="delete_button"
                      onClick={() => deleteEducation(index)}
                    >
                      Delete
                    </button>
                  </div>
                )}
                <div className="formations_details" key={index}>
                  <div className="input-group">
                    <label>{t("educationSection.school")}</label>
                    <input
                      type="text"
                      name="school"
                      value={education.school}
                      onChange={(e) => handleEducationChange(e, index)}
                    />
                  </div>
                  <div className="input-group">
                    <label>{t("educationSection.place")}</label>
                    <input
                      type="text"
                      name="place"
                      value={education.place}
                      onChange={(e) => handleEducationChange(e, index)}
                    />
                  </div>
                  <div className="input-group">
                    <label>{t("educationSection.degree")}</label>
                    <input
                      type="text"
                      name="degree"
                      value={education.degree}
                      onChange={(e) => handleEducationChange(e, index)}
                    />
                  </div>
                  <div className="input-group">
                    <label>{t("educationSection.year")}</label>
                    <input
                      type="date"
                      name="year"
                      value={education.year}
                      onChange={(e) => handleEducationChange(e, index)}
                    />
                  </div>
                  <div className="input-group">
                    <label>{t("educationSection.activities")}</label>
                    <Select
                      className="multiSelect"
                      isMulti
                      options={activitiesOptions}
                      value={education.activities}
                      onChange={(selectedOptions) =>
                        handleMultiSelectChange(
                          index,
                          "activities",
                          selectedOptions
                        )
                      }
                    />
                  </div>
                  <div className="input-group">
                    <label>{t("educationSection.skills")}</label>
                    <Select
                      className="multiSelect"
                      isMulti
                      options={skillsOptions}
                      value={education.skills}
                      onChange={(selectedOptions) =>
                        handleMultiSelectChange(
                          index,
                          "skills",
                          selectedOptions
                        )
                      }
                    />
                  </div>
                  <div className="input-group">
                    <label>{t("educationSection.description")}</label>
                    <textarea
                      name="description"
                      value={education.description}
                      onChange={(e) => handleEducationChange(e, index)}
                      cols="30"
                      rows="3"
                    />
                  </div>
                </div>
                {index !== educationList.length - 1 &&
                  educationList.length > 1 && (
                    <hr className="horizental_line" />
                  )}
              </>
            ))}
          </div>
          <div className="experiences_section">
            <di v className="sub_section_title">
              <div>
                <div className="icon">
                  <WorkIcon style={{ fontSize: "2rem" }} />
                </div>
                <div>{"Experiences"}</div>
              </div>
              <button className="add_button" onClick={addExperience}>
                Add
              </button>
            </di>
            {experienceList.map((experience, index) => (
              <>
                {experienceList.length > 1 && ( // Render delete button only if there is more than one address
                  <div className="deleteAddress_btn">
                    <button
                      className="delete_button"
                      onClick={() => deleteExperience(index)}
                    >
                      Delete
                    </button>
                  </div>
                )}

                <div className="experiences_details" key={index}>
                  <div className="input-group">
                    <label>{t("experiencesSection.companyName")}</label>
                    <input
                      type="text"
                      name="company_name"
                      value={experience.company_name}
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div className="input-group">
                    <label>{t("experiencesSection.designation")}</label>
                    <input
                      type="text"
                      name="designation"
                      value={experience.designation}
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div className="input-group">
                    <label>{t("experiencesSection.startDate")}</label>
                    <input
                      type="date"
                      name="start_date"
                      value={experience.start_date}
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div className="input-group">
                    <label>{t("experiencesSection.endDate")}</label>
                    <input
                      type="date"
                      name="end_date"
                      value={experience.end_date}
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div className="input-group">
                    <label>{t("experiencesSection.skills")}</label>
                    <Select
                      className="multiSelect"
                      isMulti
                      options={skillsOptions}
                      value={experience.skills}
                      onChange={(selectedOptions) =>
                        handleMultiSelectChange_experienceList(
                          index,
                          "skills",
                          selectedOptions
                        )
                      }
                    />
                  </div>
                  <div className="input-group">
                    <label>{t("experiencesSection.description")}</label>
                    <textarea
                      name="description"
                      value={experience.description}
                      onChange={(e) => handleExperienceChange(e, index)}
                      cols="30"
                      rows="3"
                    />
                  </div>
                </div>
                {index !== experienceList.length - 1 &&
                  experienceList.length > 1 && (
                    <hr className="horizental_line" />
                  )}
              </>
            ))}
          </div>
          <div className="add_new_user_submit_btn">
            <button type="submit" value="Submit">
              {t("personalInfo.submit")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Add_kladers;
