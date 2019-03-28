import * as React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';

export const styles = createStyles({
  page: {
    background: `url(${require('../assets/page-background.jpg')})`
  }
});

export type PageProps = WithStyles<typeof styles> &
  React.HTMLAttributes<HTMLDivElement>;

export const Page = withStyles(styles)(({ classes, children }: PageProps) => (
  <div className={classes.page}>{children}</div>
));
