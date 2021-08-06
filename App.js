import { createServer, server } from 'miragejs';

import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import PropTypes from 'prop-types';
import {
  /* eslint-disable camelcase */
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
  useFonts,
  /* eslint-enable camelcase */
} from '@expo-google-fonts/roboto';
import * as SplashScreenUtils from 'expo-splash-screen';

import { StatusBar } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
// eslint-disable-next-line no-restricted-imports
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Provider as ReduxProvider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import './js/config';
import Toast, { BaseToast } from 'react-native-toast-message';
import * as Notifications from 'expo-notifications';

import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import linking from './js/util/linkingConfig';
import {
  initialize as initializeSentry,
  logMessage,
  logError,
} from './js/diagnostics/sentry';
import Navigation from './js/navigation';
import createPersistedStore from './js/store/createPersistedStore';
import { rehydrateLanguageSelection } from './js/config/i18n';
import { colors } from './js/styles';

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.passthrough('https://exp.host/--/api/v2/push/updateDeviceToken');
    this.passthrough('https://exp.host/--/api/v2/push/getExpoPushToken');
    this.namespace = 'api';
    this.resource('notification');
    this.get('/api/notifications', () => {
      return {
        notifications: [
          {
            id: 1,
            message: 'This is a test mesesage 1',
            title: 'Title Test 1',
            type: 'alert',
          },
          {
            id: 2,
            message: 'This is a test mesesage 2',
            title: 'Title Test 2',
            type: 'alert',
          },
          {
            id: 3,
            message: 'This is a test mesesage 3',
            title: 'Title Test 3',
            type: 'alert',
          },
        ],
      };
    });
  },
});

initializeSentry(); // Load our build time configs
logMessage('Sentry Initialized');
SplashScreenUtils.preventAutoHideAsync().catch((e) =>
  logError(e, 'Splash Screen Error')
);

const illustration1 = require('./assets/illustration1.png');
const illustration2 = require('./assets/illustration2.png');
const aaajLogo = require('./assets/logos/aaajLogo.png');
const carecenLogo = require('./assets/logos/carecenLogoSquare.jpeg');
const chirlaLogo = require('./assets/logos/chirlaLogo.png');
const immDefLogo = require('./assets/logos/immDefLogoSquare.jpeg');
const krcLogo = require('./assets/logos/krcLogoSquare.jpeg');
const uscLogo = require('./assets/logos/uscLogoSquare.jpeg');

// Assets we need to load before app starts:
const iconFonts = [
  Ionicons.font,
  Feather.font,
  MaterialCommunityIcons.font,
  FontAwesome.font,
];
const textFonts = [];
const localImages = [
  illustration1,
  illustration2,
  aaajLogo,
  carecenLogo,
  chirlaLogo,
  immDefLogo,
  krcLogo,
  uscLogo,
]; // Ensure that you add all images here! Otherwise they flicker on load!

function cacheLocalImages() {
  return localImages.map((image) => Asset.fromModule(image).downloadAsync());
}

function cacheLocalFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}

async function loadAssetsAsync() {
  const imageAssets = cacheLocalImages();
  const fontAssets = cacheLocalFonts([...iconFonts, ...textFonts]);

  await Promise.all([...imageAssets, ...fontAssets]);
}

const { store, persistor } = createPersistedStore();

const App = () => {
  // NOTE: This is for development quality of life.
  // This prevents the useEffect of SplashScreenUtils.preventAutoHideAsync from
  // triggering on hot reload, which throws a LogBox warning.

  /* eslint-disable no-unused-vars */
  const firstMount = useRef(true);
  /* eslint-enable no-unused-vars */

  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const googleFontsLoaded = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  /* eslint-disable no-unused-vars */
  // Prevent the splash screen from hiding until our fake splash screen is ready
  useEffect(() => {
    // concurrently hide splash and load assets
    Promise.all([loadAssetsAsync(), rehydrateLanguageSelection()])
      .then(() => {
        setAssetsLoaded(true);
        SplashScreenUtils.hideAsync();
        logMessage('App mounted');
      })
      .catch((e) => {
        logError(e, 'Failed to mount');
      });
  }, []);

  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(
      // eslint-disable-next-line no-shadow
      (notification) => {
        setNotification(notification);
      }
    );

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data.route;
        console.log(url);
        Linking.openURL(url);
      }
    );
  }, []);

  if (!assetsLoaded || !googleFontsLoaded) {
    // Use declarative component for this to not bleed into the rest of the app's scope.
    return <StatusBar backgroundColor={colors.white} barStyle="dark-content" />;
  }

  /* eslint-disable react/jsx-props-no-spreading */
  // Used for toastNotifications on NotificationListScreen.js. Sets default props, components and style of toast notification
  const toastConfig = {
    // eslint-disable-next-line react/prop-types
    success: ({ text1, text2, ...rest }) => (
      <BaseToast
        {...rest}
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 15 }}
        style={{
          alignItems: 'flex-start',
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          borderLeftColor: 'rgba(0, 0, 0, 0.95)',
          borderRadius: 13,
          displayName: 'toast_display',
          height: 85,
          opacity: 0.9,
        }}
        text1={text1}
        text1Style={{
          color: colors.white,
          fontSize: 13,
          fontWeight: 'bold',
        }}
        text2={text2}
        text2Style={{
          color: colors.white,
          fontSize: 12,
          fontWeight: 'bold',
        }}
      />
    ),
  };

  toastConfig.propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string,
  };

  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer linking={linking}>
            <Navigation />
          </NavigationContainer>
        </PersistGate>
      </ReduxProvider>
      <Toast ref={(ref) => Toast.setRef(ref)} config={toastConfig} />
    </>
  );
};

export default App;
