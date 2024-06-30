import "./App.css";
import "./style/dark.scss";
import { useContext } from "react";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import AdminLayout from "./layout/AdminLayout";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "./context/darkModeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslatedUserInputs, useTranslatedProductInputs } from "./formSource";
import Add_New_User from "./pages/new/Add_New_User";
import Edit_New_User from "./pages/new/Edit_New_User";
import View_User from "./pages/new/View_User";
import AccessRights from "./pages/accessRights/AccessRights";

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
            <Route path="users" element={<List />} />
            <Route path="users/:userId" element={<Edit_New_User />} />
            <Route path="/view/:userId" element={<View_User />} />
            <Route path="/accessrights" element={<AccessRights />} />
            {/* <Route path="users/:userId" element={<Single />} /> */}
            <Route path="users/addNewUser" element={<Add_New_User  title={t("form.addNewUser")}  />} />
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
