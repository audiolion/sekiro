import * as React from 'react';
import { SpatialNode } from './SpatialNode';
import { SpatialContext } from './SpatialContext';

export function useSpatial(
  ref: React.RefObject<SpatialNode>,
  onRefreshActive: (newIsActive: boolean) => any = () => {}
) {
  const getNode = () => ref.current!;
  const spatial = React.useContext(SpatialContext);
  const [isActive, setActive] = React.useState(false);
  const refreshActive = () => {
    const newIsActive = spatial.isActive(getNode());
    setActive(newIsActive);
    onRefreshActive(newIsActive);
  };
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
