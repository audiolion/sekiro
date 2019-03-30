import * as React from 'react';
import { TabbedContent } from './TabbedContent';
import { Equipment } from './Equipment';
import { SpatialTest } from './SpatialTest';
import { useAction } from '../lib/action/useAction';
import { ActionHUD } from './ActionHUD';
import { ItemSelect } from './ItemSelect';
import { AppState } from '../state/AppState';
import { useObserver } from 'mobx-react-lite';

export const CharacterMenu = () => {
  useAction({
    input: 'B',
    name: 'Close'
  });

  return (
    <>
      <CharacterMenuContent />
      <ActionHUD />
    </>
  );
};

const CharacterMenuContent = () =>
  useObserver(() => {
    const { itemSelect } = React.useContext(AppState.Context);
    if (itemSelect.isPicking) {
      return (
        <ItemSelect
          items={itemSelect.available!}
          onSelected={selected => itemSelect.end(selected)}
        />
      );
    }
    return (
      <TabbedContent
        tabs={[
          { label: 'Equipment', content: Equipment },
          { label: 'Spatial Test', content: SpatialTest }
        ]}
      />
    );
  });
