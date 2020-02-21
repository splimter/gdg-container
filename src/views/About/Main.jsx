import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "32px",
    flexGrow: 1
  }
}));

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item md={4} xs={12}>
          <img
            src="/assets/devfest-network.jpg"
            style={{ width: "100%" }}
            alt="about"
          />
        </Grid>

        <Grid item md={8} xs={12}>
          <Typography lineHeight={10}>
            Google Developer Group Chlef is inspired by GTUG/GDG Family . We
            started our journey in Feb 2011. We try to engage student
            developers, fresh graduates and professionals through our hack
            events &amp; meetups. The motive is to create a local ecosystem of
            programmers &amp; hackers in and around Jalandhar. The technology
            awareness is main goal for first few years of the group.
          </Typography>

          <Box display="flex" className={classes.root}>
            <Button
              variant="contained"
              color="primary"
              onClick={e => {
                window.location = "https://www.meetup.com/GDG-Chlef/";
              }}
            >
              Become A Member
            </Button>

            <Button
              variant="link"
              onClick={e => {
                window.location = "https://developers.google.com/groups";
              }}
            >
              Learn more
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
