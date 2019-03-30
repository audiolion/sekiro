import * as React from 'react';
import classNames from 'classnames';
import { Box, BoxProps } from './Box';
import { createStyles, Omit, WithStyles, withStyles } from '@material-ui/core';
import { Dock } from './Dock';
import { useActionSpatial } from '../lib/spatial/useActionSpatial';
import { SpatialMeta } from '../lib/spatial/SpatialMeta';
import { Action } from '../lib/action/Action';

export const variants = {
  square: {},
  octagon: {
    borderRadius: '50%'
  }
};

export const sizes = {
  small: {
    width: 40,
    height: 40
  },
  large: {
    width: 80,
    height: 80
  }
};

export const styles = createStyles({
  ...variants,
  ...sizes,
  tile: {
    position: 'relative'
  },
  activeOverlay: {
    borderRadius: '50%',
    border: '10px solid orange'
  }
});

export type TileVariant = keyof typeof variants;

export type TileSize = keyof typeof sizes;

export type TileProps = Omit<BoxProps, 'classes'> &
  WithStyles<typeof styles> & {
    size?: TileSize;
    variant?: TileVariant;
    action?: Action;
    meta?: SpatialMeta;
  };

export const Tile = withStyles(styles)(
  ({
    classes,
    children,
    size = 'small',
    variant = 'square',
    className,
    action,
    meta,
    ...boxProps
  }: TileProps) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isActive = useActionSpatial(ref, action, meta);
    return (
      <Box
        innerRef={ref}
        className={classNames(
          classes.tile,
          classes[variant],
          classes[size],
          className
        )}
        {...boxProps}
      >
        {children}
        {isActive && <Dock className={classes.activeOverlay} />}
      </Box>
    );
  }
);

Tile.displayName = 'Tile';
