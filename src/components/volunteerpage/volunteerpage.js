import React, { useState } from "react"
import TaskCard from '../taskcard/taskcard.js'
import Grid from '@material-ui/core/Grid';
import Appbar from "../appbar/appbar.js";

export default function VolunteerPage() {

  let tasks = [{id: 0},{id: 1},{id: 2},{id: 3}]
  let taskObj = {};
  tasks.forEach((task) => taskObj[task.id] = false);

  const [selected, setSelected] = useState(taskObj);

  const handleSelect = (id) => {
    let newSelected = {...selected};

    if (selected[id]) {
      newSelected[id] = false;
      setSelected(newSelected);
    } else {
      for (const prop in newSelected) {
        newSelected[prop] = false;
      }
      newSelected[id] = true;
      setSelected(newSelected);
    }
  }



  return (
    <div>
      <Appbar type="volunteer" />
      <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
      >
        {tasks.map((task) => 
          <Grid item spacing={3}>
            <TaskCard selected={selected[task.id]} handleSelected={handleSelect} id={task.id}/>
          </Grid>
        )}
      </Grid >
    </div>
  )

}
