import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DisplayData = ({ data }) => {
  const objKeys = Object.keys(data[0]);
  return (
    <TableContainer sx={{ mb: "30px" }} component={Paper}>
      <Table sx={{ minWidth: "100%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {objKeys.map((head) => (
              <TableCell sx={{ fontWeight: "bold" }} key={head} align="center">
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              {objKeys.map((value) => (
                <TableCell key={value} align="center">
                  {row[value]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayData;
