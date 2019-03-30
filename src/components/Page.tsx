import * as React from 'react';
import classNames from 'classnames';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';

export const styles = createStyles({
  page: {
    background: `url(${require('../assets/page-background.jpg')})`
  }
});

export type PageProps = WithStyles<typeof styles> &
  React.HTMLAttributes<HTMLDivElement>;

export const Page = withStyles(styles)((props: PageProps) => {
  const { classes, className, children, ...divProps } = props;
  return (
    <div className={classNames(classes.page, className)} {...divProps}>
      {children}
    </div>
  );
});

Page.displayName = 'Page';
