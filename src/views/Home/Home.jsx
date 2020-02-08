import React, { Component, Fragment } from "react";
import { Grid, Container, Button } from "@material-ui/core";
import Welcome from "../../components/Welcome";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import PersonIcon from "@material-ui/icons/Person";
import PublicIcon from "@material-ui/icons/Public";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

import MultipleItems from "./EventCarousel/EventCarousel";
import ProjectCard from "./projectCard";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Box align="center" component="header" mt={5}>
          <Welcome />
        </Box>

        {/* about section */}
        <Box className="bg-blue" py={5} component="section">
          <Container>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Box mb={4}>
                  <Typography variant="h4" color="textSecondary" component="h2">
                    What we do ?
                  </Typography>
                </Box>
                <Typography variant="body1" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Similique iure non quis corrupti, nisi vel velit minus.
                  Quibusdam similique excepturi blanditiis omnis, id nam culpa,
                  velit, recusandae inventore atque laboriosam.
                </Typography>
                <Box my={1}>
                  <Typography variant="body2" component="p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Similique
                  </Typography>
                </Box>
                <Box component="div" mt={4}>
                  <PersonIcon color="primary" />
                  <Box component="span" ml={3}>
                    <PublicIcon color="primary" />
                  </Box>
                  <Box component="span" ml={3}>
                    <FavoriteIcon color="primary" />
                  </Box>
                  <Box component="span" ml={3}>
                    <FormatQuoteIcon color="primary" />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  style={{ height: "100%" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img
                    style={{ width: "80%" }}
                    src="/assets/gdg-team.jpeg"
                    alt="gdg chlef team"
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* events Section */}
        <Box py={5} component="section">
          <Container>
            <Typography
              align="center"
              variant="h4"
              color="textSecondary"
              component="h2"
            >
              Our Events
            </Typography>
            <Box my={4} mx={"auto"} style={{ width: "75%" }}>
              <Typography align="center" variant="body2" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus impedit, at dolorem voluptatem debitis, aut aliquid eos
                iusto harum ipsum officiis quia nulla modi rerum!
              </Typography>
            </Box>

            <MultipleItems />
          </Container>
        </Box>

        {/* Project Section */}
        <Box className="bg-blue" py={5} component="section">
          <Box align="center" mb={5}>
            <Typography
              align="center"
              variant="h4"
              color="textSecondary"
              component="h2"
            >
              Our Projects
            </Typography>
          </Box>
          <Container>
            <Grid container spacing={8}>
              <Grid item xs={12} md={4}>
                <ProjectCard />
              </Grid>
              <Grid item xs={12} md={4}>
                <ProjectCard />
              </Grid>
              <Grid item xs={12} md={4}>
                <ProjectCard />
              </Grid>
            </Grid>
          </Container>
          <Box align="center" mt={3}>
            <Button href="#" color="primary">
              See more
            </Button>
          </Box>
        </Box>

        {/* events Section */}
        <Box py={5} component="section">
          <Container>
            <Box align="center" mb={5}>
              <Typography variant="h4" color="textSecondary" component="h2">
                Opportunities &amp; Competitions
              </Typography>
            </Box>

            <Grid container spacing={8}>
              <Grid item xs={12} md={4}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <img
                    src="/assets/sof.png"
                    style={{ height: "150px", marginBottom: 20 }}
                    alt=""
                  />
                  <Typography color="textSecondary" variant="h4" component="h3">
                    Summer Of Code
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <img
                    src="/assets/hoc.jpg"
                    style={{ height: "150px", marginBottom: 20 }}
                    alt=""
                  />
                  <Typography color="textSecondary" variant="h4" component="h3">
                    #Hash Code
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <img
                    src="/assets/wtm.png"
                    style={{ height: "150px", marginBottom: 20 }}
                    alt=""
                  />
                  <Typography color="textSecondary" variant="h4" component="h3">
                    Women TechMakers
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box align="center" mt={3}>
              <Button href="#" color="primary">
                See more
              </Button>
            </Box>
          </Container>
        </Box>
      </Fragment>
    );
  }
}

export default HomePage;
