import React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

const Dashboard = () => {
  return (
    <div
      style={{
        margin: "30px",
        padding: "30px",
        backgroundColor: "lightgray",
        display: "flex",
        flexWrap: "wrap",
        columnGap: "30px",
      }}
    >
      <Card sx={{ width: 250, height: "150px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            nombre des clients
          </Typography>
          <Typography variant="h4" component="div">
            33 clients
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            33 Clients sont inscrits dans le site
          </Typography>
        </CardContent>
      </Card>
      <br />
      <Card sx={{ width: 250, height: "150px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            nombre des societes
          </Typography>
          <Typography variant="h4" component="div">
            25 societes
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            25 Sociétés sont inscrites dans le site
          </Typography>
        </CardContent>
      </Card>
      <br />
      <Card sx={{ width: 250, height: "150px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            nombre des clients inscrits le dernier moins.
          </Typography>
          <Typography variant="h4" component="div">
            13 clients
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            13 Clients sont inscrits dans le site le dernier moins.
          </Typography>
        </CardContent>
      </Card>
      <br />
      <Card sx={{ width: 250, height: "150px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            nombre des societes inscrites le dernier moins.
          </Typography>
          <Typography variant="h4" component="div">
            5 societes
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            5 Sociétés sont inscrites dans le site le dernier moins.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default Dashboard;
