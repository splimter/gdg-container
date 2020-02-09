import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Grid} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "64px",
        flexGrow: 1,
    },
    title: {
        fontSize: "180%", color: "rgb(2, 119, 189)"
    },
    subtitle: {
        fontSize: "110%"
    },
    subtitledecore: {
        fontSize: "120%",
        color: "rgb(46, 46, 46)"
    },
    importantnotic: {fontSize: "120%"}
}));

function Guidance() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={8}>
                    <Grid xs={8}>
                        <div className="col">
                            <Typography component="p"
                                        className={classes.title}>
                                Code of conduct
                            </Typography>
                            <Typography component="p">
                                When you join our programs, you’re joining a community. And like any
                                growing community, a few ground rules about expected behavior are
                                good for everyone. These guidelines cover both online (e.g. mailing
                                lists, social channels) and offline (e.g. in-person meetups)
                                behavior. Violations of this code of conduct can result in members
                                being removed from the program. Use your best judgement, and if
                                you’d like more clarity or have questions feel free to reach out.
                            </Typography>
                        </div>
                        <div className="flex pa-2 my-0 xs12 md8 lg8">
                            <Typography component="p"
                                        className={classes.title}>
                                Anti-Harassment Policy
                            </Typography>
                            <Typography component="p" className={classes.subtitle}>
                                <b className={classes.subtitledecore}>
                                    Why do we have an official Anti-Harassment policy for GDG Jeddah
                                    events?
                                </b>
                            </Typography>
                            <ul style={{marginTop: "16px"}} className={classes.subtitle}>
                                <li>
                                    It sets expectations for behavior at the event. Simply having an
                                    anti-harassment policy can prevent harassment.
                                </li>
                                <li>
                                    It encourages people to attend who have had bad experiences at
                                    other events
                                </li>
                                <li>
                                    It gives event staff/volunteers instructions on how to handle
                                    harassment quickly, with minimum amount of disruption for the
                                    event.
                                </li>
                            </ul>
                            <p/>
                            <Typography component="p" className={classes.subtitle}>
                                <b className={classes.subtitledecore}>
                                    GDG Jeddah is dedicated to providing a harassment-free event
                                    experience for everyone, regardless of:{" "}
                                </b>
                            </Typography>
                            <ul style={{marginTop: "16px"}} className={classes.subtitle}>
                                <li>Gender</li>
                                <li>Sexual Orientation</li>
                                <li>Disability</li>
                                <li>Gender Identity</li>
                                <li>Age</li>
                                <li>Race</li>
                                <li>Religion</li>
                                <li>Nationality</li>
                            </ul>
                            <span className={classes.subtitle}>
              The above is not an exhaustive list -- we do not tolerate
              harassment of event spanarticipants in any form.
                        </span>
                            <p/>
                            <Typography component="p" className={classes.importantnotic}>
                                Sexual language and imagery is not appropriate for any event
                                venue, including talks. Event participants violating these rules
                                may be expelled from the event, and event banned from future
                                events at the discretion of the event organizers/management.{" "}
                            </Typography>
                            <Typography component="p" className={classes.subtitle}>
                                Harassment includes (but is not limited to):{" "}
                            </Typography>
                            <ul style={{marginTop: "16px"}} className={classes.subtitle}>
                                <li>
                                    Offensive verbal comments related to gender, sexual orientation,
                                    disability, gender identity, age, race, religion
                                </li>
                                <li>
                                    The use or display of sexual images in public spaces
                                </li>
                                <li>Deliberate intimidation</li>
                                <li>Stalking</li>
                                <li>
                                    Harassing photography or recording
                                </li>
                                <li>
                                    Sustained disruption of talks or other events
                                </li>
                                <li>Inappropriate physical contact</li>
                                <li>Unwelcome sexual attention</li>
                            </ul>
                            <p/>
                            <Typography component="p" className={classes.importantnotic}>
                                Participants asked to stop any harassing behavior are expected to
                                comply immediately. <br/>
                                <br/>
                                Exhibiting partners and guests are also subject to the
                                anti-harassment policy. In particular, exhibitors and speakers
                                should not use sexualized images, activities, or other material,
                                or otherwise create a sexualized environment in their slide decks,
                                exhibit material, exhibit staffing, promotional items or demo
                                material. <br/>
                                <br/>
                                If you are being harassed, notice that someone else is being
                                harassed, or have any other concerns, please contact an organizer
                                or event volunteer immediately. Organizers and event volunteers
                                may be identified by t-shirts or special badges/lanyards.
                                Organizers will investigate the issue and take appropriate action.
                                This may include helping participants contact venue security or
                                local law enforcement, provide escorts, or otherwise assist these
                                experiencing harassment to fell safe for the duration of the
                                event. <br/>
                                <br/>
                                Though we hope that we never have to invoke this policy, we
                                believe that having this document helps everyone think a little
                                more about how their actions and words affect the whole community,
                                as well as individuals in the community.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Guidance;
