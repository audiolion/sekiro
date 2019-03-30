import { inputBehavior, InputState } from './inputBehavior';
import { Spatial } from '../lib/spatial/Spatial';
import { Direction } from '../lib/spatial/Direction';

export const controlBehavior = (nav: Spatial) =>
  inputBehavior(inputState => handleInput(inputState, nav));

function handleInput(state: InputState, nav: Spatial) {
  const direction = getDirectionForInputState(state);
  if (direction) {
    nav.move(direction);
  }
}

function getDirectionForInputState(
  inputState: InputState
): Direction | undefined {
  if (inputState.DPAD_DOWN) {
    return 'down';
  }
  if (inputState.DPAD_RIGHT) {
    return 'right';
  }
  if (inputState.DPAD_LEFT) {
    return 'left';
  }
  if (inputState.DPAD_UP) {
    return 'up';
  }
}
