
import React from 'react';
import './homepage.css';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AdminLink from '../links/adminLink.js';

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
        margin: '70px',
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

    }
}));


export default function HomePage() {
    const classes = useStyles();

    return (
        
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
          {/* <AppBar></AppBar> */}
    <Grid item>
        <CardMedia 
            style={{ height: 0, paddingTop: '56.25%' }}
            image="."
            title="lorem ipsum"
        />
    </Grid>
    <Grid item >
        <Typography className={classes.welcome} variant="h3" component="h1" align="center">Welcome to TaskMe</Typography>
    </Grid>
    <Grid item >
        <Typography className={classes.starter} variant="h4" component="h4" align="center">Let's get started.</Typography>
    </Grid>
    <Grid item>
        <Button className={classes.button} >Volunteer</Button>
    </Grid>
    <Grid item >
        <Typography className={classes.string} variant="p" component="p" align="center">or</Typography>
    </Grid>
    <Grid item>
        <Button className={classes.button}>Coordinator</Button>
    </Grid>
    <Grid item className={classes.padding}>
        <AdminLink  /> 
    </Grid>

    {/* <div className="HomePage-header"> 
     <CardMedia 
        style={{ height: 100, paddingTop: '56.25%' }}
            image={GreenImage}
            title="lorem ipsum"
       />
        <header className="HomePage-header"> */}
         {/* <h1 className="HomePage-welcome">Welcome to TaskMe</h1>
        <h4 className="HomePage-started">Let's get started.</h4>
        </header> 
        <div className="HomePage-button1"> */}
               {/* <Button  >Volunteer</Button>
             </div>
            <div className="HomePage-text"> 
         <p className="HomePage-text">or</p> 
         </div> 
         <div className="HomePage-button2"> 
         <Button>Coordinator</Button> 
          </div> 
         <AdminLink />  
        </div>  */}
    </Grid>
    ); 
}
