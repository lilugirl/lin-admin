import "./App.css";
import "./style/dark.scss";
import New from "./pages/new/New";
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
            <Route path="users/:userId" element={<Single />} />
            <Route path="users/new" element={<New inputs={userInputs} title={t("form.addNewUser")}  />} />
            {/* { Products Routes } */}
            <Route path="products" element={<List />} />
            <Route path="products/:productId" element={<Single />} />
            <Route path="products/new" element={<New inputs={productInputs} title={t("form.addNewProduct")} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
