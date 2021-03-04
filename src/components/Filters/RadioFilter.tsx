import React from "react";
import { MyProps } from "./DataTypes";
import { MyState } from "./DataTypes";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";


export default class RadioFilter extends React.Component<MyProps, MyState> {
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

  updateData = (rowData: any) => {
    document.querySelector<HTMLInputElement>("#everyone")!.checked = true;
    this.setState({ rowData: rowData });
  };

  //JSON DATA CODE
  componentDidMount() {
    fetch("./data.json")
      .then((res) => res.json())
      .then((rowData) => this.updateData(rowData))
      // .then((rowData) => this.setState({ rowData }))
      .catch((err) => console.log(err));
  }

  //SEARCH FILTER CODE
  handleQuickFilter = (e: any) => {
    this.gridApi.setQuickFilter(e.target.value);
  };
  //DROPDOWN FILTERS
  externalFilterChanged = (newValue: any) => {
    stateLocation = newValue;
    this.gridApi.onFilterChanged();
    console.log(newValue)
  };

  isExternalFilterPresent = () => {
    return stateLocation !== "everyone";
  };
  //SWITCH STATEMENT > USERS
  doesExternalFilterPass = (node: any) => {
    switch (stateLocation) {
      case "1":
        return node.data.state === 'NSW';
      case "2":
        return node.data.state === 'VIC';
      case "3":
        return node.data.state === 'QLD';
      default:
        return true;
    }
  };

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
          <label>
            <input
              type="radio"
              name="filter"
              id="everyone"
              onChange={() => this.externalFilterChanged("everyone")}
            />
            All States
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              id="1"
              onChange={() => this.externalFilterChanged("1")}
            />
            NSW
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              id="2"
              onChange={() => this.externalFilterChanged("2")}
            />
            VIC
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              id="3"
              onChange={() => this.externalFilterChanged("3")}
            />
            QLD
          </label>
        </div>

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
