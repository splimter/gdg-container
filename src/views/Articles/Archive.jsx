import React, { Component } from "react";
import { Typography, Box, Container, Grid } from "@material-ui/core";
import PagesIcon from "@material-ui/icons/Pages";
import SingleArticle from "./SingleArticle";

export default class ArticlesPage extends Component {
  render() {
    return (
      <>
        <Box textAlign="center" py={10}>
          <Container>
            <Box display="flex" alignItems="center" justifyContent="center">
              <PagesIcon color="secondary" fontSize="large"></PagesIcon>
              <Typography variant="h3">Articles</Typography>
            </Box>
          </Container>
        </Box>

        <Box py={5} bgcolor="action.hover">
          <Container>
            <Grid container>
              <Grid item md={6}>
                <SingleArticle />
              </Grid>
              <Grid item md={6}>
                <SingleArticle />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
}
