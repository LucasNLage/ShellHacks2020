import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import TaskCard from '../taskcard/taskcard.js'
import Grid from '@material-ui/core/Grid';
import Appbar from "../appbar/appbar.js";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { connect } from "react-redux";
import { setAreas } from '../../redux/actions.js';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
  },
  button: {
    marginTop: '40px',
    width: '110px',
    height: '40px',
    backgroundColor: "#27AE60",
    color: '#FFFFFF'
  },
}));

function AccessCodePage(props) {
  const classes = useStyles();
  const location = useLocation();
  let history = useHistory();
  const [accessCode, setAccessCode] = useState("");
  const [fullName, setFullName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Access Code:", accessCode);
    console.log("Full Name:", fullName);

    axios.get('/event/' + location.state.role + "/" + accessCode)
      .then((response) => {
        console.log("Reponse:", response);
        props.areaAction(response.data.areas);
        history.push("/areas");
      })
      .catch((error) => {
        console.log("Get Event Error:", error);
      })
  }
  
    return (
      <>
        <Appbar title={location.state.role} />
          <form onSubmit={handleSubmit}>
          <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.root}
                spacing={4}
          >
            <Grid item>
              <Typography variant="h4" component="h3" align="center">
                <strong>Access Code</strong>
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                required
                id="filled-bare"
                placeholder={"Enter Full Name"}
                margin="normal"
                variant="filled"
                onChange={(e)=> setFullName(e.target.value)}
               />
            </Grid>
            <Grid item>
              <TextField
                required
                id="filled-bare"
                placeholder={location.state.role+" Access Code"}
                margin="normal"
                variant="filled"
                onChange={(e)=> setAccessCode(e.target.value)}
               />
            </Grid>
            <Grid>
            <Button className={classes.button} type="submit">
              Submit
            </Button>
          
            </Grid>
          </Grid >
          </form>
      </>
    )

}
const mapDispatchToProps = { areaAction: setAreas }


export default connect(
  null,
  mapDispatchToProps
)(AccessCodePage)
