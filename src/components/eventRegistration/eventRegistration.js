import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DateAndTimePickers from '../datePicker/datePicker.js'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button';
import axios from "axios"
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

function handleSubmit() {
  axios.post('/event', {
    name: "test from in app",
    location: "Lucas Basement",
    email: "admin@admin.com",
    start_time: "2020-09-26T21:29:16.681Z",
    end_time: "2020-09-26T21::16.681Z"
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log("sent form")
}

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




export default function EventRegistrationForm() {
  const classes = useStyles();
  const textStyle = textStyles();

  function handleChange(event) {
    this.setState({ value: event.target.value });
  }

  return (
    <div>
      <div className={classes.margin} style={{ textAlign: "center" }}>
        <p className={classes.title}>New Event</p>

        <form onSubmit={() => handleSubmit()}>
          <div className={textStyle.fields} style={{ bottom: "40px" }}>
            <TextField id="event-name" label="Event Name" />
            <TextField
              id="email-input"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle color="inherit" />
                  </InputAdornment>),
              }}
            />
            <TextField id="location" label="Location" />
          </div>
          <div className={textStyle.date}>
            <DateAndTimePickers id="start-of-event" title="Start of Event" />
            <DateAndTimePickers id="end-of-event" title="End of Event" />
          </div>
          <div className={classes.button}>
            <Button onClick={() => { handleSubmit() }}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}