import "./App.css";
import "./style/dark.scss";
import { useContext } from "react";
import Home from "./pages/home/Home";
import List from "./pages/list/UserListing";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import AdminLayout from "./layout/AdminLayout";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "./context/darkModeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  useTranslatedUserInputs,
  useTranslatedProductInputs,
} from "./formSource";
import Add_New_User from "./pages/user/Add_New_User.jsx";
import Edit_New_User from "./pages/user/Edit_New_User.jsx";
import View_User from "./pages/user/View_User.jsx";
import AccessRights from "./pages/accessRights/AccessRights";
import Add_kladers from "./pages/kladers/Add_kladers.jsx";
import Edit_kladers from "./pages/kladers/Edit_kladers.jsx";
import View_kladers from "./pages/kladers/View_kladers.jsx";
import UserListing from "./pages/list/UserListing";
import KladersListing from "./pages/list/KladersListing.jsx";
import CompanyRegistrationForm from "./pages/companies/CompanyRegistrationForm.jsx";
import EditCompanyForm from "./pages/companies/EditCompanyForm.jsx";
import CompanyListing from "./pages/list/CompanyListing.jsx";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { t } = useTranslation();
  const userInputs = useTranslatedUserInputs();
  const productInputs = useTranslatedProductInputs();

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* { User Routes } */}
            <Route path="/users" element={<UserListing />} />
            <Route path="/addNewUser" element={<Add_New_User />} />
            <Route path="/edituser/:Id" element={<Edit_New_User />} />
            <Route path="/viewuser/:Id" element={<View_User />} />

            {/* { kladers Routes } */}
            <Route path="/kladers" element={<KladersListing />} />
            <Route path="/addkladers" element={<Add_kladers />} />
            <Route path="/editkladers/:Id" element={<Edit_kladers />} />
            <Route path="/viewkladers/:Id" element={<View_kladers />} />

            {/* Company Routes */}
            <Route path="/company" element={<CompanyListing />} />
            <Route path="/addCompany" element={<CompanyRegistrationForm />} />
            <Route path="/editCompanyForm/:Id" element={<EditCompanyForm />} />


            <Route path="/accessrights" element={<AccessRights />} />

            {/* <Route path="users/:userId" element={<Single />} />
            {/* { Products Routes } */}
            {/* <Route path="products" element={<List />} />
            <Route path="products/:productId" element={<Single />} /> */}
            {/* <Route path="products/new" element={<New inputs={productInputs} title={t("form.addNewProduct")} />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
