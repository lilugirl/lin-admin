import "./expertiseDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { groupColumns, groupRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GroupDatatable = () => {
  const [data, setData] = useState(groupRows);
  const { t } = useTranslation();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/editGroupProfile/${id}`);
  };
  const handleClick_view = (id) => {
    navigate(`/viewGroupProfile/${id}`);
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
        {t("datatable.newGroup")}
        <Link to="/createGroupProfile" className="link">
          {t("datatable.createGroup")}
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={groupColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default GroupDatatable;
