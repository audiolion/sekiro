import * as React from 'react';
import { SpatialNode } from './SpatialNode';
import { SpatialContext } from './SpatialContext';

export function useSpatial(ref: React.RefObject<SpatialNode>) {
  const getNode = () => ref.current!;
  const spatial = React.useContext(SpatialContext);
  const [isActive, setActive] = React.useState(false);
  const refreshActive = () => setActive(spatial.isActive(getNode()));
  React.useEffect(() => {
    spatial.add(getNode());
    refreshActive();
    const unsubscribeFromChanges = spatial.subscribeToChanges(refreshActive);
    return () => {
      unsubscribeFromChanges();
      spatial.remove(getNode());
    };
  }, []);
  return isActive;
}
