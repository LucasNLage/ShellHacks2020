import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import TaskCard from '../taskcard/taskcard.js'
import Grid from '@material-ui/core/Grid';
import Appbar from "../appbar/appbar.js";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
}));

export default function AccessCodePage(props) {
  const classes = useStyles();
    return (
      <>
        <Appbar type="coordinator" />
          <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.root}
                spacing={4}
          >
            <Grid item spacing={10}>
              <Typography variant="h4" component="h3" align="center">
                <strong>Access Code</strong>
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="filled-bare"
                className={classes.textField}
                defaultValue={"Enter Full Name"}
                margin="normal"
                variant="filled"
               />
            </Grid>
            <Grid item>
              <TextField
                id="filled-bare"
                className={classes.textField}
                defaultValue={props.option}
                margin="normal"
                variant="filled"
               />
            </Grid>
            <Grid>
            <Button>
                 Submit
               </Button>
            </Grid>
          </Grid >
      </>
    )

}
