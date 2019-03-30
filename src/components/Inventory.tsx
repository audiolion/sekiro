import * as React from 'react';
import { List } from './List';
import { items } from '../assets/items';
import { ListItem } from './ListItem';
import { Typography } from '@material-ui/core';
import { Action } from '../lib/action/Action';
import { Row } from './Row';
import { Column } from './Column';
import { ItemPages } from './ItemPages';
import { ActiveSpatialMeta } from '../lib/spatial/ActiveSpatialMeta';
import { Item } from '../state/Item';

export const Inventory = () => (
  <Row flex={1}>
    <Column flex={1}>
      <List>
        {items.map((item, index) => {
          const equipAction: Action = {
            input: 'A',
            name: <>OK ({item.name})</>,
            description: 'Replace and confirm equipped items',
            callback: () => alert(item.name)
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
