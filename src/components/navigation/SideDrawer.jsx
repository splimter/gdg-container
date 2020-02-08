import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Routes from "../../routes/index";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";

import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: 250
  }
}));

function SideDrawer({ status, onClose }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer open={status} onClose={onClose("left", false)}>
        <div
          className={classes.fullList}
          role="presentation"
          onClick={onClose("left", false)}
          onKeyDown={onClose("left", false)}
        >
          <img src="/logo.png" style={{ width: "100%" }} alt="gdg logo"/>
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
export default SideDrawer;
