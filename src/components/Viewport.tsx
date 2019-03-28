import * as React from 'react';
import { useObserver } from 'mobx-react-lite';
import { CharacterMenu } from './CharacterMenu';
import { Screen } from './Screen';
import { AppState } from '../state/AppState';
import { Size } from '../state/Size';

const referenceSize = { width: 1920, height: 1080 };

function createBoundsStyle(viewportSize: Size) {
  const scale = viewportSize.width / referenceSize.width;
  return {
    margin: 'auto',
    transform: `scale(${scale})`,
    transformOrigin: 'left',
    ...referenceSize
  };
}

export const Viewport = () =>
  useObserver(() => {
    const { viewportSize } = React.useContext(AppState.Context);
    return (
      <div style={createBoundsStyle(viewportSize)}>
        <Screen>
          <CharacterMenu />
        </Screen>
      </div>
    );
  });
