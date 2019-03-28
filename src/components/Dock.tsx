import * as React from 'react';
import classNames from 'classnames';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';

export const positions = () =>
  createStyles({
    bottomRight: {
      position: 'absolute',
      bottom: 0,
      right: 0
    }
  });

export type DockPosition = keyof ReturnType<typeof positions>;

export type DockProps = WithStyles<typeof positions> &
  React.HTMLAttributes<HTMLDivElement> & {
    position: DockPosition;
  };

export const Dock = withStyles(positions)(
  ({ classes, position, children, className, ...divProps }: DockProps) => (
    <div className={classNames(classes[position], className)} {...divProps}>
      {children}
    </div>
  )
);
