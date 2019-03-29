import * as React from 'react';
import { Omit } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Flex, FlexProps } from './Flex';

export type RowProps = Omit<FlexProps, 'classes' | 'direction'> & {
  align?: CSSProperties['justifyContent'];
  valign?: CSSProperties['alignItems'];
};

export const Row = ({ align, valign, style, ...flexProps }: RowProps) => (
  <Flex
    direction="row"
    style={{
      justifyContent: align,
      alignItems: valign,
      ...style
    }}
    {...flexProps}
  />
);
