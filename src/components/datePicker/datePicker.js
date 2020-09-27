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

export default function DateAndTimePickers(props) {
  const classes = useStyles();
  const dateStr = props.title;
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label={dateStr}
          type="datetime-local"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          value={props.value}
          onInput={e => props.handleInputChange(e.target.value)}
        />
      </form>
    );
}
