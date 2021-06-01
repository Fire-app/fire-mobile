const AAAJ_LOGO = require('../assets/logos/aaajLogo.png');


// THE VALUES THAT ARE NOW HARD TYPED WILL COME FROM THE DB
export const NOTIFICATION_LIST = [
    {
        title: 'ICE activity stopeed',
        message: 'Whe have not heard more reports thatICE is in Union Station and are ending the alert.',
        time: '06/01/2021 at 3:02pm',
        image: AAAJ_LOGO, // THIS IS A TEMP. I AM VISUALIZING THIS AS SOME SORT OF TEMP VALUE THAT WILL DECIDE WHICH ICON IS USED
    },
    {
        title: 'Verified ICE Presence in the Subway',
        message: 'First responders have confirmed ICE presence in Union Station, Downtown LA. Proceed with caution.',
        time: '06/01/2021 at 3:02pm',
        image: AAAJ_LOGO,
    },
  ];