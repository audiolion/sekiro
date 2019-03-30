import { Omit, Typography } from '@material-ui/core';
import { Pages, PagesProps } from './Pages';
import * as React from 'react';
import { Page } from './Page';
import { Header } from './Header';
import { Item } from '../state/Item';

export type ItemPagesProps = Omit<PagesProps, 'classes'> & {
  item?: Item;
};

export const ItemPages = ({ item, ...pagesProps }: ItemPagesProps) => {
  const [pageIndex, setPageIndex] = React.useState(0);

  const pages = [];

  if (item) {
    pages.push(
      <Page key="first">
        <Header variant="doubleEdge">
          <Typography>{item.name}</Typography>
        </Header>
        <Header variant="noEdge">
          <Typography>Spirit Emblem Cost: {item.emblemCost}</Typography>
        </Header>
        <Header variant="noEdge">
          <Typography>Number Held: {item.numberHeld}</Typography>
        </Header>
        <Header variant="noEdge">
          <Typography>In Storage: {item.inStorage}</Typography>
        </Header>
        {item.description}
      </Page>
    );

    if (item.description2) {
      pages.push(
        <Page key="second">
          <Header variant="doubleEdge">
            <Typography>{item.name}</Typography>
          </Header>
          {item.description2}
        </Page>
      );
    }
  } else {
    pages.push(<Page key="empty" />);
  }

  return (
    <Pages value={pageIndex} onChange={setPageIndex} {...pagesProps}>
      {pages}
    </Pages>
  );
};
