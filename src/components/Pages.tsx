import * as React from 'react';

export type PagesProps = React.PropsWithChildren<object> &
  React.HTMLAttributes<HTMLDivElement>;

export const Pages = ({ children, ...divProps }: PagesProps) => (
  <div {...divProps}>{children}</div>
);
