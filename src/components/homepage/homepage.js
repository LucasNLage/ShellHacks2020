
import React from 'react';
import './homepage.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import AdminLink from '../links/adminLink.js';
import RegistrationForm from '../eventRegistration/eventRegistration.js'
import { makeStyles } from '@material-ui/core/styles';

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


//TESTING HOME PAGE
export default function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <header className="HomePage-header">
                <h1>Welcome to TaskMe</h1>
                <Button className={classes.button}>Volunteer</Button>
                <p>or</p>
                <Button className={classes.button}>Coordinator</Button>
                <AdminLink />
            </header>
        </div>

    );
}
