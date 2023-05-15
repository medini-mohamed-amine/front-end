import React, { useEffect } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ShowListeDemandeAide } from "../../../Redux/ListeDemandeAidesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const DemandeAides = () => {
  const data = useSelector((state) => state.ListeDemandeAide.DemandeAide);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowListeDemandeAide());
  }, []);
  console.log(data);
  return (
    <div>
      <h2
        style={{ fontSize: "60px", fontFamily: "cursive", textAlign: "left" }}
      >
        La liste des Sociétés
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID Client</TableCell>
              <TableCell align="right">ID Question</TableCell>
              <TableCell align="right">Contenu</TableCell>
              <TableCell align="right">Répondre</TableCell>
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
                    {row.idutilisateur}
                  </TableCell>
                  <TableCell align="right">{row.idquestion}</TableCell>
                  <TableCell align="right">{row.contenu}</TableCell>
                  <TableCell align="right">
                    <TextField placeholder="Répondre au question"></TextField>
                    <br />
                    <Button variant="contained" endIcon={<SendIcon />}>
                      Envoyer
                    </Button>
                  </TableCell>
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

export default DemandeAides;
