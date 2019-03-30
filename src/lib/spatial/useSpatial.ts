import * as React from 'react';
import { SpatialContext } from './SpatialContext';
import { SpatialMeta } from './SpatialMeta';

export function useSpatial(
  ref: React.RefObject<Element>,
  meta?: SpatialMeta,
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
    spatial.add(getNode(), meta);
    refreshActive();
    const unsubscribeFromChanges = spatial.subscribeToChanges(refreshActive);
    return () => {
      unsubscribeFromChanges();
      spatial.remove(getNode());
      onRefreshActive(false);
    };
  }, [meta]);
  return isActive;
}
