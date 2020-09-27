import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DateAndTimePickers from '../datePicker/datePicker.js'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button';
import axios from "axios"
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import { useHistory } from "react-router-dom";

import AppBar from '../appbar/appbar.js';

const utilStyles = makeStyles((theme) => ({
  fields: {
    '& > *': {

      background: "#F1F1F1",
      marginTop: '20px',
      marginBottom: '20px',
      // backgroundColor: "#F1F1F1",
      opacity: "0.90",
    },
  },
  date: {
    marginTop: '20px',
  },
  margin: {
    marginTop: '10px',
    marginBottom: '10px',
    width: '20ch',
    background: "#F1F1F1",
    opacity: "0.90",

  },
  title: {
    margin: '20px',
    // margin: '20px',
    // fontSize: '30px',
    // textAlign: "center",
  },
  button: {
    marginTop: '40px',
    width: '110px',
    height: '40px',
    backgroundColor: "#27AE60",
    color: '#FFFFFF'
  },
  image: {
    marginTop: '20px',
    height: '300px',
    width: '382px',
    alignSelf: 'center',

  },
  imageBox:{
    width: '10px',
    height: '10px',
    right: '100px',

  }

}));


export default function EventRegistrationForm() {
  const utilStyle = utilStyles();
  const [emailInput, setEmailInput] = useState(''); // '' is the initial state value
  const [eventInput, setEventInput] = useState(''); // '' is the initial state value
  const [locationInput, setLocationInput] = useState(''); // '' is the initial state value
  const [dateInput, setDateInput] = useState(new Date()); // '' is the initial state value
  const [endDateInput, setEndDateInput] = useState(new Date()); // '' is the initial state value
  let res;
  let history = useHistory();

  function handleSubmit() {
    axios.post('/event', {
      name: eventInput,
      location: locationInput,
      email: emailInput,
      start_time: dateInput,
      end_time: endDateInput
    })
      .then(function (response) {
        console.log(response);
        history.push("/eventconfirmation", { res: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }




  return(
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <AppBar title="Registration Form" />

    {/* <Grid item>
      <p className={utilStyle.title}
>Registration Form</p>
    </Grid> */}
    <Grid item className={utilStyle.title}>
       <TextField 
            className={utilStyle.margin}
            value={eventInput}
            onInput={e => setEventInput(e.target.value)}
            id="event-name"
            label="Event Name"
          />

        {console.log("Event:", eventInput)}
      </Grid>
      <Grid item>
        <TextField
          className={utilStyle.margin}

          id="email-input"
          label="Email"
          value={emailInput}
          onInput={e => setEmailInput(e.target.value)}
        />
        {console.log("Email:", emailInput)}
      </Grid>
      <Grid item>
        <TextField
          className={utilStyle.margin}

          id="location"
          label="Location"
          value={locationInput}
          onInput={e => setLocationInput(e.target.value)}
        />
        {console.log("Location:", locationInput)}
      </Grid>
      <Grid item className={utilStyle.date}>
        <DateAndTimePickers
          id="start-of-event"
          title="Start"
          handleInputChange={setDateInput}
          value={dateInput}
        />
        {console.log("Date:", dateInput)}
      </Grid>
      <Grid item className={utilStyle.date}>
        <DateAndTimePickers
          id="end-of-event"
          title="End"
          handleInputChange={setEndDateInput}
          value={endDateInput}
        />
        {console.log("Date:", endDateInput)}
      </Grid>
      <Grid item>
        <Button
          className={utilStyle.button}
          onClick={() => { handleSubmit() }}>Submit</Button>
      </Grid>
      <Grid item>
        <img className={utilStyle.image} src="/images/recycle.jpg"></img>
      </Grid>
    </Grid>

  );

}

