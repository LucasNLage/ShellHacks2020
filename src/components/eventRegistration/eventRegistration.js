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
import Grid from '@material-ui/core/Grid';


const utilStyles = makeStyles((theme) => ({
  fields: {
    '& > *': {

      background: "#F1F1F1",
      marginTop: '20px',
      marginBottom: '20px',
      // backgroundColor: "#F1F1F1",
      opacity: "0.90",

      // color: "#263238",
    },
  },
  date: {
    marginTop: '20px',
  },
  margin: {
    marginTop: '10px',
    marginBottom: '10px',
    width: '18ch',
    background: "#F1F1F1",
    opacity: "0.90",

  },
  title: {
    margin: '80px',
    fontSize: '30px',
    textAlign: "center",
  },
  button: {
    marginTop: '40px',
    backgroundColor: "#27AE60",

  },

}));


export default function EventRegistrationForm() {
  const utilStyle = utilStyles();
  const [emailInput, setEmailInput] = useState(''); // '' is the initial state value
  const [eventInput, setEventInput] = useState(''); // '' is the initial state value
  const [locationInput, setLocationInput] = useState(''); // '' is the initial state value
  const [dateInput, setDateInput] = useState(new Date()); // '' is the initial state value
  const [endDateInput, setEndDateInput] = useState(new Date()); // '' is the initial state value


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
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("start date:", endDateInput)
    console.log("sent form")
  }


  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <p className={utilStyle.title}
        >New Event</p>
      </Grid>
      <Grid item>
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
    </Grid>

  );

}

//   return (
//     <div>
//       <div className={classes.margin} style={{ textAlign: "center" }}>
//         <p className={classes.title}>New Event</p>

//         <div className={textStyle.fields} style={{ bottom: "40px" }}>
//           <TextField value={eventInput}
//             onInput={e => setEventInput(e.target.value)}
//             id="event-name"
//             label="Event Name"
//           />
//           {console.log("Event:", eventInput)}
//           <TextField
//             id="email-input"
//             label="Email"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AccountCircle color="inherit" />
//                 </InputAdornment>),
//             }}
//             value={emaiInput}
//             onInput={e => setEmailInput(e.target.value)}
//           />
//           {console.log("Email:", emaiInput)}

//           <TextField id="location"
//             label="Location"
//             value={locationInput}
//             onInput={e => setLocationInput(e.target.value)}
//           />
//           </div>
//           {console.log("Location:", locationInput)}
//           <div className={textStyle.date}>
//             <DateAndTimePickers
//               id="start-of-event"
//               title="Start"
//               handleInputChange={setDateInput}
//               value={dateInput}
//             />
//             {console.log("Date:", dateInput)}

//             <DateAndTimePickers
//               id="end-of-event"
//               title="End"
//               handleInputChange={setEndDateInput}
//               value={endDateInput}
//             />
//             {console.log("Date:", endDateInput)}
//           </div>
//           <div className={classes.button}>
//             <Button onClick={() => { handleSubmit() }}>Submit</Button>
//           </div>
//       </div>
//     </div>
//   );
// }