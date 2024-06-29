import { useTranslation } from "react-i18next";

export const useTranslatedUserInputs = () => {
  const { t } = useTranslation();
  return [
    { id: 1, label: t("form.username"), type: "text", placeholder: "john_doe" },
    { id: 2, label: t("form.nameAndSurname"), type: "text", placeholder: "John Doe" },
    { id: 3, label: t("form.email"), type: "mail", placeholder: "john_doe@gmail.com" },
    { id: 4, label: t("form.phone"), type: "text", placeholder: "+1 234 567 89" },
    { id: 5, label: t("form.password"), type: "password" },
    { id: 6, label: t("form.address"), type: "text", placeholder: "Elton St. 216 NewYork" },
    { id: 7, label: t("form.country"), type: "text", placeholder: "USA" },
  ];
};

export const useTranslatedProductInputs = () => {
  const { t } = useTranslation();
  return [
    { id: 1, label: t("form.title"), type: "text", placeholder: "Apple Macbook Pro" },
    { id: 2, label: t("form.description"), type: "text", placeholder: "Description" },
    { id: 3, label: t("form.category"), type: "text", placeholder: "Computers" },
    { id: 4, label: t("form.price"), type: "text", placeholder: "100" },
    { id: 5, label: t("form.stock"), type: "text", placeholder: "in stock" }
  ];
};
