import React, { useState } from "react";

// import style1 from "./style.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Rating from "@mui/material/Rating";

const Home = () => {
  const societes = [
    {
      label: "Aramex",
      logo: "https://logowik.com/content/uploads/images/aramex9681.jpg",
    },
    {
      label: "Tunisia Express",
      logo: "https://tunisia-express.tn/wp-content/uploads/2015/06/gr_texpress.jpg",
    },
    {
      label: "DHL Express",
      logo: "https://www.nicepng.com/png/detail/51-514871_dhl-express-logo-black-and-white-international-express.png",
    },
    {
      label: "Fedex",
      logo: "https://www.fouta-napoleone.com/wp-content/uploads/2014/09/fedex-tunisia.jpg",
    },
    {
      label: "UPS tunisie",
      logo: "https://www.tustex.com/sites/default/files//styles/large/public/field/image/ups-620x330.jpg?itok=Wug1iESc",
    },
    {
      label: "First Delivery",
      logo: "https://www.tunisietravail.net/uploads/2021/05/first-delivery-group-200x200.png",
    },
    {
      label: "TNT tunisie",
      logo: "https://www.tnt.com/dam/campaign/iccampaign/tnt-fedex-logo-fr.png",
    },
    {
      label: "Afric Express",
      logo: "https://www.afric-express.tn/wp-content/uploads/2019/02/LOGO-AFRIC-EXPRESS.png",
    },
    {
      label: "Colissimo",
      logo: "https://colissimo.tn/wp-content/uploads/2023/02/colisssssssssssssssssssssssssss-removebg-preview-1.png",
    },
    {
      label: "Allo Coursier",
      logo: "https://www.allocoursier.com/images/alo2.png",
    },
    {
      label: "Ship box",
      logo: "https://cuanto-user-avatars.sfo2.digitaloceanspaces.com/b001f714-41c2-40aa-8405-78d303b53ba7",
    },
  ];

  const [compar, setCompar] = useState({
    compar1: "",
    compar2: "",
  });

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
        ],
        width: ["30%"],
        borderColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
        ],
        borderWidth: 1,
      },
    ],
  };
  ChartJS.register(ArcElement, Tooltip, Legend);

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
            Entrez les noms de 2 sociétés à comparer ci-dessous
          </p>
          <form>
            <div class="form-row">
              <div class="col">
                <Autocomplete
                  id="societe-select1"
                  onChange={(e, v) =>
                    setCompar({ ...compar, compar1: v.label })
                  }
                  sx={{ width: 480 }}
                  options={societes}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
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
                        alt=""
                      />
                      {option.label}
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
                  options={societes.filter(
                    (item) => item.label !== compar.compar1
                  )}
                  autoHighlight
                  onChange={(e, v) =>
                    setCompar({ ...compar, compar2: v.label })
                  }
                  getOptionLabel={(option) => option.label}
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
                        alt=""
                      />
                      {option.label}
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
              <div class="col-auto">
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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            Société 1
          </Grid>
          <Grid item xs={6}>
            Société 2
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 style={{ fontFamily: "sans-serif", fontWeight: "700" }}>
              Société 1 <b>VS </b>Société 2
            </h1>
          </Grid>
          <Grid item xs={12}>
            <p>
              Comparez les deux sociétés de livraison de colis en tunisie qui
              sont <b>Société 1</b> et <b>Société 2</b>
              par le temps de livraison , le prix de livraison , le poids de
              colis ,le classement de la société et d'autres notes. Les
              résultats ont été générés par les clients qui sont inscrits dans
              le site
            </p>
          </Grid>
          <Grid item xs={6}>
            <h4>Société 1</h4>
            <img
              src="https://www.allocoursier.com/images/alo2.png"
              alt="allo coursier"
              style={{ height: "60%", width: "20%" }}
            ></img>
            <p style={{ margin: "4px 0 0 100px" }}>
              Description de la société 1
            </p>
          </Grid>

          <Grid item xs={6}>
            <h4>Société 2</h4>
            <img
              src="https://www.allocoursier.com/images/alo2.png"
              alt="allo coursier"
              style={{ height: "60%", width: "20%" }}
            ></img>
            <p style={{ margin: "4px 0 0 100px" }}>
              Description de la société 2
            </p>
          </Grid>

          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            item
            xs={4}
          >
            nombre
            <Rating name="size-large" defaultValue={2} size="large" />
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            item
            xs={4}
          >
            <b> Prix</b>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            xs={4}
          >
            nombre
            <Rating name="size-large" defaultValue={2} size="large" />
          </Grid>
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            item
            xs={4}
          >
            nombre
            <Rating name="size-large" defaultValue={2} size="large" />
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            item
            xs={4}
          >
            <b> Temps de livraison</b>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            xs={4}
          >
            {" "}
            nombre
            <Rating name="size-large" defaultValue={2} size="large" />
          </Grid>
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            item
            xs={4}
          >
            nombre
            <Rating name="size-large" defaultValue={2} size="large" />
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            item
            xs={4}
          >
            <b> Poids de colis</b>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            xs={4}
          >
            {" "}
            nombre
            <Rating name="size-large" defaultValue={2} size="large" />
          </Grid>
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            item
            xs={4}
          >
            nombre
            <Rating name="size-large" defaultValue={2} size="large" />
          </Grid>

          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            item
            xs={4}
          >
            <b> Destination</b>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            xs={4}
          >
            {" "}
            nombre
            <Rating name="size-large" defaultValue={2} size="large" />
          </Grid>

          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            item
            xs={4}
          >
            <Pie style={{ width: "140px", height: "140px" }} data={data} />
          </Grid>
          <hr />
          <Grid
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            item
            xs={4}
          >
            <b> Prix</b>
          </Grid>
          <Grid
            item
            style={{
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
            xs={4}
          >
            <Pie data={data} />
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Home;
