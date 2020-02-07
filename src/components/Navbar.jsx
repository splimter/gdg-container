import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Routes from "../routes/index";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";

import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navItems: {
    marginLeft: 15,
    marginRight: 15,
    color: "#FFF"
  },
  navLink: {
    color: "#FFF"
  },
  list: {
    width: 250
  },
  fullList: {
    width: 250
  }
}));

function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              display={{ xs: "block", md: "none" }}
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography variant="h6" className={classes.title}>
            GDG Chlef
          </Typography>
          <Box display={{ xs: "none", md: "block", lg: "block" }}>
            {Routes.map((prop, key) => {
              return (
                <Button
                  className={classes.navItems}
                  startIcon={<prop.icon color="white" />}
                >
                  <NavLink
                    className="text-whtie"
                    to={prop.path}
                    style={{ textDecoration: "none" }}
                    key={key}
                  >
                    <Box class="text-white">{prop.sidebarName}</Box>
                  </NavLink>
                </Button>
              );
            })}
          </Box>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          <img src="/logo.png" style={{ width: "100%" }} />
          <Divider />
          <List>
            {Routes.map((prop, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  <prop.icon />
                </ListItemIcon>
                <ListItemText>
                  <NavLink
                    to={prop.path}
                    style={{ textDecoration: "none" }}
                    key={index}
                  >
                    <Box className="text-gray">{prop.sidebarName}</Box>
                  </NavLink>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
export default ButtonAppBar;
