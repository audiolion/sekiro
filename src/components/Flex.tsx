import * as React from 'react';
import classNames from 'classnames';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';

export const styles = createStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    '& > *:not(:last-child)': {
      marginRight: 10
    }
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    '& > *:not(:last-child)': {
      marginBottom: 10
    }
  }
});

export type FlexDirection = keyof typeof styles;

export type FlexProps = WithStyles<typeof styles> &
  React.HTMLAttributes<HTMLDivElement> & {
    direction?: FlexDirection;
    flex?: number;
  };

export const Flex = withStyles(styles)(
  ({
    classes,
    direction = 'row',
    children,
    className,
    style,
    flex,
    ...divProps
  }: FlexProps) => (
    <div
      {...divProps}
      className={classNames(classes[direction], className)}
      style={{ flex, ...style }}
    >
      {children}
    </div>
  )
);
