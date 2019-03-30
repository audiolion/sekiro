import * as React from 'react';
import classNames from 'classnames';
import {
  createStyles,
  Omit,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Flex, FlexProps } from './Flex';

export const styles = (theme: Theme) =>
  createStyles({
    box: {
      background: fade(theme.palette.common.black, 0.5),
      padding: 10
    }
  });

export type BoxProps = WithStyles<typeof styles> & Omit<FlexProps, 'classes'>;

export const Box = withStyles(styles)(
  React.forwardRef<HTMLDivElement, BoxProps>(
    ({ classes, children, className, ...divProps }, ref) => (
      <Flex
        innerRef={ref}
        direction="column"
        className={classNames(classes.box, className)}
        {...divProps}
      >
        {children}
      </Flex>
    )
  )
);

Box.displayName = 'Box';
