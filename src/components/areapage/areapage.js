import React, { useState, useEffect } from "react"
import AreaCard from '../areacard/areacard.js';
import Grid from '@material-ui/core/Grid';
import Appbar from "../appbar/appbar.js";
import { connect } from "react-redux";
import { setAreas } from '../../redux/actions.js';
import { useHistory } from "react-router-dom";

function AreaPage(props) {
  const [areas, setAreas] = useState([]);
  let history = useHistory();

  useEffect(() => {
    if (props.areas) {
      setAreas(props.areas);
    }
  }, props.areas)

  return (
    <div>
      <Appbar title="Volunteer" />
      <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
      >
        {areas.map((area, index) =>
          <Grid item key={"area"+area.id}  onClick={() => history.push("/volunteer", {area_index: index}) }>
            <AreaCard name={area.name}/>
          </Grid>
        )}
      </Grid >
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    areas: state.areas
  }
}

const mapDispatchToProps = { areaAction: setAreas }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AreaPage)

