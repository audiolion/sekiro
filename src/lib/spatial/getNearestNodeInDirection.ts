import { Bounds } from './Bounds';
import { Direction } from './Direction';

export function getNearestNodeInDirection(
  start: Bounds,
  candidates: Bounds[],
  direction: Direction
) {
  const getDelta = deltaFunctions[direction];
  const nearest = candidates
    .map(candidate => ({
      candidate,
      delta: getDelta(start, candidate)
    }))
    .filter(entry => entry.delta >= 0)
    .sort((a, b) => a.delta - b.delta);
  if (nearest.length) {
    return nearest[0].candidate;
  }
}

const deltaFunctions = {
  right: (a: Bounds, b: Bounds) => b.left - a.right,
  down: (a: Bounds, b: Bounds) => b.top - a.bottom,
  left: (a: Bounds, b: Bounds) => -(b.right - a.left),
  up: (a: Bounds, b: Bounds) => -(b.bottom - a.top)
};
