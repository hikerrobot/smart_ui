import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const fetch = require('node-fetch');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

async function wakeNas() {

  const response = await fetch('http://localhost:3001/wakerig');
  const data = await response.text();

  console.log(data);
  // TODO add error handling https://github.com/node-fetch/node-fetch

}



export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" onClick={wakeNas}  >
              wake nas
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            xs=12
            <Button variant="contained" color="primary">
              b1
            </Button>
            <span>some more text</span>
          </Paper>
        </Grid>
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>textxs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>a lot of text xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            xs=3
            <Button variant="contained" color="primary">
              b1
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
