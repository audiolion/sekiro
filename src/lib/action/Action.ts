import * as React from 'react';
import { InputId } from 'responsive-gamepad';

export type Action = {
  input: InputId;
  name?: React.ReactNode;
  description?: React.ReactNode;
  callback?: (...args: any[]) => any;
};
