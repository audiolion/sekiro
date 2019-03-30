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
  return useSpatial(ref, isActive => {
    if (isActive) {
      actionStore.mount(action);
    } else {
      actionStore.unmount(action);
    }
  });
}
