import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import EventRegistrationForm from '../eventRegistration/eventRegistration.js'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(1),
        fontSize: 10,
        // color: "black",
      },
    },
  }));

export default function ButtonLink() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
    <p>Creating an event?</p>
    <Link
      component="button"
      variant="body2"
    //   onClick={}
    >
      Click here
    </Link>
    </div>
  );
}