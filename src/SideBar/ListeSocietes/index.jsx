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

const Listesocietes = () => {
  const drawerWidth = 240;

  const StyledTableContainer = {
    width: "1080px",
    height: "auto",
  };
  const data = useSelector((state) => state.ListesSocietes.listesociete);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowListeSocietes());
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
              La Liste des Sociétés
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <br />
      <br />
      <TableContainer style={StyledTableContainer} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "lightgray" }}>
            <TableRow>
              <TableCell>ID Société</TableCell>
              <TableCell align="right">Nom Société</TableCell>
              <TableCell align="right">Adresse Société</TableCell>
              <TableCell align="right">Numéro téléphone</TableCell>
              <TableCell align="right">Supprimer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data?.map((row) => (
                <TableRow
                  key={row.idsociete}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.idsociete}
                  </TableCell>
                  <TableCell align="right">{row.nomsociete}</TableCell>
                  <TableCell align="right">{row.adresse}</TableCell>
                  <TableCell align="right">{row.numerotel}</TableCell>
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

export default Listesocietes;
