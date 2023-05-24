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
