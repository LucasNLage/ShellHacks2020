
import React from 'react';
import './homepage.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
// import Button from '@material-ui/core/Button';
import Button from '../buttons/buttons.js';
import AdminLink from '../links/adminLink.js';
import RegistrationForm from '../eventRegistration/eventRegistration.js'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
    },
  }));

//TESTING HOME PAGE
export default function HomePage() {
    const classes = useStyles();

    return(
    <div className={classes.root}>
            <header className="HomePage-header">
                {/* <RegistrationForm></RegistrationForm> */}
                <h1>Welcome to TaskMe</h1>   

                <Button title='Volunteer'/>
                <p>or</p>
                <Button title='Coordinator'/>
                <AdminLink/>
         </header>
    </div>
    );
    // let history = useHistory()
    // return (
    //     <div>
    //         <Button onClick={() => { history.push("/test") }}>Test Button</Button>
    //         <p>or</p>
    //         <Link to="/">Home</Link>
    //     </div>
    // );
}
