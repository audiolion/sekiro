import * as React from 'react';
import classNames from 'classnames';
import { Box, BoxProps } from './Box';
import { createStyles, Omit, WithStyles, withStyles } from '@material-ui/core';
import { Dock } from './Dock';
import { useActionSpatial } from '../lib/spatial/useActionSpatial';
import { SpatialMeta } from '../lib/spatial/SpatialMeta';
import { Action } from '../lib/action/Action';

export const styles = createStyles({
  listItem: {
    position: 'relative'
  },
  activeOverlay: {
    borderRadius: '5%',
    border: '10px solid orange'
  }
});

export type ListItemProps = Omit<BoxProps, 'classes'> &
  WithStyles<typeof styles> & {
    action?: Action;
    meta?: SpatialMeta;
  };

export const ListItem = withStyles(styles)(
  ({
    classes,
    children,
    className,
    action,
    meta,
    ...boxProps
  }: ListItemProps) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isActive = useActionSpatial(ref, action, meta);
    return (
      <Box
        innerRef={ref}
        className={classNames(classes.listItem, className)}
        {...boxProps}
      >
        {children}
        {isActive && <Dock className={classes.activeOverlay} />}
      </Box>
    );
  }
);

ListItem.displayName = 'ListItem';
