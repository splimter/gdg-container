import React, { Component } from "react";

import Main from "./Main";
import Guidance from "./Guidance";
import { Container, Divider, Box } from "@material-ui/core";

class AboutPage extends Component {
  state = {};

  render() {
    return (
      <>
        <Container>
          <Main />
          <Box my={8}>
            <Divider />
          </Box>
          <Guidance />
        </Container>
      </>
    );
  }
}

export default AboutPage;
