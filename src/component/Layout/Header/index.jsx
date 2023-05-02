import React from "react";
import { Link } from "react-router-dom";

import Logo2 from "../../../images/logo_website.png";
import style from "./style.module.css";

import { AppBar, Button, Toolbar } from "@mui/material";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
import BusinessIcon from "@mui/icons-material/Business";
import HelpIcon from "@mui/icons-material/Help";

const Header = () => {
  return (
    <React.Fragment>
      <AppBar
        sx={{ background: "lightblue" }}
        style={{ marginTop: "0vh", position: "sticky" }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link class="navbar-brand" data-toggle="pill" to="/">
              <img src={Logo2} alt="website logo" height="90" width="100" />
            </Link>

            <ul
              class="nav nav-pills"
              style={{
                display: "flex",
                gap: "30px",
                listStyleType: "none",
                color: "white",
              }}
            >
              <li class="nav-item" className={style.li1}>
                <Link class="nav-link active" data-toggle="pill" to="/">
                  <HomeIcon />
                  Accueil
                </Link>
              </li>
              <li class="nav-item" className={style.li1}>
                <Link class="nav-link" data-toggle="pill" to="/Societes">
                  <BusinessIcon />
                  Sociétés
                </Link>
              </li>
              <li class="nav-item" className={style.li1}>
                <Link class="nav-link" data-toggle="pill" to="/contact">
                  <LocalPostOfficeIcon />
                  Contact
                </Link>
              </li>
              <li class="nav-item" className={style.li1}>
                <Link class="nav-link" data-toggle="pill" to="/aide">
                  <HelpIcon />
                  Aide
                </Link>
              </li>
              <li class="nav-item" className={style.li1}>
                <Link class="nav-link" data-toggle="pill" to="/about">
                  <InfoIcon />A propos
                </Link>
              </li>
            </ul>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <Button sx={{ marginLeft: "auto" }} variant="contained">
              <Link to="/Signin" style={{ color: "white" }}>
                <PersonIcon />
                Se Connecter
              </Link>
            </Button>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    <AddCircleIcon /> S'inscrire
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>
                      <Link to="/Signupclient">
                        <PersonAddAltSharpIcon />
                        Client
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <Link to="/Signupsociete">
                        <ApartmentOutlinedIcon />
                        Société
                      </Link>
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;

/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" data-toggle="pill" to="/">
          <img src={Logo2}  alt="website logo" height="100" width="150" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link class="nav-link active" data-toggle="pill" to="/">
              acceuil
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" data-toggle="pill" to="/Compare">
              Comparer
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" data-toggle="pill" to="/about">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" data-toggle="pill" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <button
              style={{ float: "right" }}
              type="button"
              class="btn btn-outline-info"
            >
              <Link to="/Signin">Se Connecter</Link>
            </button>
          </li>
          <li>
            <button
              style={{ float: "right" }}
              type="button"
              class="btn btn-outline-info"
            >
            <Link to="/Signup">S'inscrire</Link>
              
              {/* <select name="choix" id="acteur" >choix
                <option value={"choisir votre role"}>s'inscrire</option>
                <option value={"client"}>au tant que client</option>
                <option value={"societe"}>au tant que societe</option>
              </select> 
            </button> 
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane container active" id="acceuil"></div>
          <div class="tab-pane container fade" id="Comparer"></div>
          <div class="tab-pane container fade" id="A propos"></div>
        </div>
      </nav> */
