import * as React from 'react';
import { ItemSlots } from '../state/ItemSlots';
import { Item } from '../state/Item';
import { Tile, TileProps } from './Tile';
import { Row, RowProps } from './Row';
import { Action } from '../lib/action/Action';
import { Omit } from '@material-ui/core';
import { useObserver } from 'mobx-react-lite';
import { AppState } from '../state/AppState';

export type ItemSlotTilesProps = Omit<RowProps, 'classes'> & {
  slots: ItemSlots;
  available: Item[];
  tileProps?: Partial<TileProps>;
};

export const ItemSlotTiles = (props: ItemSlotTilesProps) => {
  const { slots, available, tileProps, ...rowProps } = props;
  const { itemSelect } = React.useContext(AppState.Context);
  return useObserver(() => (
    <Row {...rowProps}>
      {slots.list.map((item, index) => {
        const removeAction: Action = {
          input: 'X',
          name: 'Remove',
          description: 'Remove item from slot',
          callback: () => slots.remove(index)
        };
        const selectAction: Action = {
          input: 'A',
          name: 'Add',
          description: 'Add item to slot',
          callback: () =>
            itemSelect.start(available, selected =>
              slots.store(selected, index)
            )
        };
        const action = item ? removeAction : selectAction;
        return (
          <Tile key={index} meta={item} action={action} {...tileProps}>
            {item && item.name}
          </Tile>
        );
      })}
    </Row>
  ));
};
