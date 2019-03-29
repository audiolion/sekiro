import * as React from 'react';
import { Omit } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Flex, FlexProps } from './Flex';

export type ColumnProps = Omit<FlexProps, 'classes' | 'direction'> & {
  align?: CSSProperties['alignItems'];
  valign?: CSSProperties['justifyContent'];
};

export const Column = ({ align, valign, style, ...flexProps }: ColumnProps) => (
  <Flex
    direction="column"
    style={{
      alignItems: align,
      justifyContent: valign,
      ...style
    }}
    {...flexProps}
  />
);
