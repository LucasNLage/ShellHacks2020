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
      width: "400px",
      fontSize: 20,
    },
  },
}));

function renderComponent(props) {
  const name = props.title;
  if (name === 'Volunteer') {
    return (
      <Button variant="contained" color="primary">
        {name}
      </Button>
    );
  } else {
    return (
      <Button variant="contained" color="secondary">
        {name}
      </Button>
    );
  }
}

export default function OutlinedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {renderComponent(props)}
    </div>
  );
  //   return (

  //       <Button variant="outlined" color="primary">
  //         {props.title}
  //       </Button>
  //       <Button variant="outlined" color="secondary">
  //         Secondary
  //       </Button>
  //   );
}
