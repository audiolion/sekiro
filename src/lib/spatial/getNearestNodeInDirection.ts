import { compose, map, filter, transduce, transformer } from 'transducers.js';
import { Bounds } from './Bounds';
import { Direction } from './Direction';
import { Vector } from './Vector';

type CandidateEntry = {
  candidate: Bounds | null;
  cost: number;
};

export function getNearestNodeInDirection(
  start: Bounds,
  candidates: Bounds[],
  direction: Direction
) {
  const nearestTransform = compose(
    map((candidate: Bounds) => ({
      candidate,
      cost: travelCost(getPoints(start, candidate), directionAngle)
    })),
    filter((entry: CandidateEntry) => entry.cost >= 0)
  );

  const nearestCandidate = (a: CandidateEntry, b: CandidateEntry) =>
    a.cost < b.cost ? a : b;

  const getPoints = pointFunctions[direction];
  const directionAngle = directionAngles[direction];

  const { candidate } = transduce(
    candidates,
    nearestTransform,
    transformer(nearestCandidate),
    { candidate: null, cost: Infinity }
  );
  if (candidate) {
    return candidate;
  }
}

const pointFunctions = {
  right: (a: Bounds, b: Bounds) => [a.centerRight, b.centerLeft],
  down: (a: Bounds, b: Bounds) => [a.centerBottom, b.centerTop],
  left: (a: Bounds, b: Bounds) => [a.centerLeft, b.centerRight],
  up: (a: Bounds, b: Bounds) => [a.centerTop, b.centerBottom]
};

const directionAngles = {
  right: 0,
  down: Math.PI / 2,
  left: Math.PI,
  up: -Math.PI / 2
};

export function travelCost([a, b]: Vector[], desiredAngle: number): number {
  const distance = a.distance(b);
  const angle = a.angle(b);
  const angleDelta = Math.abs(desiredAngle - angle);
  if (angleDelta >= Math.PI / 2) {
    return -1;
  }
  const anglePenalty = angleDelta / (Math.PI / 2);
  return distance + distance * anglePenalty;
}
