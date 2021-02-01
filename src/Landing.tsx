import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const fetch = require('node-fetch');

import * as config from './config.json';
console.log('host = ' + config.host);

const host = config.host;

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

  const url = 'http://' + host + ':3001/wakenas';
  const response = await fetch(url);
  const data = await response.text();

  console.log(data);
  // TODO add error handling https://github.com/node-fetch/node-fetch

}

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" onClick={wakeNas}  >
              wake nas
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
