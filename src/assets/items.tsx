import { Typography } from '@material-ui/core';
import * as React from 'react';
import { Item } from '../state/Item';

export const items = [
  Object.assign(new Item(), {
    name: 'Floating Passage',
    emblemCost: 5,
    description: (
      <>
        <Typography paragraph>
          Combat Art that unleashes repeated attacks, overwhelming enemies with
          flowing, dance-like movements.
        </Typography>
        <Typography paragraph>
          While an Ashina Combat Art, it was taught by an outsider, and as such
          is considered heretical.
          <br />
          The master of this technique crossed the Floating Passage and
          descended to Ashina.
          <br />
          Her name was Tomoe.
        </Typography>
      </>
    ),
    description2: (
      <Typography paragraph>
        While an Ashina Combat Art, it was taught by an outsider, and as such is
        considered heretical.
        <br />
        The master of this technique crossed the Floating Passage and descended
        to Ashina.
        <br />
        Her name was Tomoe.
      </Typography>
    )
  }),
  Object.assign(new Item(), {
    name: 'Ornamental Letter',
    emblemCost: 5,
    numberHeld: 10,
    inStorage: 7,
    description: (
      <>
        <Typography paragraph>
          Combat Art that unleashes repeated attacks, overwhelming enemies with
          flowing, dance-like movements.
        </Typography>
        <Typography paragraph>
          While an Ashina Combat Art, it was taught by an outsider, and as such
          is considered heretical.
          <br />
          The master of this technique crossed the Floating Passage and
          descended to Ashina.
          <br />
          Her name was Tomoe.
        </Typography>
      </>
    ),
    description2: (
      <Typography paragraph>
        While an Ashina Combat Art, it was taught by an outsider, and as such is
        considered heretical.
        <br />
        The master of this technique crossed the Floating Passage and descended
        to Ashina.
        <br />
        Her name was Tomoe.
      </Typography>
    )
  })
];
