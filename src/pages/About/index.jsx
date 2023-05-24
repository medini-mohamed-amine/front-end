import React from "react";
import logo333 from "../../images/logo333.png";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const About = () => {
  const logostyle = {
    width: 500,
    heigth: "100vh",
  };
  return (
    <div style={{ margin: "50px" }}>
      <h1>A Propos</h1>
      <Grid container spacing={2} alignContent="center" justifyContent="center">
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
          <p>
            WEREACT est une AGENCE CREATIVE fondée en 2015, dotée d’une
            combinaison distinguée alliant l’expertise en matière de
            développement des solutions technologiques, l’engouement pour le
            design graphique et l’esprit de la communication Marketing
            innovante.
          </p>
          <p>
            Address: 7th Kairouan street, - Bélvédére 1006 - Tunis, Tunisia{" "}
            <br />
            Phone: 00216 55 133 300 / 00216 25 025 744 <br />
            E-mail : contact@wereact.co <br />
            Website :
            <Link to="https://wereact.co/" target="_blank">
              https://wereact.co/
            </Link>
          </p>
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
          <img src={logo333} alt="404 pictur" style={logostyle} />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
