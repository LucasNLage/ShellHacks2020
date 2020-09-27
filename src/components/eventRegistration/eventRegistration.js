import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DateAndTimePickers from '../datePicker/datePicker.js'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button';
import './eventRegistration.css';

const textStyles = makeStyles((theme) => ({
    fields: {
      '& > *': {
        top: "10px",
        margin: '10px',
        width: '25ch',
        height: '40px',
        background: "#F1F1F1",
        // backgroundColor: "#F1F1F1",
        opacity: "0.80",
        
        // color: "#263238",
      },
    },
    date: {
        '& > *': {
          margin: '44px',
          width: '25ch',
          height: '20px',
          
        },
      },
  }));

const useStyles = makeStyles((theme) => ({
  margin: {
    // margin: theme.spacing(1),
  },
  title: {
    //   top: 
    // margin: '30px',
    fontSize: '20px',
    textAlign: "center",
  },
  button: {
   margin: '70px',
   backgroundColor: "#27AE60",

  },
}));

export default function EventRegistrationForm(){
    const classes = useStyles();
    const textStyle = textStyles();

    return (
    <div>
        <div className={classes.margin}  style ={{textAlign: "center"}}>
        <p className={classes.title}>New Event</p>

                <div className={textStyle.fields} style ={{bottom: "40px"}}>
                    <TextField id="event-name" label="Event Name" />
                    <TextField
                        id="email-input"
                        label="Email"
                        InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle color="inherit"/>
                        </InputAdornment>),
                        }}
                    />
                    <TextField id="location" label="Location" />

                </div>

                <div className={textStyle.date}>
                    <DateAndTimePickers  id="start-of-event" title="Start of Event" />
                    <DateAndTimePickers id="end-of-event" title="End of Event"/>
                </div>

                <div className={classes.button}>
                    <Button>Submit</Button>
                </div>
        </div>
    </div>
    );
}