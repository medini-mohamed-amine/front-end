import React, { useEffect } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { ShowListeSocietes } from "../../Redux/ListeSocietesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Listesocietes = () => {
  const drawerWidth = 240;

  const StyledTableContainer = {
    width: "100%",
    height: "auto",
  };
  const data = useSelector((state) => state.ListesSocietes.listesociete);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowListeSocietes());
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
              Sociétés
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ padding: "0px 20px" }}>
        <h3>La Liste des Sociétéss</h3>
        <InputLabel>
          <Input
            startAdornment={<SearchOutlinedIcon />}
            placeholder="Rechercher par nom société"
            id="MyInput"
          />
        </InputLabel>
        <TableContainer style={StyledTableContainer} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ fontSize: "20px" }}>
                  Nom Société
                </TableCell>
                <TableCell align="left" style={{ fontSize: "20px" }}>
                  Email Société
                </TableCell>
                <TableCell align="left" style={{ fontSize: "20px" }}>
                  Numéro téléphone
                </TableCell>
                <TableCell align="left" style={{ fontSize: "20px" }}>
                  Supprimer
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data?.map((row) => (
                  <TableRow
                    key={row.idsociete}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.nomsociete}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.numerotel}</TableCell>
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

export default Listesocietes;
