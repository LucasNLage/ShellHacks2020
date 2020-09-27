
import React from 'react';
import './homepage.css';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AdminLink from '../links/adminLink.js';

import AppBar from '../appbar/appbar.js';
import EventRegistrationForm from '../eventRegistration/eventRegistration.js';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
    },
    string: {
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: '20px',
    },
    welcome: {
        margin: '30px',
        marginBottom: '10px',
        fontSize: '48px',

    },
    starter: {
        fontSize: '18px',
        marginBottom: '60px',

    },
    padding: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    button: {
        width: '200px',
        height: '60px',
        fontSize: '18px',
        background: '#27AE60',
        boxShadow: '0px 4px 4px rgba(154, 154, 154, 0.25)',
        radius: '10px',
        color: '#FFFFFF'

    },
    image: {
        marginTop: '10px',
        height: '200px',
    },
    link: {
        alignItems: "center",
        color: "#27AE60",
    }

}));


export default function HomePage() {
    const classes = useStyles();
    let history = useHistory();

    return ( 
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
          {/* <AppBar></AppBar> */}
    <Grid item>
        <img className={classes.image} src="/images/hpimage.svg"></img>
    </Grid>
    <Grid item >
        <Typography className={classes.welcome} variant="h3" component="h1" align="center">Welcome to TaskMe</Typography>
    </Grid>
    <Grid item >
        <Typography className={classes.starter} variant="h4" component="h4" align="center">Let's get started.</Typography>
    </Grid>
    <Grid item>
        <Button className={classes.button}
                onClick={()=> history.push("/accesscode", {role: "Volunteer"})}>
                Volunteer
        </Button>
    </Grid>
    <Grid item >
        <Typography className={classes.string} variant="p" component="p" align="center">or</Typography>
    </Grid>
    <Grid item>
        <Button 
            className={classes.button}
            onClick={()=> history.push("/accesscode", {role: "Coordinator"})}>Coordinator
        </Button>
    </Grid>
    <Grid item className={classes.padding}>
        <AdminLink /> 
    </Grid>

    </Grid>
    ); 
}
