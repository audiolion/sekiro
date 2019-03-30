import * as React from 'react';
import { List } from './List';
import { ListItem } from './ListItem';
import { Typography } from '@material-ui/core';
import { Action } from '../lib/action/Action';
import { Row } from './Row';
import { Column } from './Column';
import { ItemPages } from './ItemPages';
import { ActiveSpatialMeta } from '../lib/spatial/ActiveSpatialMeta';
import { Item } from '../state/Item';
import { useObserver } from 'mobx-react-lite';

export type ItemSelectProps = {
  items: Item[];
  onSelected?: (selected: Item) => any;
};

export const ItemSelect = (props: ItemSelectProps) =>
  useObserver(() => {
    const { items, onSelected = () => {} } = props;
    return (
      <Row flex={1}>
        <Column flex={1}>
          <List>
            {items.map((item, index) => {
              const equipAction: Action = {
                input: 'A',
                name: <>Select</>,
                description: <>Select {item.name}</>,
                callback: () => onSelected(item)
              };
              return (
                <ListItem key={index} action={equipAction} meta={item}>
                  <Typography>{item.name}</Typography>
                </ListItem>
              );
            })}
          </List>
        </Column>
        <Column flex={1}>
          <ActiveSpatialMeta type={Item}>
            {item => <ItemPages item={item} />}
          </ActiveSpatialMeta>
        </Column>
      </Row>
    );
  });
