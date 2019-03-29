import * as React from 'react';
import { Box } from './Box';
import { Typography } from '@material-ui/core';
import { Header } from './Header';
import { Row, RowProps } from './Row';
import { Column } from './Column';
import { SkillProgressBar } from './SkillProgressBar';
import { HealthBar } from './HealthBar';
import { Resurrections } from './Resurrections';
import { StatsStore } from '../state/StatsStore';

export type StatsProps = RowProps & {
  stats: StatsStore;
};

export const Stats = ({ stats, ...rowProps }: StatsProps) => (
  <Row {...rowProps}>
    <Box direction="row" flex={3}>
      <Box flex={5}>
        <Resurrections />
        <HealthBar value={stats.health} />
      </Box>
      <Box flex={4}>
        <Row>
          <img src={require('../assets/unseen-aid-icon.png')} height={50} />
          <Column>
            <Typography>Unseen Aid</Typography>
            <Typography>{stats.unseenAid}%</Typography>
          </Column>
        </Row>
      </Box>
    </Box>
    <Box direction="row" flex={3}>
      <Box flex={5}>
        <Row flex={1}>
          <img src={require('../assets/vitality-icon.png')} height={23} />
          <Row flex={1} align="space-between">
            <Typography>Vitality</Typography>
            <Typography>{stats.vitality}</Typography>
          </Row>
        </Row>
        <Row flex={1}>
          <img src={require('../assets/attack-icon.png')} height={23} />
          <Row flex={1} align="space-between">
            <Typography>Attack</Typography>
            <Typography>{stats.attack}</Typography>
          </Row>
        </Row>
      </Box>
      <Box
        flex={6}
        style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}
      >
        <Row style={{ width: '100%' }} align="space-between">
          <SkillProgressBar flex={1} points={1} value={0.67} />
          <Typography>{stats.exp}</Typography>
        </Row>
        <Typography>to next Skill Point {stats.expForNextSkill}</Typography>
      </Box>
    </Box>
    <Box flex={1} style={{ justifyContent: 'space-between' }}>
      <Box direction="row" style={{ justifyContent: 'space-between' }}>
        <img src={require('../assets/spirit-emblem-icon.png')} height={23} />
        <Typography>
          {stats.emblems}/{stats.maxEmblems} ({stats.emblemsInStorage})
        </Typography>
      </Box>
      <Header>
        <Row align="space-between">
          <img src={require('../assets/money-icon.png')} height={23} />
          <Typography>{stats.money}</Typography>
        </Row>
      </Header>
    </Box>
  </Row>
);
