import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "32px",
    flexGrow: 1,
  }
}));

function Main() {
  const classes = useStyles();
    return (
        <div className={classes.root}>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              <img src="/assets/gdg-social.jpg" style={{width: "110%"}} alt="about"/>
            </Grid>
            <Grid item xs={7}>
              <Typography component="p" fontSize="20px" >
                Google Developer Group Chlef is inspired by GTUG/GDG Family . We
                started our journey in Feb 2011. We try to engage student developers,
                fresh graduates and professionals through our hack events &amp;
                meetups. The motive is to create a local ecosystem of programmers
                &amp; hackers in and around Jalandhar. The technology awareness is
                main goal for first few years of the group.
              </Typography>
              <Typography component="p" fontSize="16px" color="textSecondary">
                GDGs are local groups of developers who are specifically interested in
                Google products and APIs. Each local group is called a GDG chapter and
                can host a variety of technical activities for developers - from just
                a few people getting together to watch our latest videos, to large
                gatherings with demos and tech talks, to hackathons.
              </Typography>

              <Box display="flex" justifyContent="center" className={classes.root}>
                <Grid item xs={4}>
                  <Button variant="contained" color="primary" onClick={(e) => {
                    window.location = 'https://www.meetup.com/GDG-Chlef/';
                  }}>
                    Become A Member
                  </Button >
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" onClick={(e) => {
                    window.location = 'https://developers.google.com/groups';
                  }}>
                    Learn more
                  </Button >
                </Grid>
              </Box>

            </Grid>
          </Grid>
        </div>
    );
}

export default Main;
