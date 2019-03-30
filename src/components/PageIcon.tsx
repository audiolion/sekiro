import * as React from 'react';
import classNames from 'classnames';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';

export const styles = createStyles({
  pageIcon: {
    width: 25,
    height: 30,
    boxShadow: `0px 0px 5px 1px rgba(0,0,0,0.75)`,
    background: 'gray'
  },
  active: {
    background: 'white'
  }
});

export type PageIconProps = WithStyles<typeof styles> &
  React.HTMLAttributes<HTMLDivElement> & {
    active?: boolean;
  };

export const PageIcon = withStyles(styles)((props: PageIconProps) => {
  const { className, classes, active, ...divProps } = props;
  return (
    <div
      {...divProps}
      className={classNames(classes.pageIcon, className, {
        [classes.active]: active
      })}
    />
  );
});

PageIcon.displayName = 'PageIcon';
