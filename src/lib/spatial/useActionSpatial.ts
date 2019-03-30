import * as React from 'react';
import { Action } from '../action/Action';
import { ActionContext } from '../action/ActionContext';
import { useSpatial } from './useSpatial';
import { SpatialMeta } from './SpatialMeta';

export function useActionSpatial<T>(
  ref: React.RefObject<Element>,
  action: Action,
  meta?: SpatialMeta
) {
  const actionStore = React.useContext(ActionContext);
  let unmount: () => any = () => {};
  return useSpatial(ref, meta, isActive => {
    unmount();
    if (isActive) {
      unmount = actionStore.mount(action);
      actionStore.setHighlighted(action);
    } else if (action === actionStore.highlighted) {
      actionStore.removeHighlighted();
    }
  });
}
