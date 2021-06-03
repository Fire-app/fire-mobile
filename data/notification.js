const moment = require('moment'); // require
const AAAJ_LOGO = require('../assets/logos/aaajLogo.png');

moment().format();

const today_day = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const today = `${month}/${today_day}/${year}`;

const yest = new Date();
yest.setDate(yest.getDate() - 1);
const monthYesterday = yest.getMonth() + 1;
const yearYesterday = yest.getFullYear();
const yesterday = `${monthYesterday}/${yest.getDate()}/${yearYesterday}`;

// THE VALUES THAT ARE NOW HARD TYPED WILL COME FROM THE DB
export const NOTIFICATION_LIST = [
  {
    date: '2021-06-03T06:24:44.124Z',
    image: AAAJ_LOGO,
    message:
      'Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
    // TO CHANGE: THE DATE IS TEMP HARD CODED RN, MAKE IT SO YOU GET THE CURRENT DATE FROM DataBase

    title: 'ICE activity stopeed', // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
  },
  {
    date: '2021-06-03T06:24:44.124Z',
    image: AAAJ_LOGO,
    message:
      'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
    // TO CHANGE: THE DATE IS TEMP HARD CODED RN, MAKE IT SO YOU GET THE CURRENT DATE FROM DataBase

    title: 'Verified ICE Presence in the Subway', // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
  },
  {
    date: '2021-06-03T06:24:44.124Z',
    image: AAAJ_LOGO,
    message:
      'Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
    // TO CHANGE: THE DATE IS TEMP HARD CODED RN, MAKE IT SO YOU GET THE CURRENT DATE FROM DataBase

    title: 'ICE activity stopeed', // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
  },
  {
    date: '2021-06-03T06:24:44.124Z',
    image: AAAJ_LOGO,
    message:
      'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
    // TO CHANGE: THE DATE IS TEMP HARD CODED RN, MAKE IT SO YOU GET THE CURRENT DATE FROM DataBase

    title: 'Verified ICE Presence in the Subway', // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
  },
  {
    date: '2021-06-03T06:24:44.124Z',
    image: AAAJ_LOGO,
    message:
      'Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
    // TO CHANGE: THE DATE IS TEMP HARD CODED RN, MAKE IT SO YOU GET THE CURRENT DATE FROM DataBase

    title: 'ICE activity stopeed', // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
  },
  {
    image: AAAJ_LOGO,
    message:
      'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
    // TO CHANGE: THE DATE IS TEMP HARD CODED RN, MAKE IT SO YOU GET THE CURRENT DATE FROM DataBase

    title: 'Verified ICE Presence in the Subway', // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
  },
];

function zeroFill(number, width) {
  width -= number.toString().length;
  if (width > 0) {
    return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
  }
  return `${number}`; // always return a string
}
