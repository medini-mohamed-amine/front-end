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


// import { signupsociete } from "../../Redux/authslice";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

const Signupsociete = () => {



  // const data = useSelector((state) => state.societe);
  // const dispatch = useDispatch();
  // const handlesignupsociete = (signupS) => {
  //   dispatch(signupsociete(signupS));
  // };

  const schema = yup
    .object({
      nomsociete: yup.string().required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .required()
        .min(6, "mot de passe doit etre plus que 6 caracteres"),
      confirmpassword: yup.string().oneOf([yup.ref("password")]).required(),
      checkbox1: yup
        .boolean()
        .oneOf([true], <p style={{color:"red"}}>Checkbox selection is required !</p>)
        .required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit = (data) => handlesignupsociete(data);
  // console.log(errors, "errors");

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
          <h2 style={headerStyle}> S'inscrire Société </h2>
          <Typography variant="caption">
            merci de remplir ce formulaire pour ajouter votre société au site !{" "}
          </Typography>
          <br />
          <br />
        </Grid>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "15px" }}>
            <TextField
              id="nomsociete"
              fullWidth
              label="Nom Société"
              type="text"
              {...register("nomsociete")}
              placeholder="Entrez le nom de société"
              // autoComplete="on"

              autoComplete="nomsociete"
              error={errors.nomsociete}
              helperText={errors.nomsociete && errors.nomsociete.message}
            ></TextField>
          </div>
          <br />
          <br />
          <TextField
            id="email"
            fullWidth
            label="Email"
            type="email"
            {...register("email")}
            placeholder="Entrez votre Email"
            autoComplete="Email"
            error={errors.email}
            helperText={errors.email && errors.email.message}
          ></TextField>
          <br />
          <br />
          <TextField
            id="password"
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
            helperText={errors.confirmpassword && errors.confirmpassword.message}
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
          <Link  to="https://lecahier.com/termes-et-conditions/" target="_blank">J'accepte les termes et les conditions</Link> 
          {' '}
          {errors.checkbox1 && <span>{errors.checkbox1.message}</span>}

          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
          <Typography>
          Vous avez déjà un compte ? <Link to="/signin">Sign In</Link>
          </Typography>
        </form>
        {/* <p style={{ color: "red", fontSize: "26px" }}>{data.error}</p> */}
      </Paper>
    </Grid>
  );
};
export default Signupsociete;
