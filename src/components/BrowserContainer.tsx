import React, { ReactNode } from "react";
import { createStyles, makeStyles, Theme, Paper } from "@material-ui/core";
import {
  BrowserView,
} from "react-device-detect";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center"
    },
    content: {
      maxWidth: 1200,
      minWidth: 1200
    }
  })
);

interface Props {
  children: ReactNode;
}

export function BrowserContainer(props: Props) {
  const classes = useStyles();

  return (
    <BrowserView>
      <Paper className={classes.root} elevation={0}>
        <div className={classes.content}>{props.children}</div>
      </Paper>
    </BrowserView>
  );
}
