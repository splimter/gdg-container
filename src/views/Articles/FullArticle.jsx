import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import "./article.css";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    margin: 30
  },
  media: {
    height: 0,
    paddingTop: "40.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function FullArticle(props) {
  const classes = useStyles();

  return (
    <>
      <Box py={2} bgcolor="action.hover" display="flex" justifyContent="center">
        <Grid item md={12}>
          <Card className={classes.root}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
                content="qdsqdqs"
              />

              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <div class="dropdown">
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <div class="dropdown-content">
                    <DropBox />
                  </div>
                </div>
              </CardActions>
            </Grid>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/450"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
                <br />
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
                <br />
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
                <br />
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </>
  );
}

function DropBox() {
  return (
    <>
      <nav role="navigation">
        <ul class="dropdown">
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Tweeter</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
