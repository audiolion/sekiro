import * as React from 'react';
import { default as classNames } from 'classnames';
import { createStyles, WithStyles, withStyles } from '@material-ui/core';

export const styles = createStyles({
  container: {
    width: '100%',
    height: '100%',
    background: 'tomato',
    padding: `35px 50px`,
    display: 'flex'
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    background: `url(${require('../assets/screen-background.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    padding: `22px 30px`
  }
});

export type ScreenProps = WithStyles<typeof styles> &
  React.HTMLAttributes<HTMLDivElement>;

export const Screen = withStyles(styles)(
  ({ classes, children, className, ...divProps }: ScreenProps) => (
    <div className={classNames(classes.container, className)} {...divProps}>
      <div className={classes.content}>{children}</div>
    </div>
  )
);
