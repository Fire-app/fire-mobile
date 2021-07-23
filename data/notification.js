/* eslint-disable import/prefer-default-export */
// The date, message and title values will come from the DataBase

const today = new Date()
const thisMonth = new Date(today)
const thisWeek = new Date(today)
const earlier = new Date(today)

thisWeek.setDate(thisWeek.getDate() - 7)
thisMonth.setDate(thisMonth.getDate() - 16)
earlier.setDate(earlier.getDate() - 100)

export const ICE = 'ice';
export const DEFAULT = 'default';

export const NOTIFICATION_LIST = [
  {
    date: today,
    message:
      'Whe have not heard more reports thatICE is in Union Station and are ending the alert Whe have not heard more reports thatICE is in Union Station and are ending the alert.Whe have not heard more reports thatICE is in Union Station and are ending the alert.Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
    title: 'ICE activity stopeed',
    type: ICE,
  },
  {
    date: thisMonth,
    message:
      'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
    title: 'Verified ICE Presence in the Subway',
    type: ICE,
  },
  {
    date: thisWeek,
    message:
      'Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
    title: 'ICE activity stopeed',
    type: ICE,
  },
  {
    date: thisMonth,
    message:
      'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
    title: 'DE-FA-UL-T',
    type: DEFAULT,
  },
  {
    date: earlier,
    message:
      'Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
    title: 'UHMM, ANOTHER DEFAULT LUL',
    type: DEFAULT,
  },
  {
    date: thisWeek,
    message:
      'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
    title: 'FIRE IS LEGIT, DEFAULT NOT IS A BIT',
    type: DEFAULT,
  },
];
