import * as React from 'react';
import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core';

const aspectRatio = 1920 / 1080;
export const styles = createStyles({
  container: {
    width: '100%',
    height: `${(1 / aspectRatio) * 100}vw`,
    background: 'tomato',
    padding: `35px 50px`,
    display: 'flex',
    margin: 'auto'
  },
  content: {
    display: 'flex',
    flex: 1,
    background: 'skyblue'
  }
});

export const Screen = withStyles(styles)(
  ({ classes }: WithStyles<typeof styles>) => (
    <div className={classes.container}>
      <div className={classes.content}>
        <Typography>Hehe</Typography>
      </div>
    </div>
  )
);
