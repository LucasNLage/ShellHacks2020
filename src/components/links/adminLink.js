import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  Link,
  useHistory
} from "react-router-dom";

let history = useHistory;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // backgroundColor: theme.palette.background.paper,
      margin: theme.spacing(1),
      fontSize: 10,
      color: "black",
    },
  },
  link: {
    '& > *': {
      // backgroundColor: theme.palette.background.paper,
      margin: theme.spacing(1),
      fontSize: 10,
      color: "rgba(226,248,235,1)",
    },
  },
}));

export default function ButtonLink() {

  const classes = useStyles();

  let history = useHistory();

  function handleClick() {
    history.push("/event");
  }

  return (
    <div className={classes.root}>
      <Typography >Creating an event?</Typography>
      <Link
        variant="body2"
        onClick={() => handleClick()}
      >
        Click here
    </Link>
    </div>
  );
}