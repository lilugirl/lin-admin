import "./associationsDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datasets/associationsdatatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AssociationsDatatable = () => {
  const [data, setData] = useState(userRows);
  const { t } = useTranslation();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/editAssociation/${id}`);
  };
  const handleClick_view = (id) => {
    navigate(`/ViewCompanyForm/${id}`);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: t("datatable.action"),
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => handleClick_view(params.row.id)}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              {t("datatable.view")}
            </div>
            <div
              className="editButton"
              onClick={() => handleClick(params.row.id)}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              {t("datatable.edit")}
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              {t("datatable.delete")}
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {t("datatable.newAssociation")}
        <Link to="/addAssociation" className="link">
          {t("datatable.addAssociations")}
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default AssociationsDatatable;
