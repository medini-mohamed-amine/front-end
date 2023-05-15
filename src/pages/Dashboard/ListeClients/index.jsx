import React, { useEffect } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";

import TableCell from "@mui/material/TableCell";
import { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ShowListeClients } from "../../../Redux/ListeClientsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FormatAlignJustify } from "@mui/icons-material";

const Listeclients = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const data = useSelector((state) => state.ListeClients.listeclient);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ShowListeClients());
  }, []);
  console.log(data);

  return (
    <div>
      <h2
        style={{ fontSize: "60px", fontFamily: "cursive", textAlign: "left" }}
      >
        La liste des Clients
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID Client</StyledTableCell>
              <StyledTableCell align="right">Nom Client</StyledTableCell>
              <StyledTableCell align="right">Prenom Client</StyledTableCell>
              <StyledTableCell align="right">Email Client</StyledTableCell>
              <StyledTableCell align="right">supprimer</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data?.map((row) => (
                <StyledTableRow
                  key={row.idutilisateur}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.idutilisateur}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.nom}</StyledTableCell>
                  <StyledTableCell align="right">{row.prenom}</StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    <DeleteIcon />
                  </StyledTableCell>
                </StyledTableRow>
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
