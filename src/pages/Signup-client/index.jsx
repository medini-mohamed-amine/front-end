import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";

import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addclient } from "../../Redux/SignupClientSlice";

const Signupclient = () => {

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlesignupclient = (signupclient) => {
    dispatch(addclient(signupclient));
    console.log("this is data ", data);
  };

  const onSubmit = (data) => handlesignupclient(data);

  const schema = yup.object({
    nom: yup.string("nom est obligatoire"),
    prenom: yup.string("prenom est obligatoire"),
    email: yup.string().email("email invalid"),
    password: yup
      .string()
      .min(6, "mot de passe doit etre plus que 6 caracteres"),
    confirmpassword: yup.string().oneOf([yup.ref("password")]),
    checkbox1: yup
      .boolean()
      .oneOf([true], <p style={{ color: "red" }}>Checkbox selection is</p>),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

 

  const paperStyle = {
    padding: "30px 20px",
    width: "50%",
    margin: "20px auto",
  };
  const headerStyle = { margin: "0" };
  const avatarStyle = { backgroundColor: "blue" };

  return (
    <Grid>
      <Paper elevation={5} sx={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <PersonAddAltIcon />
          </Avatar>
          <h2 style={headerStyle}> S'inscrire Client </h2>
          <Typography variant="caption">
            merci de remplir ce formulaire pour créer un compte !{" "}
          </Typography>
          <br />
          <br />
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", gap: "15px" }}>
            <TextField
              fullWidth
              label="Nom"
              type="text"
              {...register("nom")}
              placeholder="Entrez votre nom"
              autoComplete="nom"
              error={errors.nom}
              helperText={errors.nom && errors.nom.message}
            ></TextField>

            <TextField
              fullWidth
              label="Prenom"
              type="text"
              {...register("prenom")}
              placeholder="Entrez votre prenom"
              autoComplete="prenom"
              error={errors.prenom}
              helperText={errors.prenom && errors.prenom.message}
            ></TextField>
          </div>
          <br />
          <br />
          <TextField
            fullWidth
            label="Email"
            type="email"
            {...register("email")}
            placeholder="Entrez votre Email"
            autoComplete="email"
            error={errors.email}
            helperText={errors.email && errors.email.message}
          ></TextField>
          <br />
          <br />
          <TextField
            fullWidth
            label="Mot de passe"
            type="password"
            {...register("password")}
            placeholder="Entrez votre mot de passe"
            autoComplete="new-password"
            error={errors.password}
            helperText={errors.password && errors.password.message}
          ></TextField>
          <br />
          <br />
          <TextField
            fullWidth
            label="Confirmez mot de passe"
            type="password"
            {...register("confirmpassword")}
            placeholder="Confirmez votre mot de passe"
            autoComplete="new-password"
            error={errors.confirmpassword}
            helperText={
              errors.confirmpassword && errors.confirmpassword.message
            }
          ></TextField>
          <br />
          <br />
          <Checkbox
            color="primary"
            type="checkbox"
            {...register("checkbox1")}
            error={errors.checkbox1}
            helperText={errors.checkbox1 && errors.checkbox1.message}
          />
          <Link to="https://lecahier.com/termes-et-conditions/" target="_blank">
            J'accepte les termes et les conditions
          </Link>{" "}
          {errors.checkbox1 && <span>{errors.checkbox1.message}</span>}
          <Button type="submit" variant="contained" color="primary">
            S'inscrire
          </Button>
          <Typography>
            Vous avez déjà un compte ? <Link to="/signin">Se Connecter</Link>
          </Typography>
        </form>
        <p style={{ color: "red", fontSize: "26px" }}>{data.error}</p>
      </Paper>
    </Grid>
  );
};
export default Signupclient;
