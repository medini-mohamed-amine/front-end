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

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { red } from "@mui/material/colors";
import { green } from "@mui/material/colors";

import { ShowListeDemandeAide } from "../../Redux/ListeDemandeAidesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DemandeAides = () => {
  const StyledTableContainer = {
    width: "100%",
    height: "auto",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                <TableCell style={{ fontSize: "20px" }}>Nom</TableCell>
                <TableCell align="right" style={{ fontSize: "20px" }}>
                  Prenom
                </TableCell>
                <TableCell align="right" style={{ fontSize: "20px" }}>
                  Contenu
                </TableCell>
                <TableCell align="right" style={{ fontSize: "20px" }}>
                  Status
                </TableCell>
                <TableCell align="right" style={{ fontSize: "20px" }}>
                  Actions
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
                    <TableCell align="right">{row.idquestion}</TableCell>
                    <TableCell align="right">{row.contenu}</TableCell>
                    <TableCell align="right">
                      <DangerousIcon
                        style={{ fontSize: "40px" }}
                        sx={{ color: red[500] }}
                      />
                      <DoneOutlineIcon
                        style={{ fontSize: "40px" }}
                        sx={{ color: green[300] }}
                      />
                    </TableCell>

                    <TableCell align="right" style={{ display: "flex" }}>
                      <div>
                        <div onClick={handleOpen}>
                          <MarkEmailReadIcon style={{ fontSize: "40px" }} />
                        </div>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Répondre au Question:
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              Question : {row.contenu}
                            </Typography>
                            <TextField
                              placeholder="Ecrire la réponse Ici"
                              style={{ width: "100%" }}
                            ></TextField>

                            <Button variant="contained">annuler</Button>
                            <Button
                              style={{ margin: "20px" }}
                              variant="contained"
                            >
                              OK
                            </Button>
                          </Box>
                        </Modal>
                      </div>
                      <DeleteIcon style={{ fontSize: "40px" }} />
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
