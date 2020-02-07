import React, { Component, Fragment } from "react";
import { Grid, Container } from "@material-ui/core";
import Welcome from "../components/Welcome";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Welcome />
            </Grid>
            <Grid item xs={12} md={6}>
              item
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default HomePage;
