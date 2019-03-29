import * as React from 'react';
import { Box } from './Box';
import { Typography } from '@material-ui/core';
import { Header } from './Header';
import { Row, RowProps } from './Row';
import { Column } from './Column';

export const Stats = (rowProps: RowProps) => (
  <Row {...rowProps}>
    <Box direction="row" flex={3}>
      <Box flex={5} />
      <Box flex={4}>
        <Row>
          <img src={require('../assets/unseen-aid-icon.png')} height={50} />
          <Column>
            <Typography>Unseen Aid</Typography>
            <Typography>30%</Typography>
          </Column>
        </Row>
      </Box>
    </Box>
    <Box direction="row" flex={3}>
      <Box flex={5} />
      <Box flex={6} />
    </Box>
    <Box flex={1} style={{ justifyContent: 'space-between' }}>
      <Box direction="row" style={{ justifyContent: 'space-between' }}>
        <img src={require('../assets/spirit-emblem-icon.png')} height={23} />
        <Typography>1/9 (0)</Typography>
      </Box>
      <Header>
        <Row align="space-between">
          <img src={require('../assets/money-icon.png')} height={23} />
          <Typography>362</Typography>
        </Row>
      </Header>
    </Box>
  </Row>
);
