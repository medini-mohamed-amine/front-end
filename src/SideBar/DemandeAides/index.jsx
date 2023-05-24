import React, { useEffect } from "react";

import DangerousIcon from "@mui/icons-material/Dangerous";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
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

import { ShowListeDemandeAide } from "../../Redux/ListeDemandeAidesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const DemandeAides = () => {
  const StyledTableContainer = {
    width: "100%",
    height: "auto",
  };
  const data = useSelector((state) => state.ListeDemandeAide.DemandeAide);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowListeDemandeAide());
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
              Demandes d'aides
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ padding: "0px 20px" }}>
        <h3>La Liste des demandes d'aides</h3>

        <TableContainer style={StyledTableContainer} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell align="right">Prenom</TableCell>
                <TableCell align="right">Contenu</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Actions</TableCell>
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
                    <TableCell align="right">{row.idquestion}</TableCell>
                    <TableCell align="right">{row.contenu}</TableCell>
                    <TableCell align="right">
                      <DangerousIcon />
                      <DoneOutlineIcon />
                    </TableCell>
                    <TableCell align="right">
                      <MarkEmailReadIcon />
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

export default DemandeAides;
