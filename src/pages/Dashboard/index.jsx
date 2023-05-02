import { Box, Button, Divider, Drawer } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import PeopleIcon from "@mui/icons-material/People";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CreateIcon from "@mui/icons-material/Create";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutIcon from "@mui/icons-material/Logout";

const Dashboard = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "right" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            Icon:  <PeopleIcon />,
            label: "Liste Clients",
            path:  "/listeclients",
          },
          {
            Icon: <LocationCityIcon />,
            label: "Liste Sociétés",
            path: "/listesocietes",
          },
          {
            Icon: <CreateIcon />,
            label: "Liste Avis",
            path: "/listeavis",
          },
          {
            Icon: <QuizIcon />,
            label: 'Demandes d"aide',
            path: "/DemandeAides",
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
              <LogoutIcon />,
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["dashboard"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuSharpIcon />
            {anchor}
          </Button>
          <Drawer
            anchor="left"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
export default Dashboard;
