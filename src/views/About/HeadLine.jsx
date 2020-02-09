import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    typography: {
        fontSize: "300%",
        color: "#ffffff",
        fontWeight: 600
    },
    divHead : {
        height: "400px",
        backgroundImage: `url('/assets/gdg-team.jpeg')`,
        backgroundSize: "cover"
    }
}));

function HeadLine() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <Box className={classes.divHead} component="div"  display="flex" justifyContent="center" alignItems="center">
                <Typography className={classes.typography} component="p" px="5">
                    About GDG Chlef
                </Typography>
            </Box>
        </React.Fragment>
    );
}

export default HeadLine;
