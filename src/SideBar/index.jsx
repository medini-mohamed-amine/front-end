import { Box, Divider } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CreateIcon from "@mui/icons-material/Create";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

const SideBar = () => {
  const [state, setState] = React.useState({
    left: true,
    anchor: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const sidebarstyle = {
    backgroundColor: "lightgray",
  };

  const list = (anchor) => (
    <Box sx={{ width: 250, height: "100vh" }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="block">
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              <PersonIcon style={{ margin: "5px" }} />
              Administrateur
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <List>
        {[
          {
            Icon: <DashboardIcon />,
            label: "Dashboard",
            path: "/admin",
          },
          {
            Icon: <PeopleIcon />,
            label: "Liste Clients",
            path: "/admin/listeclients",
          },
          {
            Icon: <LocationCityIcon />,
            label: "Liste Sociétés",
            path: "/admin/listesocietes",
          },
          {
            Icon: <CreateIcon />,
            label: "Liste Avis",
            path: "/admin/listeavis",
          },
          {
            Icon: <QuizIcon />,
            label: 'Demandes d"aide',
            path: "/admin/DemandeAides",
          },
        ].map(({ Icon, label, path }, index) => (
          <Link to={path}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{Icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider style={{ border: "2px solid black" }} />
      <List>
        {["LogOut"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <LogoutIcon />
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={sidebarstyle}>
      {["Liste"].map((anchor) => (
        <React.Fragment key={anchor}>{list(anchor)}</React.Fragment>
      ))}
    </div>
  );
};
export default SideBar;
