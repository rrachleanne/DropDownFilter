//Imports a LOCAL JSON FILE ONLY

// import { useQuery } from "react-query";
// import LinearProgress from "@material-ui/core/LinearProgress";
import { FieldType } from "./FieldTypes";
// import { getFirms } from "./Fetch";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
;

const useStyles = makeStyles({
  table: {
    maxWidth: 900,
  },
});

export default function FirmList() {
  const classes = useStyles();
  let getFirms = require("./data.json");
  let myBool: string = getFirms.IsTestFirm ? "true" : "false";
  console.log(myBool[0]);
  console.log(getFirms);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Users</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Environment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getFirms?.map((getFirms: FieldType, myBool: string) => (
              <TableRow key={getFirms.FirmId}>
                <TableCell align="left">{getFirms.FirmName}</TableCell>
                <TableCell align="left">{getFirms.State}</TableCell>
                <TableCell align="left">2</TableCell>
                <TableCell align="left">{getFirms.StatusDescription}</TableCell>
                <TableCell align="left">{myBool}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}