import * as React from 'react';
import { ActionContext } from '../lib/action/ActionContext';
import { useObserver } from 'mobx-react-lite';
import { Row } from './Row';
import { Typography } from '@material-ui/core';
import { ActionButton } from './ActionButton';

export const ActionHUD = () =>
  useObserver(() => {
    const { visible, highlighted } = React.useContext(ActionContext);
    return (
      <Row align="space-between">
        <Typography>{highlighted && highlighted.description}</Typography>
        <Row>
          {visible.map((action, index) => (
            <ActionButton key={index} {...action} />
          ))}
        </Row>
      </Row>
    );
  });
