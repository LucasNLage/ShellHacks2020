import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import TaskCard from '../taskcard/taskcard.js'
import Grid from '@material-ui/core/Grid';

//TESTING HOME PAGE
export default function HomePage() {

    let history = useHistory()
    return (
        <div>
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
            >
                <Grid item spacing={10}>
                    <TaskCard />
                </Grid>
                <Grid item spacing={3}>
                    <TaskCard />
                </Grid>
                <Grid item spacing={3}>
                    <TaskCard />
                </Grid>
                <Grid item spacing={3}>
                    <TaskCard />
                </Grid>
            </Grid>
        </div>
    );
}