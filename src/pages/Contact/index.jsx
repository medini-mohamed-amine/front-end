import React, { useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { companyinformations } from "../../Redux/CompanySlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Contact = () => {
  const schema = yup
    .object({
      EmailCompany: yup.string().required(),
      EmailClient: yup.string().email().required(),
      Nom: yup.string().required(),
      Prenom: yup.string().required(),
      message: yup.string().required(),
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
    padding: "30px 20px",
    width: "50%",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "blue" };
  const btnStyle = { margin: "8px 0" };

  const [EmailCompany, setEmailCompany] = React.useState("");

  const handleChange = (event) => {
    setEmailCompany(event.target.value);
  };

  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(companyinformations());
  }, []);

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid Align="center">
          <Avatar style={avatarStyle}>
            <EmailIcon />
          </Avatar>
          <h2>Contacter une société</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Choissisez L'email de société à contacter
              </InputLabel>
              <Select
                value={EmailCompany}
                {...register("EmailCompany")}
                label="Adresse Email de Société à contacter"
                onChange={handleChange}
                error={errors.EmailCompany}
                helperText={errors.EmailCompany && errors.EmailCompany.message}
              >
                {data.Company.company &&
                  data.Company.company.map((list, index) => (
                    <MenuItem value={list.email}>{list.email}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <br />
          <br />
          <div style={{ display: "flex", gap: "15px" }}>
            <TextField
              label="Votre Nom"
              placeholder="Entrez votre nom"
              type="text"
              {...register("Nom")}
              autoComplete="Nom"
              fullWidth
              error={errors.Nom}
              helperText={errors.Nom && errors.Nom.message}
            ></TextField>
            <TextField
              label="Votre Prenom"
              placeholder="Entrez votre prenom"
              type="text"
              {...register("Prenom")}
              autoComplete="Prenom"
              fullWidth
              error={errors.Prenom}
              helperText={errors.Prenom && errors.Prenom.message}
            ></TextField>
          </div>

          <br />
          <br />
          <TextField
            label="Votre adresse Email"
            placeholder="Entrez Votre adresse Email"
            type="email"
            {...register("EmailClient")}
            autoComplete="EmailClient"
            fullWidth
            error={errors.EmailClient}
            helperText={errors.EmailClient && errors.EmailClient.message}
          />
          <br />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Votre Message"
            placeholder="Ecrire votre message ici"
            type="text"
            {...register("message")}
            autoComplete="message"
            fullWidth
            multiline
            rows={4}
            // defaultValue="Votre Message"
            error={errors.message}
            helperText={errors.message && errors.message.message}
          />
          <br />
          <br />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Envoyer
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
export default Contact;
