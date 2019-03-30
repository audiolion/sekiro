import * as React from 'react';
import { SpatialNode } from './SpatialNode';
import { Action } from '../action/Action';
import { ActionContext } from '../action/ActionContext';
import { useSpatial } from './useSpatial';

export function useActionSpatial<T>(
  ref: React.RefObject<SpatialNode>,
  action: Action
) {
  const actionStore = React.useContext(ActionContext);
  let unmount: () => any = () => {};
  return useSpatial(ref, isActive => {
    unmount();
    if (isActive) {
      unmount = actionStore.mount(action);
      actionStore.setHighlighted(action);
    } else if (action === actionStore.highlighted) {
      actionStore.removeHighlighted();
    }
  });
}
