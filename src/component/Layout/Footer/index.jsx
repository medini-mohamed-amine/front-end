import { Container, Grid, Typography } from "@mui/material";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container style={{ minWidth: "100%", backgroundColor: "lightblue" }}>
        <Grid container spcing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "15px" }}>
              Produits
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              {" "}
              Site Web
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              {" "}
              Application Mobile
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              {" "}
              Logo Design
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              {" "}
              Brand Design
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              {" "}
              Graphic Design
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "15px" }}>
              Réalisations
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              {" "}
              +4600 Layout design
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              {" "}
              +9000 Components design
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              {" "}
              +20K Code line
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "15px" }}>
              A Propos
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              {" "}
              <p style={{ fontFamily: "sans-serif", fontSize: "medium" }}>
                WEREACT crée des marques, assure la notoriété, conçoit des
                expériences digitales et développe des produits personnalisés
                pour propulser les marques.
              </p>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "15px" }}>
              Média
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              {" "}
              <Link
                to="https://www.facebook.com/profile.php?id=100057304665890"
                target="_blank"
              >
                Facebook
                <FacebookIcon />
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ margin: "15px" }}>
              {" "}
              <Link to="https://www.instagram.com/wereactsa/" target="_blank">
                Instagram
                <InstagramIcon />
              </Link>
            </Typography>

            <Typography variant="h6" sx={{ margin: "15px" }}>
              {" "}
              <Link
                to="https://www.linkedin.com/company/wereact/"
                target="_blank"
              >
                Linkedin
                <LinkedInIcon />
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <div className="text-center">
          <li id="li1" style={{ display: "inline" }}>
            WEREACT@2023 tous droits réservés
          </li>
          <li id="li2" style={{ display: "inline" }}>
            <Link to="https://wereact.co/mention" target="_blank">
              termes et conditions
            </Link>
          </li>
          <li id="li" style={{ display: "inline" }}>
            <Link
              to="https://www.facebook.com/profile.php?id=100057304665890"
              target="_blank"
            >
              <FacebookIcon />
            </Link>
            <Link to="https://www.instagram.com/wereactsa/" target="_blank">
              <InstagramIcon />
            </Link>
            <Link
              to="https://www.linkedin.com/company/wereact/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </li>
        </div>
      </Container>
    </>
  );
};

export default Footer;
