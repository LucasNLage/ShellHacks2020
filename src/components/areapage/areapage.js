import React, { useState } from "react"
import AreaCard from '../areacard/areacard.js';
import Grid from '@material-ui/core/Grid';
import Appbar from "../appbar/appbar.js";

export default function AreaPage() {

  let areas = [{id: 0, name: "Area 1"},{id: 1, name: "Area 2"},{id: 2, name: "Area 3"}]


  return (
    <div>
      <Appbar type="volunteer" />
      <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
      >
        {areas.map((area) =>
          <Grid item spacing={3}>
            <AreaCard name={area.name}/>
          </Grid>
        )}
      </Grid >
    </div>
  )

}
