import React, { useState } from "react";

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "../Filters/node_modules/ag-grid-community/dist/styles/ag-grid.css";
import "../Filters/node_modules/ag-grid-community/dist/styles/ag-theme-material.css";
import "./style.css";

const Grid = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  let getFirms = require("./data.json");
  // When API is Ready:
  //const [rowData, setRowData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://www.ag-grid.com/example-assets/row-data.json")
  //       .then((result) => result.json())
  //       .then((rowData) => setRowData(rowData));
  //   }, []);

  var statusColors = {
    "rag-green-outer": function (getFirms: any) {
      return getFirms.StatusDescription === "disabled";
    },
    "rag-red-outer": function (getFirms: any) {
      return getFirms.StatusDescription === "enabled";
    },
  };

  return (
    <div className="wrapper">
      <div className="outer-div">
        <h3>FIRMS</h3>
        <div className="button-bar">
          <input type="text" id="filter-text-box" placeholder="Filter"></input>
          <button id="search-btn">Search</button>
          <button>State</button>
          <button>Live</button>
          <button>Enabled</button>
        </div>
        <div className="grid-wrapper">
          <div
            className="ag-theme-material"
            style={{
              height: "80%",
              width: "98%",
            }}
          >
            <AgGridReact rowData={getFirms}>
              <AgGridColumn
              headerName="tester"
                field="FirmName"
                minWidth={1000}
                maxWidth={1100}
                flex={2}
                sort="asc"
                sortable={false}
                resizable={false}
              ></AgGridColumn>
              <AgGridColumn
                field="State"
                minWidth={110}
                maxWidth={130}
                flex={2}
                sortable={false}
                resizable={false}
              ></AgGridColumn>
              <AgGridColumn
                field="Users"
                minWidth={110}
                maxWidth={130}
                flex={2}
                sortable={false}
                resizable={false}
              ></AgGridColumn>
              <AgGridColumn
                field="StatusDescription"
                cellStyle={statusColors}
                minWidth={160}
                maxWidth={180}
                flex={2}
                sortable={false}
                resizable={false}
              ></AgGridColumn>
              <AgGridColumn
                field="IsTestFirm"
                minWidth={120}
                maxWidth={140}
                flex={2}
                sortable={false}
                resizable={false}
              ></AgGridColumn>
              <AgGridColumn
                field="IsTestFirm"
                headerName="icon"
                minWidth={140}
                maxWidth={130}
                flex={2}
                sortable={false}
                resizable={false}
              ></AgGridColumn>
            </AgGridReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
