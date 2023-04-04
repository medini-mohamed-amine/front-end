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
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";

const Signup = () => {
  const schema = yup
    .object({
      nom: yup.string().required(),
      prenom: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors, "errors");

  const paperStyle = {
    padding: "30px 20px",
    width: "50%",
    margin: "20px auto",
  };
  const headerStyle = { margin: "0" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  return (
    <Grid>
      <Paper elevation={5} sx={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <PersonAddAltIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up </h2>
          <Typography variant="caption">
            please fill this form to create an account !{" "}
          </Typography>
          <br />
          <br />
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", gap: "15px" }}>
            <TextField
              fullWidth
              label="nom"
              type="text"
              {...register("nom")}
              placeholder="Entrez votre nom"
              // autoComplete="on"

              autoComplete="nom"
              error={errors.nom}
              helperText={errors.nom && errors.nom.message}
            ></TextField>

            <TextField
              fullWidth
              label="prenom"
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
            label="email"
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
            label="password"
            type="password"
            {...register("password")}
            placeholder="Entrez votre mot de passe"
            autoComplete="new-password"
            error={errors.password}
            helperText={errors.password && errors.password.message}
          ></TextField>
          <br />
          <br />

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="I accept terms and conditions"
          />
          {/* <Link to="/terms">I accept terms and conditions</Link> */}

          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
          <Typography>
            You have already an account ? <Link to="/signin">Sign In</Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};
export default Signup;
