import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { loginUser } from "../../Redux/LoginSlice";

const Signin = () => {
  const data = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const handlesignin = (login) => {
    dispatch(loginUser(login));
  };

  const onSubmit = (data) => handlesignin(data);

  const schema = yup
    .object({
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
 

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "blue" };
  const btnStyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid Align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Se Connecter</h2>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Adresse  Email"
            placeholder="Entrez votre adresse email"
            type={"email"}
            {...register("email")}
            autoComplete="email"
            fullWidth
            error={errors.email}
            helperText={errors.email && errors.email.message}
          />
          <br />
          <br />
          <TextField
            label="Mot de passe"
            placeholder="Entrez votre mot de passe"
            type="password"
            {...register("password")}
            autoComplete="new-password"
            fullWidth
            error={errors.password}
            helperText={errors.password && errors.password.message}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Se Connecter
          </Button>
        </form>
        <p style={{ color: "red", fontSize: "26px" }}>{data.error}</p>
        <Typography>
          vous n'avez pas un compte ?<br />
          <Link to="/signupclient">S'inscrire Client</Link>
        </Typography>
        <Typography>
          <Link to="/signupsociete">S'inscrire Société</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Signin;
