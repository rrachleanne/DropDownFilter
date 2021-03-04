import React from "react";
import { MyProps } from "./FieldTypes";
import { MyState } from "./FieldTypes";
import { AgGridReact } from "ag-grid-react";
import "../Filters/node_modules/ag-grid-community/dist/styles/ag-grid.css";
import "../Filters/node_modules/ag-grid-community/dist/styles/ag-theme-material.css";
import "./style.css";

export default class Fetch extends React.Component<MyProps, MyState> {
  gridApi: any;
  constructor(props: any) {
    super(props);
    this.state = {
      columnDefs: [
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
      ],
      rowData: null,
    };
  }
  //JSON DATA CODE
  componentDidMount() {
    fetch("./data.json")
      .then((res) => res.json())
      .then((rowData) => this.setState({ rowData }))
      .catch((err) => console.log(err));
  }
  //SEARCH FILTER CODE
  onGridReady = (params: any) => {
    this.gridApi = params.api;
  };

  handleQuickFilter = (e: any) => {
    this.gridApi.setQuickFilter(e.target.value);
  };

  //Binding column, data and row definitions from our state to our component
  render() {
    return (
      <div>
        <div className="filter-bar">
          <input
            type="search"
            onChange={this.handleQuickFilter}
            id="filter-text-box"
            placeholder="Search"
          ></input>
        </div>
        <div className="ag-theme-material" style={{ height: "1400px" }}>
          <AgGridReact
            onGridReady={this.onGridReady}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}
