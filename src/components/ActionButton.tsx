import * as React from 'react';
import { Row } from './Row';
import { Typography } from '@material-ui/core';
import { Action } from '../lib/action/Action';

export const ActionButton = ({ input, name }: Action) => (
  <Row>
    <Typography noWrap>{input}:</Typography>
    <Typography noWrap>{name}</Typography>
  </Row>
);
