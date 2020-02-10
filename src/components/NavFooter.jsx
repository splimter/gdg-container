import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
//

const useStyles = makeStyles(theme => ({
    MainBackground: {
        backgroundColor: "#2699FB",
        marginTop: "128px",
        paddingTop: "64px",
        paddingBottom: "64px",
        paddingRight: "128px",
        paddingLeft: "128px"
    },
    Typography: {
        color: "white"
    }
}));

function NavFooter(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.MainBackground}
              justify="space-around"
              alignItems="flex-start"
              container>
            <Grid item md="3">
                <Typography className={classes.Typography} variant="h5" component="p"
                            style={{marginBottom: "16px"}}>About</Typography>

                <Typography className={classes.Typography} component="p">
                    <Link href="https://gdgchlef.com/" target="_blank" color="inherit">
                        {'GDG Chlef'}
                    </Link>
                </Typography>
                <Typography className={classes.Typography} component="p">
                    <Link href="https://developers.google.com/programs/community/gdg/" target="_blank" color="inherit">
                        {'Google Developers Groups'}
                    </Link>
                </Typography>
                <Typography className={classes.Typography} component="p">
                    <Link href="https://www.womentechmakers.com/" target="_blank" color="inherit">
                        {'Women Tech makers'}
                    </Link>
                </Typography>
                <Typography className={classes.Typography} component="p">
                    <Link href="https://www.meetup.com/GDG-Chlef/" target="_blank" color="inherit">
                        {'Become a Member'}
                    </Link>
                </Typography>
            </Grid>
            <Grid item md="3">
                <Typography className={classes.Typography} variant="h5" component="p"
                            style={{marginBottom: "16px"}}>Resources</Typography>

                <Typography className={classes.Typography} component="p">
                    <Link href="#" target="_blank" color="inherit">
                        {'Resources Become a Sponsor'}
                    </Link>
                </Typography>
                <Typography className={classes.Typography} component="p">
                    <Link href="#" target="_blank" color="inherit">
                        {'Call for Speaker'}
                    </Link>
                </Typography>
                <Typography className={classes.Typography} component="p">
                    <Link href="#" target="_blank" color="inherit">
                        {'Media Kit'}
                    </Link>
                </Typography>

            </Grid>
            <Grid item md="3">
                <Typography className={classes.Typography} variant="h5" component="p" style={{marginBottom: "16px"}}>Developer
                    Console</Typography>

                <Typography className={classes.Typography} component="p">
                    <Link href="https://console.developers.google.com/" target="_blank" color="inherit">
                        {'Google API Console'}
                    </Link>
                </Typography>
                <Typography className={classes.Typography} component="p">
                    <Link href="https://console.cloud.google.com/" target="_blank" color="inherit">
                        {'GCP Console'}
                    </Link>
                </Typography>
                <Typography className={classes.Typography} component="p">
                    <Link href="https://console.cloud.google.com/" target="_blank" color="inherit">
                        {'Google Play Console'}
                    </Link>
                </Typography>
                <Typography className={classes.Typography} component="p">
                    <Link href="https://console.firebase.google.com/" target="_blank" color="inherit">
                        {'Firebase Console'}
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    );
}

export default NavFooter;