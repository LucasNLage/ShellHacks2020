import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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


export default function OutlinedButtons(props) {
  const classes = useStyles();
  const dateStr = props.title;

  return (
    <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label={dateStr}
          type="datetime-local"
          defaultValue="2020-08-27T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
    </form>
  );

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
