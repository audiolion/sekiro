import { Size } from '../state/Size';

export const windowSizeBehavior = (onChange: (newSize: Size) => any) => {
  const emitNewSize = () => onChange(getViewportSize());
  emitNewSize();
  window.addEventListener('resize', emitNewSize);
  return () => window.removeEventListener('resize', emitNewSize);
};

const getViewportSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});
