import React, { useEffect } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ShowListeAvis } from "../../../Redux/ListeAvisSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Listeavis = () => {
  const data = useSelector((state) => state.ListeAvis.avis);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowListeAvis());
  }, []);
  console.log(data);
  return (
    <div>
      <h2
        style={{ fontSize: "60px", fontFamily: "cursive", textAlign: "left" }}
      >
        La liste des avis des clients
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID Client</TableCell>
              <TableCell align="right">ID Société</TableCell>
              <TableCell align="right">L'Avis du Client</TableCell>
              <TableCell align="right">ID Avis</TableCell>
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
  );
};

export default Listeavis;
