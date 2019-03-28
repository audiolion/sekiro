import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core';

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
    background: `url(${require('../assets/screen-background.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    padding: `22px 30px`
  }
});

export const Screen = withStyles(styles)(
  ({
    classes,
    children
  }: WithStyles<typeof styles> & React.ComponentProps<any>) => (
    <div className={classes.container}>
      <div className={classes.content}>{children}</div>
    </div>
  )
);
