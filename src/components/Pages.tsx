import * as React from 'react';
import { Button } from '@material-ui/core';
import { PageIcons } from './PageIcons';
import { Dock } from './Dock';
import { noop } from '../functions/noop';

export type PagesProps = React.PropsWithChildren<object> &
  Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & {
    value?: number;
    onChange?: (newIndex: number) => any;
  };

export const Pages = (props: PagesProps) => {
  const { children, value = 0, onChange = noop, ...divProps } = props;
  const childrenArray = React.Children.toArray(children);
  const currentPage = childrenArray[value];
  const changeToNextPage = () => onChange((value + 1) % childrenArray.length);
  return (
    <div {...divProps} style={{ position: 'relative' }}>
      {currentPage}
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
};
