import { Box, Divider } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

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
  const avatarStyle = { backgroundColor: "blue", height: "40px" };

  const list = (anchor) => (
    <Box sx={{ width: 250 }}>
      <div style={{ display: "flex" }}>
        <Avatar style={avatarStyle}>
          <PersonIcon />
        </Avatar>
        Administrateur
      </div>
      <Divider style={{ border: "2px solid black" }} />
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
    <div>
      {["Liste"].map((anchor) => (
        <React.Fragment key={anchor}>{list(anchor)}</React.Fragment>
      ))}
    </div>
  );
};
export default SideBar;
