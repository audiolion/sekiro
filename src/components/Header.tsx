import * as React from 'react';
import { default as classNames } from 'classnames';
import { Theme, WithStyles, withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const variants = (theme: Theme) => ({
  noEdge: {
    background: fade(theme.palette.common.black, 0.75)
  },
  singleEdge: {
    background: `linear-gradient(to right, rgba(0,0,0,1) 0%,rgba(125,185,232,0) 100%)`
  },
  doubleEdge: {
    background: `linear-gradient(to right, rgba(0,0,0,1) 0%,rgba(0,0,0,0.25) 50%,rgba(0,0,0,1) 100%)`,
    textAlign: 'center'
  } as CSSProperties
});

const styles = (theme: Theme) => ({
  header: {
    padding: `5px 10px`,
    marginBottom: 10
  },
  ...variants(theme)
});

export type HeaderVariant = keyof ReturnType<typeof variants>;

export type HeaderProps = WithStyles<typeof styles> &
  React.PropsWithChildren<{
    variant?: HeaderVariant;
  }>;

export const Header = withStyles(styles)(
  ({ classes, children, variant = 'singleEdge' }: HeaderProps) => (
    <header className={classNames(classes.header, classes[variant])}>
      {children}
    </header>
  )
);
