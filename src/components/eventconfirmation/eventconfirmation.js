
import React from 'react';
import Button from '@material-ui/core/Button';
import AdminLink from '../links/adminLink.js';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { CardMedia, Typography, Grid, Divider, TextField } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {
    Link,
    useHistory,
    useLocation
} from "react-router-dom";
import Appbar from "../appbar/appbar"
const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        marginTop: 40,
        marginBottom: 40,
        fontStyle: "normal",
        fontWeight: "bold;",
        fontSize: "32px"
    },
    subtitle: {
        marginTop: 20,
        marginBottom: 20
    },
    textfields: {
        marginTop: 20,
        marginBottom: 20,
        color: "green"
    },
    icon: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 5
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
            height: "75px",
            width: "250px",
            fontSize: 20,
        },
    },
}));

const outerTheme = createMuiTheme({
    palette: {
        secondary: {
            main: green[500],
        },
    },
});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000000",
            contrastText: "#fff" //button text white instead of black
        },
        background: {
            default: "#394764"
        }
    }
});

//TESTING HOME PAGE
export default function EventConfirmation(props) {
    const location = useLocation();
    const classes = useStyles();
    console.log("props:", props)

    let history = useHistory();

    function handleClick() {
        history.push("/taskRegistration");
    }

    return (
        <>
            <Appbar title="Event Confirmation"/>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography className={classes.title} variant="h3" align="center">Event has been created</Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item>
                    <Typography className={classes.subtitle} variant="h6" align="center">Please use the codes below to get started</Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item>
                    <Typography className={classes.textfields} variant="h6" align="center">Volunteers</Typography>
                    <TextField
                        id="outlined-read-only-input"
                        align="center"
                        defaultValue={location.state.res.volunteer_access_code}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <FileCopyIcon
                        className={classes.icon}
                        onClick={() => { navigator.clipboard.writeText(location.state.res.volunteer_access_code) }} />
                </Grid>
                <Grid item>
                    <Typography className={classes.textfields} variant="h6" align="center">Coordinators</Typography>
                    <TextField
                        id="outlined-read-only-input"
                        className={classes.textfield}
                        align="center"
                        defaultValue={location.state.res.coordinator_access_code}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <FileCopyIcon
                        className={classes.icon}
                        onClick={() => { navigator.clipboard.writeText(location.state.res.coordinator_access_code) }} />
                </Grid>
                <Grid item>
                    <Link
                        variant="body2"
                        onClick={() => handleClick()
                        }
                    >
                        Create a task!
                </Link>
                </Grid>

            </Grid >
        </>
    );
}
