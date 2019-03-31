import * as React from 'react';
import { Vector } from '../lib/spatial/Vector';
import { travelCost } from '../lib/spatial/getNearestNodeInDirection';

export const TravelTest = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [a] = React.useState(new Vector(100, 100));
  const [b, setB] = React.useState(new Vector(50, 50));
  const [desiredAngle, setDesiredAngle] = React.useState(0);
  return (
    <>
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          background: 'white',
          color: 'black',
          width: 200,
          height: 200
        }}
        onMouseMove={e => setB(new Vector(e.pageX, e.pageY))}
      >
        <div
          style={{
            position: 'absolute',
            background: 'green',
            width: 5,
            height: 5,
            left: a.x,
            top: a.y
          }}
        />
        <div
          style={{
            position: 'absolute',
            background: 'red',
            width: 5,
            height: 5,
            left: b.x,
            top: b.y
          }}
        />
      </div>
      <div>
        Desired Angle:{' '}
        <input
          value={desiredAngle.toString()}
          onChange={e => setDesiredAngle(parseFloat(e.target.value) || 0)}
        />
        <br />
        Angle: {a.angle(b)}
        <br />
        Angle Delta: {Math.abs(desiredAngle - a.angle(b))}
        <br />
        Distance: {a.distance(b)}
        <br />
        Travel Cost: {travelCost([a, b], desiredAngle)}
        <br />
      </div>
    </>
  );
};
