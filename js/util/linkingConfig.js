import * as Linking from 'expo-linking';

const prefix = Linking.createURL('/');

// NOTE: Config object can be used to map all React Navigation routes in the app
// Only notifications route is specified bc it's the only deeplinking case
const config = {
  screens: {
    tabs: {
      screens: {
        TAB_NOTIFICATION: 'notifications',
      },
    },
  },
};

const linking = {
  config,
  prefixes: [prefix],
};

export default linking;
