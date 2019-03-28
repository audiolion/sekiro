import * as React from 'react';
import { TabbedContent } from './TabbedContent';
import { Typography } from '@material-ui/core';
import { Equipment } from './Equipment';

export const CharacterMenu = () => (
  <TabbedContent
    tabs={[
      { label: 'Equipment', content: Equipment },
      { label: 'Inventory', content: NotImplemented },
      { label: 'Skills', content: NotImplemented },
      { label: 'Options', content: NotImplemented }
    ]}
  />
);

function NotImplemented() {
  return <Typography>Not implemented</Typography>;
}
