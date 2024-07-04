import "./App.css";
import "./style/dark.scss";
import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AdminLayout from "./layout/AdminLayout";
import { DarkModeContext } from "./context/darkModeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add_New_User from "./pages/user/Add_New_User";
import Edit_New_User from "./pages/user/Edit_New_User";
import View_User from "./pages/user/View_User";
import AccessRights from "./pages/accessRights/AccessRights";
import Add_kladers from "./pages/kladers/Add_kladers";
import Edit_kladers from "./pages/kladers/Edit_kladers";
import View_kladers from "./pages/kladers/View_kladers";
import UserListing from "./pages/list/UserListing";
import KladersListing from "./pages/list/KladersListing";
import CompanyRegistrationForm from "./pages/companies/CompanyRegistrationForm";
import EditCompanyForm from "./pages/companies/EditCompanyForm";
import CompanyListing from "./pages/list/CompanyListing";
import AssociationsDatatable from "./components/datatable/AssociationsDatatable";
import AssociationsRegistrationForm from "./pages/association/AssociationsRegistrationForm";
import CreateExpertiseProfile from "./pages/expertise/createExpertiseProfile/CreateExpertiseProfile";
import CreateGroupProfile from "./pages/createGroupProfile/CreateGroupProfile";
import EditAssociationsForm from "./pages/association/EditAssociationsForm";

function App() {
  const { darkMode } = useContext(DarkModeContext);

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

            {/* Associations Routes */}
            <Route path="/associations" element={<AssociationsDatatable />} />
            <Route path="/addAssociation" element={<AssociationsRegistrationForm />} />
            <Route path="/editAssociation/:Id" element={<EditAssociationsForm />} />

            {/* Expertise Routes */}
            <Route path="/expertise" element={<CreateExpertiseProfile />} />

            {/* Groups Routes */}
            <Route path="/group" element={<CreateGroupProfile />} />



            <Route path="/accessrights" element={<AccessRights />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
