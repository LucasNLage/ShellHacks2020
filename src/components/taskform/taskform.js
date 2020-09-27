import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DateAndTimePickers from '../datePicker/datePicker.js'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button';
import axios from "axios"
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import Appbar from "../appbar/appbar.js"


const utilStyles = makeStyles((theme) => ({
    fields: {
        '& > *': {

            background: "#F1F1F1",
            marginTop: '20px',
            marginBottom: '20px',
            // backgroundColor: "#F1F1F1",
            opacity: "0.90",

            // color: "#263238",
        },
    },
    date: {
        marginTop: '20px',
    },
    margin: {
        marginTop: '10px',
        marginBottom: '10px',
        width: '18ch',
        background: "#F1F1F1",
        opacity: "0.90",

    },
    title: {
        margin: '80px',
        fontSize: '30px',
        textAlign: "center",
    },
    button: {
        marginTop: '40px',
        backgroundColor: "#27AE60",

    },

}));


export default function EventRegistrationForm() {
    const utilStyle = utilStyles();
    const [description, setDescription] = useState(''); // '' is the initial state value
    const [taskInput, setTaskInput] = useState(''); // '' is the initial state value
    const [locationInput, setLocationInput] = useState(''); // '' is the initial state value
    const [maxVol, setMaxVol] = useState(''); // '' is the initial state value
    let res;
    let history = useHistory();

    function handleSubmit() {
        axios.post('/task', {
            name: taskInput,
            description: description,
            volunteer_limit: maxVol,
            task_location: locationInput,
            area_id: 1
        })
            .then(function (response) {
                console.log(response);
                history.push("/volunteerPage");
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <Appbar title="New Task Form"/>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                {/* <Grid item>
                    <p className={utilStyle.title}
                    >New Task</p>
                </Grid> */}
                <Grid item>
                    <TextField
                        className={utilStyle.margin}
                        value={taskInput}
                        onInput={e => setTaskInput(e.target.value)}
                        id="Task-name"
                        label="Task Name"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        className={utilStyle.margin}
                        id="description"
                        label="Description"
                        value={description}
                        onInput={e => setDescription(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        className={utilStyle.margin}
                        id="maxVol"
                        label="maxVol"
                        value={maxVol}
                        onInput={e => setMaxVol(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        className={utilStyle.margin}
                        id="location"
                        label="Location"
                        value={locationInput}
                        onInput={e => setLocationInput(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <Button
                        className={utilStyle.button}
                        onClick={() => { handleSubmit() }}>Submit</Button>
                </Grid>
                
            </Grid>
        </>
    );

}

