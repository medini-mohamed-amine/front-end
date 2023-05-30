import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Checkbox from "@mui/material/Checkbox";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { adddatasociete } from "../../Redux/DataSocieteSlice";

const DataSociete = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const handledatasociete = (datasociete) => {
    dispatch(adddatasociete(datasociete));
    console.log(" this is the data ", data);
  };
  const onSubmit = (data) => handledatasociete(data);

  const schema = yup
    .object({
      adresse: yup.string().required(),
      numtel: yup
        .string()
        .matches(/^[0-9]{8}$/, "numéro téléphone invalid")
        .required("telephone est obligatoire"),
      gouvernorat: yup.string().required("gouvernorats est obligatoire"),
      description: yup.string().required("description est obligatoire"),
      logo: yup.string().required("Logo est obligatoire"),
      temps: yup.number().integer().positive().min(1).max(100).required(),
      prix: yup.number().min(1).max(100).required(),
      poidsmin: yup.number().min(1).max(100).required(),
      poidsmax: yup.number().moreThan(yup.ref("poidsmin")).max(100).required(),
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

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid Align="center">
          <Avatar style={avatarStyle}>
            <NoteAddIcon />
          </Avatar>
          <h2>Remplir le données de la société</h2>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Adresse de société"
            placeholder="Entrez l'adresse de la société"
            type="text"
            {...register("adresse")}
            autoComplete="adresse"
            fullWidth
            error={errors.adresse}
            helperText={errors.adresse && errors.adresse.message}
          />
          <br />
          <br />
          <TextField
            label="Numéro de téléphone"
            placeholder="Entrez le numéro de téléphone de société"
            type="text"
            {...register("numtel")}
            autoComplete="numtel"
            fullWidth
            error={errors.numtel}
            helperText={errors.numtel && errors.numtel.message}
          />
          <br />
          <br />
          <TextField
            label="Gouvernorats de livraison"
            placeholder="Entrez Les gouvernorats de livraison"
            type="text"
            {...register("gouvernorat")}
            autoComplete="gouvernorat"
            fullWidth
            error={errors.gouvernorat}
            helperText={errors.gouvernorat && errors.gouvernorat.message}
          />
          <br />
          <br />
          <TextField
            label="Description sur la société"
            placeholder="Ecrire une description générale sur la société"
            type="text"
            {...register("description")}
            autoComplete="description"
            fullWidth
            error={errors.description}
            helperText={errors.description && errors.description.message}
          />
          <br />
          <br />
          <TextField
            label="L'URL du Logo de société"
            placeholder="Entrez l'URL de logo de société"
            type="text"
            {...register("logo")}
            autoComplete="logo"
            fullWidth
            error={errors.logo}
            helperText={errors.logo && errors.logo.message}
          />
          <br />
          <br />
          <div style={{ display: "flex", gap: "15px" }}>
            <TextField
              label="Temps de livraison"
              placeholder="Entrez le temps de livraison (en H)"
              type="text"
              {...register("temps")}
              autoComplete="temps"
              fullWidth
              error={errors.temps}
              helperText={errors.temps && errors.temps.message}
            ></TextField>
            <TextField
              label="Prix de livraison"
              placeholder="Entrez le prix de livraison (en DT)"
              type="text"
              {...register("prix")}
              autoComplete="prix"
              fullWidth
              error={errors.prix}
              helperText={errors.prix && errors.prix.message}
            ></TextField>
            <TextField
              label="Poids Min de livraison"
              placeholder="Entrez le poids min de livraison (en KG)"
              type="text"
              {...register("poidsmin")}
              autoComplete="poidsmin"
              fullWidth
              error={errors.poidsmin}
              helperText={errors.poidsmin && errors.poidsmin.message}
            ></TextField>
            <TextField
              label="Poids Max de livraison"
              placeholder="Entrez le poids max de livraison (en KG)"
              type="text"
              {...register("poidsmax")}
              autoComplete="poidsmax"
              fullWidth
              error={errors.poidsmax}
              helperText={errors.poidsmax && errors.poidsmax.message}
            ></TextField>
            <Checkbox id="fragile" />
            Fragile ?
          </div>
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
export default DataSociete;
