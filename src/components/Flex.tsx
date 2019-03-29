import * as React from 'react';
import classNames from 'classnames';
import { createStyles, Omit, withStyles, WithStyles } from '@material-ui/core';

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
      style={{ flex, ...style }}
      className={classNames(classes[direction], className)}
      {...divProps}
    >
      {children}
    </div>
  )
);

export type RowProps = Omit<FlexProps, 'classes' | 'direction'>;

export const Row = (props: RowProps) => <Flex direction="row" {...props} />;

export type ColumnProps = Omit<FlexProps, 'classes' | 'direction'>;

export const Column = (props: ColumnProps) => (
  <Flex direction="column" {...props} />
);
