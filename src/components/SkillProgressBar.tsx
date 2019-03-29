import * as React from 'react';
import { Row, RowProps } from './Row';
import { ProgressBar, ProgressBarProps } from './ProgressBar';
import { SkillIcon, SkillIconProps } from './SkillIcon';
import { Omit } from '@material-ui/core';

export type SkillProgressBarProps = Omit<RowProps, 'classes'> &
  Pick<SkillIconProps, 'points'> &
  Pick<ProgressBarProps, 'value'>;

export const SkillProgressBar = (props: SkillProgressBarProps) => {
  const { points, value, ...rowProps } = props;
  return (
    <Row {...rowProps}>
      <SkillIcon points={points} />
      <ProgressBar flex={1} value={value} color="skyblue" />
    </Row>
  );
};
