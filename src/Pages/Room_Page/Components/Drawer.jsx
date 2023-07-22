import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Box from "@mui/material/Box";
import HotelIcon from "@mui/icons-material/Hotel";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState, Fragment } from "react";
import { Button } from "@mui/material";
import "../Stylesheets/Drawer.css";
import { drawerButtonStyle } from "../Content";

export default function TemporaryDrawer() {
  const anchor = "right";
  const drawerItems = [
    { name: "Find & Reserve", route: "/findreserve", icon: EventAvailableIcon },
    { name: "Rewards", route: "/rewards", icon: EmojiEventsIcon },
    { name: "Hotels", route: "/hotels", icon: HotelIcon },
    { name: "Contact", route: "/contact", icon: AlternateEmailIcon },
  ];
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const drawerList = () => (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "#000",
        color: "#fff",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {drawerItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton key={item.name}>
              <ListItemIcon sx={{color:'#fff'}}>
                <item.icon/>
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
      </List>
      <div className="drawer-bottom">
        <Button variant="contained" sx={drawerButtonStyle}>
          Sign In
        </Button>
      </div>
    </Box>
  );

  return (
    <>
      <Fragment key={anchor}>
        <div className="hamburger">
          <IconButton
            className="icon-button"
            aria-label="hamburger"
            size="small"
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer
          className="drawer"
          anchor={anchor}
          open={state}
          onClose={toggleDrawer(false)}
        >
          {drawerList()}
        </Drawer>
      </Fragment>
    </>
  );
}
