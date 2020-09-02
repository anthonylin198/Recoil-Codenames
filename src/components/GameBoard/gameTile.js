// Make a random call to api -- need to check no words are duplicated
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexgrow: 1,
    // minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
// Every time a game tile is generated we need to create an atom
export default function GameTile({ word }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {word}
          </Typography>
        </CardContent>

        {/* these nice looking buttons break it */}
        {/* <Button size="small">Vote</Button> */}

        <CardActions>
          <button>Vote</button>
          <button>Pick</button>
        </CardActions>
      </Card>
    </div>
  );
}
