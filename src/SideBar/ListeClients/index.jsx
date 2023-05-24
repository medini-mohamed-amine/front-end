import React, { useEffect } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
// import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableCell from "@mui/material/TableCell";

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ShowListeClients } from "../../Redux/ListeClientsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Listeclients = () => {
  const drawerWidth = 240;

  // const StyledTableContainer = {
  //   width: "800px",
  // };

  // const StyledTableContainer = {
  //   width: "1110px",
  //   height: "auto",
  // };

  const data = useSelector((state) => state.ListeClients.listeclient);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ShowListeClients());
  }, []);
  console.log(data);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              La Liste des Clients
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <br />
      <br />
      <input
        type="text"
        id="myInput"
        onkeyup="myFunction()"
        placeholder="Search for names.."
        title="Type in a name"
      ></input>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="myTable">
          <TableHead style={{ backgroundColor: "lightgray" }}>
            <TableRow>
              <TableCell>ID Client</TableCell>
              <TableCell align="right">Nom Client</TableCell>
              <TableCell align="right">Prenom Client</TableCell>
              <TableCell align="right">Email Client</TableCell>
              <TableCell align="right">supprimer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data?.map((row) => (
                <TableRow
                  key={row.idutilisateur}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.idutilisateur}
                  </TableCell>
                  <TableCell align="right">{row.nom}</TableCell>
                  <TableCell align="right">{row.prenom}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Listeclients;

// {data &&
//   data.map((data, index) => (
//     <tr >
//       <td >{data.idutilisateur}</td>
//       <td >{data.nom}</td>
//       <td >{data.prenom}</td>
//       <td >{data.email}</td>
//       <td >
//         <DeleteIcon />
//       </td>
//     </tr>
//   ))}
