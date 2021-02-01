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
        <Grid item xs={3}>
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
