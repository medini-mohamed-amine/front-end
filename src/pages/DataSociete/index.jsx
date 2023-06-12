import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

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
      gouvernorat: yup
        .string()
        .matches(/^[aA-zZ\s]+$/)
        .required("gouvernorats est obligatoire"),
      description: yup.string().required("description est obligatoire"),
      logo: yup.string().url().required("Logo est obligatoire"),
      typecolis: yup.string().required("Type colis est obligatoire"),
      tempsmin: yup.number().min(1).max(100).required(),
      tempsmax: yup.number().moreThan(yup.ref("tempsmin")).max(100).required(),
      prix: yup.number().min(1).max(100).required(),
      poidsmin: yup.number().min(1).max(100).required(),
      poidsmax: yup.number().moreThan(yup.ref("poidsmin")).max(100).required(),
      volumemin: yup.number().min(1).max(100).required(),
      volumemax: yup
        .number()
        .moreThan(yup.ref("volumemin"))
        .max(100)
        .required(),
      fragile: yup.boolean().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   fragile: false,
    // },
    resolver: yupResolver(schema),
  });

  const paperStyle = {
    padding: "30px 20px",
    width: "50%",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "blue" };
  const btnStyle = { margin: "8px 0" };

  console.log(getValues("fragile"), "tset");
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
            fullWidth
            error={errors.description}
            helperText={errors.description && errors.description.message}
          />
          <br />
          <br />
          <TextField
            label="L'URL du Logo de société"
            placeholder="Entrez l'URL de logo de société"
            type="url"
            {...register("logo")}
            fullWidth
            error={errors.logo}
            helperText={errors.logo && errors.logo.message}
          />
          <br />
          <br />
          <TextField
            label="Les types de colis (SSD, FIX, ONP, BLK, OND) "
            placeholder="Entrez les types de colis (SSD, FIX, ONP, BLK, OND)"
            type="text"
            {...register("typecolis")}
            fullWidth
            error={errors.typecolis}
            helperText={errors.typecolis && errors.typecolis.message}
          />
          <br />
          <br />
          <div style={{ display: "flex", gap: "15px" }}>
            <TextField
              label="Temps Min de livraison"
              placeholder="Entrez le temps min de livraison (en H)"
              type="text"
              {...register("tempsmin")}
              fullWidth
              error={errors.tempsmin}
              helperText={errors.tempsmin && errors.tempsmin.message}
            ></TextField>
            <TextField
              label="Temps Max de livraison"
              placeholder="Entrez le temps max de livraison (en H)"
              type="text"
              {...register("tempsmax")}
              fullWidth
              error={errors.tempsmax}
              helperText={errors.tempsmax && errors.tempsmax.message}
            ></TextField>
            <TextField
              label="Prix de livraison"
              placeholder="Entrez le prix de livraison (en DT)"
              type="text"
              {...register("prix")}
              fullWidth
              error={errors.prix}
              helperText={errors.prix && errors.prix.message}
            ></TextField>
          </div>
          <br />
          <br />
          <div style={{ display: "flex", gap: "15px" }}>
            <TextField
              label="Poids Min de livraison"
              placeholder="Entrez le poids min de livraison (en KG)"
              type="text"
              {...register("poidsmin")}
              fullWidth
              error={errors.poidsmin}
              helperText={errors.poidsmin && errors.poidsmin.message}
            ></TextField>
            <TextField
              label="Poids Max de livraison"
              placeholder="Entrez le poids max de livraison (en KG)"
              type="text"
              {...register("poidsmax")}
              fullWidth
              error={errors.poidsmax}
              helperText={errors.poidsmax && errors.poidsmax.message}
            ></TextField>
          </div>
          <br />
          <br />
          <div style={{ display: "flex", gap: "15px" }}>
            <TextField
              label="Volume Min de colis"
              placeholder="Entrez Volume Min de colis (en m3)"
              type="text"
              {...register("volumemin")}
              fullWidth
              error={errors.volumemin}
              helperText={errors.volumemin && errors.volumemin.message}
            ></TextField>
            <TextField
              label="Volume Max de colis"
              placeholder="Entrez le volume max de colis (en m3)"
              type="text"
              {...register("volumemax")}
              fullWidth
              error={errors.volumemax}
              helperText={errors.volumemax && errors.volumemax.message}
            ></TextField>
            <input
              type="checkbox"
              name="fragile"
              {...register("fragile")}
              // checked={getValues("fragile")}
              // onChange={(event) => setValue("fragile", !!getValues("fragile"))}
            />
            fragile?
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
