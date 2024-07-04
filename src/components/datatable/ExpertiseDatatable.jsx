import "./expertiseDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ExpertiseDatatable = () => {
  const [data, setData] = useState(userRows);
  const { t } = useTranslation();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/editExpertise/${id}`);
  };
  const handleClick_view = (id) => {
    navigate(`/viewExpertise/${id}`);
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
        {t("datatable.newExpertise")}
        <Link to="/createExpertise" className="link">
          {t("datatable.createExpertise")}
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

export default ExpertiseDatatable;
