import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DateAndTimePickers from '../datePicker/datePicker.js'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button';
import axios from "axios"
import './eventRegistration.css';
import { useState } from 'react';


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

export default function EventRegistrationForm() {
  const classes = useStyles();
  const textStyle = textStyles();
  const [emaiInput, setEmailInput] = useState(''); // '' is the initial state value
  const [eventInput, setEventInput] = useState(''); // '' is the initial state value
  const [locationInput, setLocationInput] = useState(''); // '' is the initial state value
  const [dateInput, setDateInput] = useState(new Date()); // '' is the initial state value
  const [endDateInput, setEndDateInput] = useState(new Date()); // '' is the initial state value


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

    console.log("start date:", endDateInput)
    console.log("sent form")
  }


  return (
    <div>
      <div className={classes.margin} style={{ textAlign: "center" }}>
        <p className={classes.title}>New Event</p>

        <div className={textStyle.fields} style={{ bottom: "40px" }}>
          <TextField value={eventInput}
            onInput={e => setEventInput(e.target.value)}
            id="event-name"
            label="Event Name"
          />
          {console.log("Event:", eventInput)}
          <TextField
            id="email-input"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="inherit" />
                </InputAdornment>),
            }}
            value={emaiInput}
            onInput={e => setEmailInput(e.target.value)}
          />
          {console.log("Email:", emaiInput)}

          <TextField id="location"
            label="Location"
            value={locationInput}
            onInput={e => setLocationInput(e.target.value)}
          />
          {console.log("Location:", locationInput)}
          <div className={textStyle.date}>
            <DateAndTimePickers
              id="start-of-event"
              title="Start"
              handleInputChange={setDateInput}
              value={dateInput}
            />
            {console.log("Date:", dateInput)}

            <DateAndTimePickers
              id="end-of-event"
              title="End"
              handleInputChange={setEndDateInput}
              value={endDateInput}
            />
            {console.log("Date:", endDateInput)}

          </div>
          <div className={classes.button}>
            <Button onClick={() => { handleSubmit() }}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}