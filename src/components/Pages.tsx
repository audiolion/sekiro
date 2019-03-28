import * as React from 'react';
import { default as classNames } from 'classnames';
import {
  Button,
  createStyles,
  Omit,
  WithStyles,
  withStyles
} from '@material-ui/core';
import { PageIcons } from './PageIcons';
import { Dock } from './Dock';
import { noop } from '../functions/noop';

const styles = createStyles({
  pages: {
    display: 'flex',
    position: 'relative'
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  }
});

export type PagesProps = WithStyles<typeof styles> &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'> & {
    value?: number;
    onChange?: (newIndex: number) => any;
    children: React.ReactElement[];
  };

export const Pages = withStyles(styles)((props: PagesProps) => {
  const {
    children,
    value = 0,
    onChange = noop,
    classes,
    className,
    ...divProps
  } = props;
  const childrenArray = React.Children.toArray(children);
  const currentPage = childrenArray[value];
  const currentPageWithStyle = React.cloneElement(currentPage, {
    ...currentPage.props,
    className: classNames(classes.page, currentPage.props.className)
  });
  const changeToNextPage = () => onChange((value + 1) % childrenArray.length);
  return (
    <div {...divProps} className={classNames(classes.pages, className)}>
      {currentPageWithStyle}
      <Dock style={{ display: 'flex' }} position="bottomRight">
        <Button onClick={changeToNextPage}>Toggle</Button>
        <PageIcons
          value={value}
          count={childrenArray.length}
          onChange={onChange}
        />
      </Dock>
    </div>
  );
});
