import React, { useState } from "react";

// import style1 from "./style.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Rating from "@mui/material/Rating";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import DangerousIcon from "@mui/icons-material/Dangerous";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { red } from "@mui/material/colors";
import { green } from "@mui/material/colors";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ResultatComparison } from "../../Redux/HomeSlice";

const Home = () => {
  const dataHome = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ResultatComparison());
  }, []);

  console.log("=================", dataHome.TwoCompanies.Home);

  const [compar, setCompar] = useState({
    compar1: "",
    compar2: "",
  });

  ChartJS.register(ArcElement, Tooltip, Legend);

  const choice1 =
    dataHome.TwoCompanies.Home &&
    dataHome.TwoCompanies.Home.find(
      (element) => element.idsociete === compar.compar1
    );
  const choice2 =
    dataHome.TwoCompanies.Home &&
    dataHome.TwoCompanies.Home.find(
      (element) => element.idsociete === compar.compar2
    );

  function countWords(gov) {
    return gov?.split(",").length;
  }

  const value_choice1 = countWords(choice1?.gouvernorat || "");
  const value_choice2 = countWords(choice2?.gouvernorat || "");

  function words(str) {
    return str?.split(",");
  }

  const TypeColis = {
    FIX: "Livraison 24h + pick up drop off le client met ses colis dans l un de nos dépôts le plus proche + Poids volumétrique",
    ONP: "Livraison 24 heure + Pick up from Shipper + Poids volumétrique moins de 25 kg",
    BLK: "Livraison peut atteindre 7 jours + Pick up from shipper + Poids volumétrique supérieur à 25 Kg",
    OND: "ond est un type de livraison",
    SSD: "ssd est un type de livraison",
  };

  return (
    <div>
      <div
        style={{
          paddingTop: "60px",
          paddingBottom: "300px",
          backgroundColor: "white",
        }}
      >
        <div class="container">
          <h1 class="display-4">Comparer 2 sociétés</h1>
          <p class="lead">
            Séléctionnez les noms de 2 sociétés à comparer ci-dessous
          </p>
          <form>
            <div class="form-row">
              <div class="col">
                <Autocomplete
                  id="societe-select1"
                  onChange={(e, v) =>
                    setCompar({ ...compar, compar1: v.idsociete })
                  }
                  sx={{ width: 480 }}
                  options={dataHome.TwoCompanies.Home}
                  autoHighlight
                  getOptionLabel={(option) => option.nomsociete}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img
                        loading="lazy"
                        height="50"
                        width="90"
                        src={option.logo}
                        alt="logo Société"
                      />
                      {option.nomsociete}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      className="option"
                      {...params}
                      label="Choisir une Société"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </div>
              <div class="col">
                <Autocomplete
                  id="societe-select2"
                  sx={{ width: 480 }}
                  options={
                    dataHome.TwoCompanies.Home &&
                    dataHome.TwoCompanies.Home.filter(
                      (item) => item.idsociete !== compar.compar1
                    )
                  }
                  autoHighlight
                  onChange={(e, v) =>
                    setCompar({ ...compar, compar2: v.idsociete })
                  }
                  getOptionLabel={(option) => option.nomsociete}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img
                        loading="lazy"
                        height="50"
                        width="90"
                        src={option.logo}
                        alt="Logo Société"
                      />
                      {option.nomsociete}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choisir une Société"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </div>
              <div>
                <button type="submit" class="btn btn-primary mb-2">
                  Comparer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <section class="container mb-5">
        <h2>Résultats de comparaison</h2>
        <hr />

        <Grid container spacing={6}>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            xs={4}
          >
            <Rating name="size-large" defaultValue={0} size="large" />
            <br />
            {choice1?.nomsociete}
            <br />
            <img
              src={choice1?.logo}
              alt="Logo de la société"
              style={{ height: "40%", width: "50%", justifyContent: "center" }}
            ></img>
            <p>
              <b>34</b>Clients PARTICIPANTS
            </p>
            <p>
              <b>403</b>TOTAL NOTATIONS
            </p>
          </Grid>
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <h1>VS</h1>
          </Grid>
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <Rating name="size-large" defaultValue={0} size="large" />
            <br />
            {choice2?.nomsociete}
            <br />
            <img
              src={choice2?.logo}
              alt="Logo de la société"
              style={{ height: "40%", width: "50%" }}
            ></img>
            <p>
              <b>34</b>Clients PARTICIPANTS
            </p>
            <p>
              <b>403</b>TOTAL NOTATIONS
            </p>
          </Grid>
        </Grid>
        <br />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{ display: "flex" }}>
              <h1 style={{ fontFamily: "cursive", fontWeight: "300" }}>
                {choice1?.nomsociete}
              </h1>{" "}
              <b style={{ fontSize: "40px", Bolt: "50px" }}> _VS_</b>{" "}
              <h1 style={{ fontFamily: "cursive", fontWeight: "300" }}>
                {choice2?.nomsociete}
              </h1>
            </div>
          </Grid>
          <Grid item xs={12}>
            <p>
              Comparez les deux sociétés de livraison de colis en tunisie qui
              sont <b>{choice1?.nomsociete}</b> et <b>{choice2?.nomsociete}</b>{" "}
              par le temps de livraison , le prix de livraison , le poids de
              colis ,les gouvernorats de livraison , le classement de la société
              et d'autres notes. Les résultats ont été générés par les clients
              qui sont inscrits dans le site
            </p>
          </Grid>
          <hr />
          <Grid item xs={6}>
            <h4>{choice1?.nomsociete}</h4>
            <img
              src={choice1?.logo}
              alt="Logo de la société"
              style={{ height: "70%", width: "20%" }}
            ></img>
            <p style={{ margin: "-68px 0 0 130px" }}>{choice1?.description}</p>
          </Grid>

          <Grid item xs={6}>
            <h4>{choice2?.nomsociete} </h4>
            <img
              src={choice2?.logo}
              alt="Logo de la société"
              style={{ height: "70%", width: "20%" }}
            ></img>
            <p style={{ margin: "-68px 0 0 130px" }}>{choice2?.description}</p>
          </Grid>
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "90px",
            }}
            item
            xs={4}
          >
            <div style={{ display: "inline-flex" }}>
              <b style={{ marginTop: "5px" }}>{choice1?.prix} DT / KG</b>
            </div>
          </Grid>

          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "90px",
            }}
            item
            xs={4}
          >
            <h5> Prix de livraison</h5>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "90px",
            }}
            xs={4}
          >
            <div style={{ display: "inline-flex" }}>
              <b style={{ marginTop: "5px" }}>{choice2?.prix} DT / KG</b>
            </div>
          </Grid>
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <b>
              <p style={{ marginTop: "5px" }}>{choice1?.tempsmin} H</p>
            </b>
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <h5> Temps Min de livraison</h5>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            xs={4}
          >
            {" "}
            <b>
              <p style={{ marginTop: "5px" }}>{choice2?.tempsmin} H</p>
            </b>
          </Grid>
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <b>
              <p style={{ marginTop: "5px" }}>{choice1?.tempsmax} H</p>
            </b>
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <h5> Temps Max de livraison</h5>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            xs={4}
          >
            {" "}
            <b>
              <p style={{ marginTop: "5px" }}>{choice2?.tempsmax} H</p>
            </b>
          </Grid>

          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <b>
              <p style={{ marginTop: "5px" }}>{choice1?.poidsmin} KG</p>
            </b>
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <h5> Poids Min de livraison</h5>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            xs={4}
          >
            {" "}
            <b>
              <p style={{ marginTop: "5px" }}>{choice2?.poidsmin} KG</p>
            </b>
          </Grid>

          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <b>
              <p style={{ marginTop: "5px" }}>{choice1?.poidsmax} KG</p>
            </b>
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <h5> Poids Max de livraison</h5>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            xs={4}
          >
            {" "}
            <b>
              <p style={{ marginTop: "5px" }}>{choice2?.poidsmax} KG</p>
            </b>
          </Grid>

          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <b>
              <p style={{ marginTop: "5px" }}>
                {choice1?.volumemin} m<sup>3</sup>
              </p>
            </b>
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <h5> Volume Min de livraison</h5>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            xs={4}
          >
            {" "}
            <b>
              <p style={{ marginTop: "5px" }}>
                {choice2?.volumemin} m<sup>3</sup>
              </p>
            </b>
          </Grid>

          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <b>
              <p style={{ marginTop: "5px" }}>
                {choice1?.volumemax} m<sup>3</sup>
              </p>
            </b>
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <h5> Volume Max de livraison</h5>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            xs={4}
          >
            {" "}
            <b>
              <p style={{ marginTop: "5px" }}>
                {choice2?.volumemax} m<sup>3</sup>
              </p>
            </b>
          </Grid>

          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
                background: "#FFF",
                gap: "15px",
              }}
            >
              {choice1?.typecolis &&
                words(choice1?.typecolis).map((definition) => (
                  <abbr title={TypeColis[definition.trim()]}>{definition}</abbr>
                ))}
            </p>
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <h5> Type de Colis</h5>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            xs={4}
          >
            {" "}
            <b>
              <p style={{ marginTop: "5px" }}>{choice2?.typecolis}</p>
            </b>
          </Grid>

          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <b style={{ marginTop: "5px" }}>
              {choice1?.fragile === true ? (
                <DoneOutlineIcon
                  style={{ fontSize: "40px" }}
                  sx={{ color: green[300] }}
                />
              ) : (
                <DangerousIcon
                  style={{ fontSize: "40px" }}
                  sx={{ color: red[500] }}
                />
              )}
            </b>
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <h5> Colis Fragile</h5>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            xs={4}
          >
            <b style={{ marginTop: "5px" }}>
              {choice2?.fragile === true ? (
                <DoneOutlineIcon
                  style={{ fontSize: "40px" }}
                  sx={{ color: green[300] }}
                />
              ) : (
                <DangerousIcon
                  style={{ fontSize: "40px" }}
                  sx={{ color: red[500] }}
                />
              )}
            </b>
          </Grid>
          <br />
          <br />
          <br />
          <br />

          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <CircularProgressbar
              value={value_choice1}
              maxValue={24}
              text={`${value_choice1}/24`}
            />
            <b>{choice1?.gouvernorat}</b>
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <h5> Gouvernorats de livraison</h5>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            xs={4}
          >
            <CircularProgressbar
              value={value_choice2}
              maxValue={24}
              text={`${value_choice2}/24`}
            />
            <b>{choice2?.gouvernorat}</b>
          </Grid>
          <hr />

          <Grid container spacing={6}>
            <Grid
              item
              style={{
                dispaly: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                marginTop: "6px",
              }}
              xs={4}
            >
              <Rating name="size-large" defaultValue={0} size="large" />
            </Grid>
            <Grid
              style={{
                dispaly: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                marginTop: "6px",
              }}
              item
              xs={4}
            >
              <h5>Noter la société</h5>
            </Grid>
            <Grid
              style={{
                dispaly: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                marginTop: "6px",
              }}
              item
              xs={4}
            >
              <Rating name="size-large" defaultValue={0} size="large" />
            </Grid>
          </Grid>

          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            xs={4}
          >
            <TextField
              label="Votre Message"
              placeholder="Ecrire votre message ici"
              type="text"
              fullWidth
              multiline
              rows={3}
            />
            <br />
            <br />
            <Button variant="contained" endIcon={<SendIcon />}>
              Envoyer
            </Button>
          </Grid>
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <h5>Donner votre avis</h5>
          </Grid>
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <TextField
              label="Votre Message"
              placeholder="Ecrire votre message ici"
              type="text"
              fullWidth
              multiline
              rows={3}
            />
            <br />
            <br />
            <Button variant="contained" endIcon={<SendIcon />}>
              Envoyer
            </Button>
          </Grid>

          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            xs={4}
          >
            Avis sur la societe 1
          </Grid>
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            <h5>Les avis des clients</h5>
          </Grid>
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              marginTop: "6px",
            }}
            item
            xs={4}
          >
            Avis sur societe 2
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Home;

{
  /* <Rating
                name="size-large"
                value={choice1?.prix / 20}
                precision={0.5}
                size="large"
              /> */
}
