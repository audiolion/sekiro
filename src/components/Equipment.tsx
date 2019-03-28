import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';

export const styles = () => ({
  root: {
    width: '100%',
    display: 'grid',
    gridColumnGap: '20px',
    gridRowGap: '20px',
    gridTemplate: `
      "tools tools arts page page"
      "items items jutsu page page"
    `
  },
  tools: {
    gridArea: 'tools'
  },
  items: {
    gridArea: 'items'
  },
  arts: {
    gridArea: 'arts'
  },
  jutsu: {
    gridArea: 'jutsu'
  },
  page: {
    gridArea: 'page'
  }
});

export const Equipment = withStyles(styles)(
  ({ classes }: WithStyles<typeof styles>) => (
    <div className={classes.root}>
      <div className={classes.tools}>Tools</div>
      <div className={classes.items}>Items</div>
      <div className={classes.arts}>Arts</div>
      <div className={classes.jutsu}>Jutsu</div>
      <div className={classes.page}>Page</div>
    </div>
  )
);
