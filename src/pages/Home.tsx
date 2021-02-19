import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Chatbot } from "../pages/Chatbot/Chatbot";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

export function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <Chatbot />
      </Paper>
    </div>
  );
}
