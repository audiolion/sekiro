import * as React from 'react';
import { TabbedContent } from './TabbedContent';
import { Typography } from '@material-ui/core';
import { Equipment } from './Equipment';
import { SpatialTest } from './SpatialTest';

export const CharacterMenu = () => (
  <TabbedContent
    tabs={[
      { label: 'Spatial Test', content: SpatialTest },
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
