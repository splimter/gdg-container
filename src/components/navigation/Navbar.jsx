import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Routes from "../../routes/index";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";

import SideDrawer from "./SideDrawer";

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
    color: "#333"
  },
  navLink: {
    color: "#333"
  }
}));

function NavBar() {
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
      <AppBar color={"inherit"} position="static">
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
            GDG Chlef Chapter
          </Typography>
          <Box display={{ xs: "none", md: "block", lg: "block" }}>
            {Routes.map((prop, key) => {
              return (
                <Button key={key} className={classes.navItems}>
                  <NavLink
                    className="text-gray"
                    to={prop.path}
                    style={{ textDecoration: "none" }}
                    key={key}
                  >
                    <Box key={key}>{prop.sidebarName}</Box>
                  </NavLink>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      <SideDrawer status={state.left} onClose={toggleDrawer} />
    </div>
  );
}
export default NavBar;
