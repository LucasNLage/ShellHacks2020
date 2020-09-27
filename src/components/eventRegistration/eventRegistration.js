import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DateAndTimePickers from '../datePicker/datePicker.js'
import InputAdornment from '@material-ui/core/InputAdornment'
const textStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
        color: "#DCDEE1"
      },
    },
  }));

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    height: "500px",
    backgroundColor: "#DCDEE1"
  },
}));

export default function EventRegistrationForm(){
    const classes = useStyles();
    const textStyle = textStyles();

    return (
    <div>
        <p style={{color: "#000000", textAlign: "center"}}>Registration Form</p>
       
        <div className={classes.margin}  style ={{textAlign: "center"}}>
                <div className={textStyle.root} style ={{bottom: "40px"}}>
                    <TextField id="standard-basic" label="Event Name" />
                    <TextField
                        id="input-with-icon-textfield"
                        label="Email"
                        InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle color="inherit"/>
                        </InputAdornment>),
                        }}
                    />
                    <TextField id="standard-basic" label="Location" />
                    <DateAndTimePickers id="start-of-event" title="Start of Event" style ={{textAlign: "center", width:"200px"}}/>
                    <DateAndTimePickers id="end-of-event" title="End of Event" style ={{textAlign: "center"}}/>
    
                </div>
        </div>
    </div>
    );
}