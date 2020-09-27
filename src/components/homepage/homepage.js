
import React from 'react';
import './homepage.css';
import Button from '@material-ui/core/Button';
import AdminLink from '../links/adminLink.js';
import RegistrationForm from '../eventRegistration/eventRegistration.js'
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { CardMedia } from '@material-ui/core';
import AppBar from '../appbar/appbar.js';
import EventRegistrationForm from '../eventRegistration/eventRegistration.js';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
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
export default function HomePage() {
    const classes = useStyles();

    return (
        <div className="HomePage-header">
            <CardMedia
                style={{ height: 0, paddingTop: '56.25%' }}
                image="."
                title="lorem ipsum"
            />
            {/* <header className="HomePage-header"> */}
            <h1 className="HomePage-welcome">Welcome to TaskMe</h1>
            <h4 className="HomePage-started">Let's get started.</h4>
            {/* </header> */}
            <div className="HomePage-button1">
                <Button  >Volunteer</Button>
            </div>
            {/* <div className="HomePage-text"> */}
            <p className="HomePage-text">or</p>
            {/* </div> */}
            <div className="HomePage-button2">
                <Button>Coordinator</Button>
            </div>
            <ThemeProvider></ThemeProvider>
            <AdminLink />
        </div>

    );
}
