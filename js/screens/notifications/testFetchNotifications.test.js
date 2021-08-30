import { ExpectationFailed } from 'http-errors';
import React, {useState} from 'react';
import { render } from 'react-dom';
import fetchRecentNotifications from './fetchRecentNotifications';

import NotificationListScreen from './NotificationListScreen'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        notifications: [
          {
            date: new Date(),
            message:
              'Whe have not heard more reports thatICE is in Union Station and are ending the alert Whe have not heard more reports thatICE is in Union Station and are ending the alert.Whe have not heard more reports thatICE is in Union Station and are ending the alert.Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
            title: 'ICE activity stopeed',
          },
          {
            date: new Date(),
            message:
              'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
            title: 'Verified ICE Presence in the Subway',
          },
        ],
      }),
  })
);

fetch.mockClear();

it('Gets proper values', async () => {
  const notifications = await fetchRecentNotifications(
    'ExponentPushToken[wY4HqoNco_fdu_DF2jmeSC]'
  );

  expect(notifications).toBe('something');
});
