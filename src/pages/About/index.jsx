import React from "react";
import logo333 from "../../images/logo333.png";

const About = () => {
  const logostyle = {
    width: 500,
    heigth: "100vh",
  };
  return (
    <div>
      <h1>A Propos</h1>
      <p>
        WEREACT est une AGENCE CREATIVE fondée en 2015, dotée d’une combinaison
        distinguée alliant l’expertise en matière de développement des solutions
        technologiques, l’engouement pour le design graphique et l’esprit de la
        communication Marketing innovante. ajouetr une image de societe et des
        autres informations (adresse num tel )
      </p>
      <img src={logo333} alt="404 pictur" style={logostyle} />
    </div>
  );
};

export default About;
