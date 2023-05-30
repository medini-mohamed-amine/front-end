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

import { ShowListeAvis } from "../../Redux/ListeAvisSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Listeavis = () => {
  const StyledTableContainer = {
    width: "100%",
    height: "auto",
  };
  const data = useSelector((state) => state.ListeAvis.avis);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowListeAvis());
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
              Avis Clients
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ padding: "0px 20px" }}>
        <h3>La Liste des avis des clients</h3>
        <InputLabel>
          <Input
            startAdornment={<SearchOutlinedIcon />}
            placeholder="Rechercher par nom"
            id="MyInput"
          />
        </InputLabel>
        <TableContainer style={StyledTableContainer} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: "20px" }}>ID Client</TableCell>
                <TableCell align="right" style={{ fontSize: "20px" }}>
                  ID Société
                </TableCell>
                <TableCell align="right" style={{ fontSize: "20px" }}>
                  L'Avis du Client
                </TableCell>
                <TableCell align="right" style={{ fontSize: "20px" }}>
                  ID Avis
                </TableCell>
                <TableCell align="right" style={{ fontSize: "20px" }}>
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
                    <TableCell component="th" scope="row">
                      {row.idutilisateur}
                    </TableCell>
                    <TableCell align="right">{row.idsociete}</TableCell>
                    <TableCell align="right">{row.clientavis}</TableCell>
                    <TableCell align="right">{row.idavis}</TableCell>
                    <TableCell align="right">
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

export default Listeavis;
