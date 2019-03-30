import * as React from 'react';
import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core';
import { AppState } from '../state/AppState';
import { Header } from './Header';
import { Pages } from './Pages';
import { Page } from './Page';
import { Stats } from './Stats';
import { Row } from './Row';
import { Tile } from './Tile';

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
      "stats stats stats" 100px
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
    gridArea: 'pages'
  },
  stats: {
    gridArea: 'stats'
  }
});

export const Equipment = withStyles(styles)(
  ({ classes }: WithStyles<typeof styles>) => {
    const [pageIndex, setPageIndex] = React.useState(0);
    return (
      <div className={classes.root}>
        <div className={classes.tools}>
          <Header>
            <Typography>Prosthetic Tools</Typography>
          </Header>
          <Row>
            <Tile size="large">Test</Tile>
            <Tile size="large">Foo</Tile>
            <Tile size="large">Bar</Tile>
            <Tile size="large">Baz</Tile>
          </Row>
        </div>
        <div className={classes.items}>
          <Header>
            <Typography>Quick Items</Typography>
          </Header>
          <Row>
            <Tile size="small" />
            <Tile size="small" />
            <Tile size="small" />
            <Tile size="small" />
            <Tile size="small" />
          </Row>
        </div>
        <div className={classes.arts}>
          <Header>
            <Typography>Combat Arts</Typography>
          </Header>
          <Tile size="large" variant="octagon" />
        </div>
        <div className={classes.jutsu}>
          <Header>
            <Typography>Ninjutsu</Typography>
          </Header>
          <Tile size="large" variant="octagon" />
        </div>
        <Pages
          className={classes.pages}
          value={pageIndex}
          onChange={setPageIndex}
        >
          <Page>
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
          <Page>
            <Header variant="doubleEdge">
              <Typography>Ornamental Letter</Typography>
            </Header>
            <Header variant="noEdge">
              <Typography>Number Held</Typography>
            </Header>
            <Header variant="noEdge">
              <Typography>In Storage</Typography>
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
        <AppState.Context.Consumer>
          {({ stats }) => <Stats className={classes.stats} stats={stats} />}
        </AppState.Context.Consumer>
      </div>
    );
  }
);
