import React, { useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "../Filters/node_modules/ag-grid-community/dist/styles/ag-grid.css";
import "../Filters/node_modules/ag-grid-community/dist/styles/ag-theme-material.css";
import "./style.css";

interface Props {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setQuickFilter?: any
}

export const Search: React.FC<Props> = () => {
  const [gridApi, setGridApi] = useState<Props>({})
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const rowData = require("./data.json");
  const columnDefs = [
    {
      headerName: "Firm Name",
      field: "firmName",
      sort: "asc",
      sortable: true,
      filter: true,
      width: 1000,
      resizable: false,
      flex: 2,
    },
    {
      headerName: "State",
      field: "state",
      sortable: true,
      filter: true,
      width: 180,
      resizable: false,
      flex: 2,
    },
    {
      headerName: "Users",
      field: "numberOfUsers",
      sortable: true,
      filter: true,
      width: 180,
      resizable: false,
    },
    {
      headerName: "Status",
      field: "statusDescription",
      sortable: true,
      filter: true,
      width: 180,
      resizable: false,
    },
    {
      headerName: "Test Firm",
      field: "isTestFirm",
      sortable: true,
      filter: true,
      width: 180,
      resizable: false,
    },
  ];

  function onGridReady(params: any) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  const filterSearch = (e: any) => {
    gridApi.setQuickFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        onChange={filterSearch}
        id="filter-text-box"
        placeholder="Search"
      ></input>
      <div className="ag-theme-material" style={{ height: "550px" }}>
        <AgGridReact
          onGridReady={onGridReady}
          columnDefs={columnDefs}
          rowData={rowData}
        ></AgGridReact>
      </div>
    </div>
  );
};
