import * as React from 'react';
import { Row, RowProps } from './Row';

export const Resurrections = (props: RowProps) => (
  <Row {...props}>
    <img
      src={require('../assets/resurrection-icon1.png')}
      width={30}
      height={30}
    />
    <img
      src={require('../assets/resurrection-icon1.png')}
      width={30}
      height={30}
    />
    <img
      src={require('../assets/resurrection-icon2.png')}
      width={30}
      height={30}
    />
  </Row>
);
