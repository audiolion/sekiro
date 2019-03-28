import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';

export const styles = () => ({
  header: {
    background: 'rgba(0, 0, 0, 0.75)',
    padding: `5px 10px`
  }
});

export type HeaderProps = WithStyles<typeof styles> & React.ComponentProps<any>;

export const Header = withStyles(styles)(
  ({ classes, children }: HeaderProps) => (
    <header className={classes.header}>{children}</header>
  )
);
