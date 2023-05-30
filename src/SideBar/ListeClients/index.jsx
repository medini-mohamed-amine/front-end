import React, { useEffect } from "react";

import DeleteIcon from "@mui/icons-material/Delete";

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

import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { ShowListeClients } from "../../Redux/ListeClientsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Listeclients = () => {
  const StyledTableContainer = {
    width: "100%",
    height: "auto",
  };

  const data = useSelector((state) => state.ListeClients.listeclient);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ShowListeClients());
  }, []);
  console.log(data);

  return (
    <div
      style={{
        background: "#f0f2f5",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="block">
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Clients
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ padding: "0px 20px" }}>
        <h3>La Liste des clients</h3>
        <InputLabel>
          <Input
            startAdornment={<SearchOutlinedIcon />}
            placeholder="Rechercher par nom"
            id="MyInput"
          />
        </InputLabel>

        <TableContainer style={StyledTableContainer} component={Paper}>
          <Table aria-label="simple table" id="myTable">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ fontSize: "20px" }}>
                  Nom Client
                </TableCell>
                <TableCell align="left" style={{ fontSize: "20px" }}>
                  Prenom Client
                </TableCell>
                <TableCell align="left" style={{ fontSize: "20px" }}>
                  Email Client
                </TableCell>
                <TableCell align="left" style={{ fontSize: "20px" }}>
                  supprimer
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data?.map((row) => (
                  <TableRow
                    key={row.idutilisateur}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.nom}</TableCell>
                    <TableCell align="left">{row.prenom}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
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
