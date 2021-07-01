/* eslint-disable import/prefer-default-export */
// The date, message and title values will come from the DataBase

const today = new Date()
const yesterday = new Date(today)
const lastWeek = new Date(today)
const longtimeAgo = new Date(today)

yesterday.setDate(yesterday.getDate() - 1)
lastWeek.setDate(lastWeek.getDate() - 7)
longtimeAgo.setDate(longtimeAgo.getDate() - 100)

export const NOTIFICATION_LIST = [
  {
    date: today,
    message:
      'Whe have not heard more reports thatICE is in Union Station and are ending the alert Whe have not heard more reports thatICE is in Union Station and are ending the alert.Whe have not heard more reports thatICE is in Union Station and are ending the alert.Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
    title: 'ICE activity stopeed',
  },
  {
    date: yesterday,
    message:
      'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
    title: 'Verified ICE Presence in the Subway',
  },
  {
    date: lastWeek,
    message:
      'Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
    title: 'ICE activity stopeed',
  },
  {
    date: yesterday,
    message:
      'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
    title: 'Verified ICE Presence in the Subway',
  },
  {
    date: longtimeAgo,
    message:
      'Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
    title: 'ICE activity stopeed',
  },
  {
    date: lastWeek,
    message:
      'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
    title: 'Verified ICE Presence in the Subway',
  },
];
