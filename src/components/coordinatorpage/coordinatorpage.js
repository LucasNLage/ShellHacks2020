import React from "react"
import TaskCard from '../taskcard/taskcard.js'
import Grid from '@material-ui/core/Grid';
import Appbar from "../appbar/appbar.js";

export default function VolunteerPage() {
    return (
        <div>
            <Appbar title="Coordinator" type="coordinator" />
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
            </Grid >
        </div>
    )

}
