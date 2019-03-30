import * as React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { PageIcon } from './PageIcon';
import { noop } from '../functions/noop';

export const styles = createStyles({
  pageIcons: {
    display: 'flex'
  }
});

export type PageIconsProps = WithStyles<typeof styles> & {
  value?: number;
  count?: number;
  onChange?: (newIndex: number) => any;
};

export const PageIcons = withStyles(styles)((props: PageIconsProps) => {
  const { value = 0, count = 1, onChange = noop, classes } = props;
  let indicators: React.ReactNode = null;
  for (let i = 0; i < count; i += 1) {
    indicators = (
      <>
        {indicators}
        <PageIcon active={i === value} onClick={() => onChange(i)} />
      </>
    );
  }
  return <div className={classes.pageIcons}>{indicators}</div>;
});

PageIcons.displayName = 'PageIcons';
