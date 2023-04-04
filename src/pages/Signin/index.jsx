import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Avatar,
  Button,
  Checkbox,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Signin = () => {
  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
      // .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)
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
    padding: 20,
    height: "80vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "green" };
  const btnStyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid Align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email Address"
            placeholder="Enter your Email"
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
            label="Password"
            placeholder="Enter your Password"
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
            {" "}
            Sign In
          </Button>
        </form>
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />

        <Typography>
          <Link href="#">Forgot Password ?</Link>
        </Typography>
        <Typography>
          you don't have an account ?<Link to="/signup">Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Signin;
