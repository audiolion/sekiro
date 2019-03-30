import { InputId, InputState } from 'responsive-gamepad';
import { inputBehavior } from './inputBehavior';
import { ActionStore } from '../lib/action/ActionStore';

export const actionBehavior = (actionStore: ActionStore) =>
  inputBehavior(inputState => handleInput(inputState, actionStore));

function handleInput(state: InputState, actionStore: ActionStore) {
  const activeInputIds: InputId[] = [];
  for (const key in state) {
    const inputId = key as InputId;
    if (state[inputId]) {
      activeInputIds.push(inputId);
    }
  }
  actionStore.perform(activeInputIds);
}
