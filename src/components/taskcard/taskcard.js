import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 10,
    marginBottom: 10,
    background: "#add8e6"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  fab: {
    marginLeft: 'auto',
  }
});

export default function SimpleCard(props) {

  const [selected, setSelected] = useState(false)
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  function cardSelect() {
    let temp = selected;
    setSelected(!temp);
    console.log("selected: ", selected);
  }

  return (
    <>
      {selected
        ?
        <Card className={classes.root} elevation={8} onClick={() => { cardSelect() }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              benevolent
            </Typography>
            <Typography variant="body2" component="p">
              "other card"
            </Typography>
            <Typography variant="body2" component="p">
              "other card"
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Typography color="textSecondary">
                  location
                </Typography>
              </Grid>
              <Grid item xs={8}>
              </Grid>
              <Grid item xs={2}>
                <Typography color="textSecondary">
                  3/5
                </Typography>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
        :
        <Card className={classes.root} onClick={() => { cardSelect() }} >
          <CardContent>
            <Typography variant="h5" component="h2">
              benevolent
            </Typography>
            <Typography variant="body2" component="p">
              "place holder for task"
            </Typography>
            <Typography variant="body2" component="p">
              "place holder for task"
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Typography color="textSecondary">
                  location
                </Typography>
              </Grid>
              <Grid item xs={8}>
              </Grid>
              <Grid item xs={2}>
                <Typography color="textSecondary">
                  3/5
                </Typography>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      }
    </>
  );
}

    // title
    // location
