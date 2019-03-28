import * as React from 'react';
import { useObserver } from 'mobx-react-lite';
import { CharacterMenu } from './CharacterMenu';
import { Screen } from './Screen';
import { AppState } from '../state/AppState';
import { Size } from '../state/Size';

const referenceSize = { width: 1920, height: 1080 };
const aspectRatio = referenceSize.width / referenceSize.height;

function createBoundsStyle(viewportSize: Size) {
  const scale = viewportSize.width / referenceSize.width;
  const transformedHeight = viewportSize.width / aspectRatio;
  const yOffset = (viewportSize.height - transformedHeight) / 2;
  return {
    transform: `translateY(${yOffset}px) scale(${scale})`,
    transformOrigin: 'left top',
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
