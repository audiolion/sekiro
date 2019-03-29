import * as React from 'react';
import { ProgressBar, ProgressBarProps } from './ProgressBar';
import { Omit } from '@material-ui/core';

export type HealthBarProps = Omit<ProgressBarProps, 'classes' | 'color'>;

export const HealthBar = (props: HealthBarProps) => (
  <ProgressBar color="tomato" {...props} />
);
