import * as React from 'react';
import classNames from 'classnames';
import { Row, RowProps } from './Row';
import { Omit, WithStyles, withStyles } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export const styles = () => ({
  container: {
    minHeight: 12,
    border: '1px solid grey',
    background: 'black'
  },
  fill: {
    height: '100%'
  }
});

export type ProgressBarProps = WithStyles<typeof styles> &
  Omit<RowProps, 'classes'> & {
    value?: number;
    color?: CSSProperties['backgroundColor'];
  };

export const ProgressBar = withStyles(styles)(
  ({ classes, color, value = 0, className, ...rowProps }: ProgressBarProps) => (
    <Row className={classNames(classes.container, className)} {...rowProps}>
      <div
        style={{ width: `${value * 100}%`, backgroundColor: color }}
        className={classes.fill}
      />
    </Row>
  )
);
