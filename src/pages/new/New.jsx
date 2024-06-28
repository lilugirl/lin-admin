import React, { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useTranslation } from "react-i18next";
import "./new.scss";

const New = ({ title, inputs }) => {
  const [file, setFile] = useState("");
  const { t } = useTranslation();
  console.log("file", file);

  return (
    <>
      <div className="new_title">{title}</div>
      <div className="new_section">
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
          <form>
            <div className="formInput">
              <label htmlFor="file">
                {t("form.image")}: <DriveFolderUploadOutlinedIcon className="icon" />
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
            {inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="inputField"
                />
              </div>
            ))}
            <button>{t("form.send")}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default New;
