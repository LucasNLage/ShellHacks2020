import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'fontsource-roboto';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      
      margin: theme.spacing(1),
      height: "75px",
      width: "250px",
      fontSize: 20,
    },
  },
}));

// function renderComponent(props) {
//     if (name === 'Volunteer') {
//       return (
        
//       );
//     } else {
//       return(
//         <Button variant="contained" color="secondary">
//              {name}
//          </Button>
//       );
//     }
//   }

export default function OutlinedButtons(props) {
  const classes = useStyles();
  const name = props.title;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
            {name}
      </Button>
    </div>
  );

}
