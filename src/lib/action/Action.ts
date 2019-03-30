import * as React from 'react';
import { InputId } from 'responsive-gamepad';

export type Action = {
  input: InputId;
  name?: React.ReactNode;
  description?: React.ReactNode;
  hidden?: boolean;
  callback?: (...args: any[]) => any;
};
