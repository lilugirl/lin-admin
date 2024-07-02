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
import Add_New_User from "./pages/add_new_User/Add_New_User";
import Edit_New_User from "./pages/add_new_User/Edit_New_User";
import View_User from "./pages/add_new_User/View_User";
import AccessRights from "./pages/accessRights/AccessRights";
import Add_kladers from "./pages/add_kladers/Add_kladers";
import Edit_kladers from "./pages/add_kladers/Edit_kladers";
import View_kladers from "./pages/add_kladers/View_kladers";
import UserListing from "./pages/list/UserListing";
import KladersListing from "./pages/list/KladersListing.jsx";

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
            <Route path="login" element={<Login />} />
            {/* { User Routes } */}
            <Route path="users" element={<UserListing />} />
            <Route path="addNewUser" element={<Add_New_User />} />
            <Route path="edituser/:Id" element={<Edit_New_User />} />
            <Route path="/viewuser/:Id" element={<View_User />} />

            {/* { kladers Routes } */}
            <Route path="kladers" element={<KladersListing />} />
            <Route path="add_kladers" element={<Add_kladers />} />
            <Route path="editkladers/:Id" element={<Edit_kladers />} />
            <Route path="/viewkladers/:Id" element={<View_kladers />} />

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
