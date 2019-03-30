import * as React from 'react';
import { AppState } from '../state/AppState';
import { Button, Typography } from '@material-ui/core';
import { useSpatial } from '../lib/spatial/useSpatial';

export const SpatialTest = () => {
  const [tileCount, setTileCount] = React.useState(0);
  const tiles: React.ReactNode[] = [];
  for (let n = 1; n <= tileCount; n += 1) {
    tiles.push(
      <Tile key={n}>
        <Typography>Tile {n}</Typography>
      </Tile>
    );
  }
  const less = () => setTileCount(Math.max(tileCount - 1, 0));
  const more = () => setTileCount(tileCount + 1);
  return (
    <>
      {tiles}
      <Button onClick={less}>Less</Button>
      <Button onClick={more}>More</Button>
      <AppState.Context.Consumer>
        {({ nav }) => (
          <>
            <Button onClick={() => nav.move('up')}>Up</Button>
            <Button onClick={() => nav.move('right')}>Right</Button>
            <Button onClick={() => nav.move('down')}>Down</Button>
            <Button onClick={() => nav.move('left')}>Left</Button>
          </>
        )}
      </AppState.Context.Consumer>
    </>
  );
};

const Tile = ({ children }: React.PropsWithChildren<object>) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isActive = useSpatial(ref);
  return (
    <div
      ref={ref}
      style={{ backgroundColor: isActive ? 'green' : 'red', marginBottom: 10 }}
    >
      {children}
    </div>
  );
};
