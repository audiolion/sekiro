import * as React from 'react';
import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core';
import { Header } from './Header';
import { Pages } from './Pages';
import { Page } from './Page';

export const styles = createStyles({
  root: {
    width: '100%',
    display: 'grid',
    gridColumnGap: '20px',
    gridRowGap: '20px',
    gridTemplateColumns: '2fr 1fr 2fr',
    gridTemplate: `
      "tools arts pages" 1fr
      "items jutsu pages" 1fr
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
  pages: {
    gridArea: 'pages',
    display: 'flex'
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
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
      <Pages className={classes.pages}>
        <Page className={classes.page}>
          <Header variant="doubleEdge">
            <Typography>Floating Passage</Typography>
          </Header>
          <Header variant="noEdge">
            <Typography>Spirit Emblem Cost</Typography>
          </Header>
          <Typography paragraph>
            Combat Art that unleashes repeated attacks, overwhelming enemies
            with flowing, dance-like movements.
          </Typography>
          <Typography paragraph>
            While an Ashina Combat Art, it was taught by an outsider, and as
            such is considered heretical.
            <br />
            The master of this technique crossed the Floating Passage and
            descended to Ashina.
            <br />
            Her name was Tomoe.
          </Typography>
        </Page>
      </Pages>
    </div>
  )
);
