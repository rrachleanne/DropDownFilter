import React from "react";
import { MyProps } from "./DataTypes";
import { MyState } from "./DataTypes";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

import InputLabel from "@material-ui/core/InputLabel";

import Select from "@material-ui/core/Select";

export default class Dropdown extends React.Component<MyProps, MyState> {
  gridApi: any;
  gridColumnApi: any;

  constructor(props: any) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Firm Name",
          field: "firmName",
          sort: "asc",

          width: 1000,
          resizable: false,
          flex: 2,
        },
        {
          headerName: "State",
          field: "state",
          width: 180,
          resizable: false,
          flex: 2,
        },
        {
          headerName: "Users",
          field: "numberOfUsers",
          width: 180,
          resizable: false,
        },
        {
          headerName: "Status",
          field: "statusDescription",
          width: 180,
          resizable: false,
        },
        {
          headerName: "Test Firm",
          field: "isTestFirm",
          width: 180,
          resizable: false,
        },
      ],
      rowData: null,
    };
  }

  onGridReady = (params: any) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  updateData = (data: any) => {
    this.setState({ rowData: data });
  };

  //JSON DATA CODE
  componentDidMount() {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => this.updateData(data))
      // .then((rowData) => this.setState({ rowData }))
      .catch((err) => console.log(err));
  }

  //SEARCH FILTER CODE
  handleQuickFilter = (e: any) => {
    this.gridApi.setQuickFilter(e.target.value);
  };
  //DROPDOWN FILTERS
  externalFilterChanged = (newValue: any) => {
    stateLocation = newValue.target.value;
    this.gridApi.onFilterChanged();
    console.log(newValue);
  };

  isExternalFilterPresent = () => {
    return stateLocation !== "everyone";
  };
  //SWITCH STATEMENT > USERS
  doesExternalFilterPass = (node: any) => {
    switch (stateLocation) {
      case "0":
        return node.data.state  === "everyone";
      case "1":
        return node.data.state === "NSW";
      case "2":
        return node.data.state === "VIC";
      case "3":
        return node.data.state === "QLD";
      default:
        return true;
    }
  };

  render() {
    return (
      <div>
        <InputLabel id="demo-simple-select-label">State:</InputLabel>
        <Select
          name="stateLocation"
          id="demo-simple-select-label"
          onChange={this.externalFilterChanged}
          placeholder="State"
        >
          <option value="0" id="0">
            All
          </option>
          <option value="1" id="1">
            NSW
          </option>
          <option value="2" id="2">
            VIC
          </option>
          <option value="3" id="3">
            QLD
          </option>
        </Select>

        <div className="ag-theme-material" style={{ height: "1400px" }}>
          <AgGridReact
            animateRows={true}
            isExternalFilterPresent={this.isExternalFilterPresent}
            doesExternalFilterPass={this.doesExternalFilterPass}
            onGridReady={this.onGridReady}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}
var stateLocation = "everyone";
console.log(stateLocation);
