import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

import Values from "./Accordion";
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "64px",
    flexGrow: 1
  }
}));

function Guidance() {
  const classes = useStyles();
  const theme = useTheme();

  console.log(theme);
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Box color={theme.palette.primary[900]} my={3}>
              <Typography variant="h4">Code Of Conduct</Typography>
            </Box>
            <Typography component="p">
              When you join our programs, you’re joining a community. And like
              any growing community, a few ground rules about expected behavior
              are good for everyone. These guidelines cover both online (e.g.
              mailing lists, social channels) and offline (e.g. in-person
              meetups) behavior. Violations of this code of conduct can result
              in members being removed from the program. Use your best
              judgement, and if you’d like more clarity or have questions feel
              free to reach out.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="/assets/person.png" style={{ width: "100%" }} alt="dev" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <img className="img-fluid" src="/assets/about2.png" alt="" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Values />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Guidance;
