import * as React from "react";
import { DataGrid, ColDef } from "@material-ui/data-grid";

const columns: ColDef[] = [
  { field: "id", headerName: "ID", width: 70, type: "number" },
  { field: "firm", headerName: "Firm", width: 450, type: "string" },
  { field: "state", headerName: "State", width: 130, type: "string" },
  {
    field: "users",
    headerName: "Users",
    type: "number",
    width: 130,
  },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    width: 130,
  },
  {
    field: "server",
    headerName: "Server",
    type: "string",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    firm: "ABC Law",
    state: "NSW",
    users: 5,
    status: "enabled",
    server: "live",
  },
  {
    id: 2,
    firm: "Test Law",
    state: "VIC",
    users: 3,
    status: "enabled",
    server: "live",
  },
  {
    id: 3,
    firm: "123 Lawyers",
    state: "QLD",
    users: 35,
    status: "disabled",
    server: "test",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
