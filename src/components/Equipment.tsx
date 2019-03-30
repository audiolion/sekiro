import * as React from 'react';
import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core';
import { AppState } from '../state/AppState';
import { Header } from './Header';
import { Stats } from './Stats';
import { ItemPages } from './ItemPages';
import { Item } from '../state/Item';
import { ActiveSpatialMeta } from '../lib/spatial/ActiveSpatialMeta';
import { useObserver } from 'mobx-react-lite';
import { ItemSlotTiles } from './ItemSlotTiles';

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
  ({ classes }: WithStyles<typeof styles>) =>
    useObserver(() => {
      const { equipment } = React.useContext(AppState.Context);
      return (
        <div className={classes.root}>
          <div className={classes.tools}>
            <Header>
              <Typography>Prosthetic Tools</Typography>
            </Header>
            <ItemSlotTiles
              slots={equipment.toolSlots}
              available={equipment.tools}
            />
          </div>
          <div className={classes.items}>
            <Header>
              <Typography>Quick Items</Typography>
            </Header>
            <ItemSlotTiles
              slots={equipment.itemSlots}
              available={equipment.items}
            />
          </div>
          <div className={classes.arts}>
            <Header>
              <Typography>Combat Arts</Typography>
            </Header>
            <ItemSlotTiles
              slots={equipment.artSlots}
              available={equipment.arts}
              tileProps={{
                size: 'large',
                variant: 'octagon'
              }}
            />
          </div>
          <div className={classes.jutsu}>
            <Header>
              <Typography>Ninjutsu</Typography>
            </Header>
            <ItemSlotTiles
              slots={equipment.ninjutsuSlots}
              available={equipment.ninjutsu}
              tileProps={{
                size: 'large',
                variant: 'octagon'
              }}
            />
          </div>
          <ActiveSpatialMeta type={Item}>
            {item => <ItemPages item={item} />}
          </ActiveSpatialMeta>
          <AppState.Context.Consumer>
            {({ stats }) => <Stats className={classes.stats} stats={stats} />}
          </AppState.Context.Consumer>
        </div>
      );
    })
);
