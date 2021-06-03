const AAAJ_LOGO = require('../assets/logos/aaajLogo.png');

var moment = require('moment'); // require
moment().format();


var today_day = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var today = month + '/' + today_day + '/' + year;

var yest = new Date();
yest.setDate(yest.getDate() - 1);
var monthYesterday = yest.getMonth() + 1;
var yearYesterday = yest.getFullYear();
var yesterday = monthYesterday + '/' + yest.getDate() + '/' + yearYesterday;

// THE VALUES THAT ARE NOW HARD TYPED WILL COME FROM THE DB
export const NOTIFICATION_LIST = [
    {
        title: 'ICE activity stopeed',
        message: 'Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
        date: '6/2/2021' == today ? 'Today' : '6/2/2021' == yesterday ? 'Yesterday' : '6/2/2021', //TO CHANGE: THE DATE IS TEMP HARD CODED RN, MAKE IT SO YOU GET THE CURRENT DATE FROM DataBase
        time: '3:02pm',
        image: AAAJ_LOGO, // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
    },
    {
        title: 'Verified ICE Presence in the Subway',
        message: 'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
        date: '5/31/2021' == today ? 'Today' : '5/31/2021' == yesterday ? 'Yesterday' : '5/31/2021', //TO CHANGE: THE DATE IS TEMP HARD CODED RN, MAKE IT SO YOU GET THE CURRENT DATE FROM DataBase
        time: '1:02am',
        image: AAAJ_LOGO, // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
    },
    {
        title: 'ICE activity stopeed',
        message: 'Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
        date: '24/1/2021' == today ? 'Today' : '24/1/2021' == yesterday ? 'Yesterday' : '24/1/2021', //TO CHANGE: THE DATE IS TEMP HARD CODED RN, MAKE IT SO YOU GET THE CURRENT DATE FROM DataBase
        time: '4:02pm',
        image: AAAJ_LOGO, // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
    },
    {
        title: 'Verified ICE Presence in the Subway',
        message: 'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
        date: '6/1/2025' == today ? 'Today' : '6/1/2025' == yesterday ? 'Yesterday' : '6/1/2025', //TO CHANGE: THE DATE IS TEMP HARD CODED RN, MAKE IT SO YOU GET THE CURRENT DATE FROM DataBase
        time: '3:02pm',
        image: AAAJ_LOGO, // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
    },
    {
        title: 'ICE activity stopeed',
        message: 'Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
        date: '6/1/2021' == today ? 'Today' : '6/1/2021' == yesterday ? 'Yesterday' : '6/1/2021', //TO CHANGE: THE DATE IS TEMP HARD CODED RN, MAKE IT SO YOU GET THE CURRENT DATE FROM DataBase
        time: '3:02pm',
        image: AAAJ_LOGO, // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
    },
    {
        title: 'Verified ICE Presence in the Subway',
        message: 'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
        date: '6/1/2021' == today ? 'Today' : '6/1/2021' == yesterday ? 'Yesterday' : '6/1/2021', //TO CHANGE: THE DATE IS TEMP HARD CODED RN, MAKE IT SO YOU GET THE CURRENT DATE FROM DataBase
        time: '3:02pm',
        image: AAAJ_LOGO, // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
    },
];


function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}