import React from "react"
import TaskCard from '../taskcard/taskcard.js'
import Grid from "@material-ui/core"


export default function VolunteerPage() {
    return (
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

    )

}
