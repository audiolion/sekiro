import * as React from 'react';
import { Typography, WithStyles, withStyles } from '@material-ui/core';
import { Header } from './Header';

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
      <div className={classes.tools}>
        <Header>
          <Typography>Prosthetic Tools</Typography>
        </Header>
      </div>
      <div className={classes.items}>
        <Header>
          <Typography>Quick Items</Typography>
        </Header>
      </div>
      <div className={classes.arts}>
        <Header>
          <Typography>Combat Arts</Typography>
        </Header>
      </div>
      <div className={classes.jutsu}>
        <Header>
          <Typography>Ninjutsu</Typography>
        </Header>
      </div>
      <div className={classes.page}>Page</div>
    </div>
  )
);
