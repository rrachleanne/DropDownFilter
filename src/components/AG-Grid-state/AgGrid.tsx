import React from "react";
import Fetch from "./Fetch";
import "../Filters/node_modules/ag-grid-community/dist/styles/ag-grid.css";
import "../Filters/node_modules/ag-grid-community/dist/styles/ag-theme-material.css";

import "./style.css";

const Grid = () => {
  return (
    <div className="wrapper">
      <div className="outer-div">
        <h3>Firms</h3>
        <div className="grid-wrapper">
          <Fetch />
        </div>
      </div>
    </div>
  );
};

export default Grid;
