import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 360,
    border: "1px solid #2699FB",
    padding: 20,
    borderRaduis: 4
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 20,
    color: "#4E4E4E"
  },
  pos: {
    marginBottom: 40
  },
  icon: {
    margin: 7
  },
  p: {
    color: "#707070",
    lineHeight: 1.8
  }
});

export default function ProjectCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          GDG Chpater Template
        </Typography>
        <Box my={4}>
          <Typography className={classes.p} component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vel,
            deserunt laboriosam voluptate aliquam quia labore ut veniam atque
            officia animi fugiat eligendi odio ullam.
          </Typography>
        </Box>
        <Box component="div" display="flex" justifyContent="center">
          <GitHubIcon color="primary" className={classes.icon} />
          <LinkIcon color="primary" className={classes.icon} />
        </Box>
      </CardContent>
    </Card>
  );
}
