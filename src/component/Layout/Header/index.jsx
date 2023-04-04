import React from "react";
import { Link } from "react-router-dom";

// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" data-toggle="pill" to="/">
          Comparateur de sociétés de livraison
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
              <Link to="/Signin">se connecter</Link>
            </button>
          </li>
          <li>
            <button
              style={{ float: "right" }}
              type="button"
              class="btn btn-outline-info"
            >
              <Link to="/Signup">S'identifier</Link>
            </button>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane container active" id="acceuil"></div>
          <div class="tab-pane container fade" id="Comparer"></div>
          <div class="tab-pane container fade" id="A propos"></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
