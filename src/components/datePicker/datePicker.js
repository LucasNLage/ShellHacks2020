import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


// function renderComponent(props) {
//   const dateStr = props.title;
//   if (dateStr === 'Start') {
//     return (
//     <TextField
//     id="datetime-local"
//     label="Start of Event"
//     type="datetime-local"
//     defaultValue="2020-08-27T10:30"
//     className={classes.textField}
//     InputLabelProps={{
//       shrink: true,
//     }}
//     value={dateInput}
//     onInput={e => setDateInput(e.target.value)}
//   />
//  {console.log("Date:", dateInput)}
//  );
//   } else {
//     return null;
//   }
// }

export default function DateAndTimePickers(props) {
  const classes = useStyles();
  const dateStr = props.title;
  const [dateInput, setDateInput] = useState(''); // '' is the initial state value
  const [endDateInput, setEndDateInput] = useState(''); // '' is the initial state value

  if(dateStr == "Start"){
    return (
      <form className={classes.container} noValidate>
         
      </form>
    );
  }else{
    return (
      <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="End of Event"
            type="datetime-local"
            defaultValue="2020-08-27T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            value={endDateInput}
            onInput={e => setEndDateInput(e.target.value)}
          />
      </form>
    );
  }
  

}


// export default function DateAndTimePickers(props) {
//   const classes = useStyles();

//   return (
//     // <form className={classes.container} noValidate>
//     //   <TextField
//     //     id="datetime-local"
//     //     label="Date of Event"
//     //     type="datetime-local"
//     //     defaultValue="2020-08-27T10:30"
//     //     className={classes.textField}
//     //     InputLabelProps={{
//     //       shrink: true,
//     //     }}
//     //   />
//     // </form>
//   );
// }
