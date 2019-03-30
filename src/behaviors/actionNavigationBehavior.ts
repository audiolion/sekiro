import { ActionStore } from '../lib/action/ActionStore';
import { Spatial } from '../lib/spatial/Spatial';

export const actionNavigationBehavior = (
  actions: ActionStore,
  nav: Spatial
) => {
  const stoppers = [
    actions.mount({
      input: 'DPAD_UP',
      name: 'up',
      description: 'Move up',
      callback: () => nav.move('up')
    }),
    actions.mount({
      input: 'DPAD_RIGHT',
      name: 'right',
      description: 'Move right',
      callback: () => nav.move('right')
    }),
    actions.mount({
      input: 'DPAD_DOWN',
      name: 'down',
      description: 'Move down',
      callback: () => nav.move('down')
    }),
    actions.mount({
      input: 'DPAD_LEFT',
      name: 'left',
      description: 'Move left',
      callback: () => nav.move('left')
    })
  ];
  return () => stoppers.forEach(stop => stop());
};
