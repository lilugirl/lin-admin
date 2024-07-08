import "./App.css";
import "./style/dark.scss";
import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AdminLayout from "./layout/AdminLayout";
import { DarkModeContext } from "./context/darkModeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewUser from "./pages/user/Add_New_User";
import EditNewUser from "./pages/user/Edit_New_User";
import ViewUser from "./pages/user/View_User";
import AccessRights from "./pages/accessRights/AccessRights";
import AddKladers from "./pages/kladers/Add_kladers";
import EditKladers from "./pages/kladers/Edit_kladers";
import ViewKladers from "./pages/kladers/View_kladers";
import UserListing from "./pages/list/UserListing";
import KladersListing from "./pages/list/KladersListing";
import CompanyRegistrationForm from "./pages/companies/CompanyRegistrationForm";
import EditCompanyForm from "./pages/companies/EditCompanyForm";
import CompanyListing from "./pages/list/CompanyListing";
import AssociationsDatatable from "./components/datatable/AssociationsDatatable";
import AssociationsRegistrationForm from "./pages/association/AssociationsRegistrationForm";
import EditAssociationsForm from "./pages/association/EditAssociationsForm";
import ExpertiseDatatable from "./components/datatable/ExpertiseDatatable";
import CreateGroupProfile from "./pages/groupProfile/CreateGroupProfile";
import GroupDatatable from "./components/datatable/GroupDatatable";
import EditCreateGroupProfile from "./pages/groupProfile/EditCreateGroupProfile";
import CreateExpertiseProfile from "./pages/expertise/CreateExpertiseProfile";
import EditExpertiseProfile from "./pages/expertise/EditExpertiseProfile";

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
            <Route path="/addNewUser" element={<AddNewUser />} />
            <Route path="/edituser/:Id" element={<EditNewUser />} />
            <Route path="/viewuser/:Id" element={<ViewUser />} />

            {/* { kladers Routes } */}
            <Route path="/kladers" element={<KladersListing />} />
            <Route path="/addkladers" element={<AddKladers />} />
            <Route path="/editkladers/:Id" element={<EditKladers />} />
            <Route path="/viewkladers/:Id" element={<ViewKladers />} />

            {/* Company Routes */}
            <Route path="/company" element={<CompanyListing />} />
            <Route path="/addCompany" element={<CompanyRegistrationForm />} />
            <Route path="/editCompanyForm/:Id" element={<EditCompanyForm />} />

            {/* Associations Routes */}
            <Route path="/associations" element={<AssociationsDatatable />} />
            <Route path="/addAssociation" element={<AssociationsRegistrationForm />} />
            <Route path="/editAssociation/:Id" element={<EditAssociationsForm />} />

            {/* Expertise Routes */}
            <Route path="/expertise" element={<ExpertiseDatatable />} />
            <Route path="/createExpertise" element={<CreateExpertiseProfile />} />
            <Route path="/editExpertise/:Id" element={<EditExpertiseProfile />} />

            {/* Groups Routes */}
            <Route path="/group" element={<GroupDatatable />} />
            <Route path="/createGroupProfile" element={<CreateGroupProfile />} />
            <Route path="/editGroupProfile/:Id" element={<EditCreateGroupProfile />} />



            <Route path="/accessrights" element={<AccessRights />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
