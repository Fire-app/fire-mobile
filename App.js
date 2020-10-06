import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
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
import { initialize as initializeSentry } from './js/diagnostics/sentry';
import Navigation from './js/navigation';
import createPersistedStore from './js/store/createPersistedStore';
import { rehydrateLanguageSelection } from './js/config/i18n';

initializeSentry(); // Load our build time configs

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
  const firstMount = useRef(true);

  const [assetsLoaded, setAssetsLoaded] = useState(false);
  // If application has an online step, that can occur here too, as a redux action.

  const googleFontsLoaded = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  // Prevent the splash screen from hiding until our fake splash screen is ready
  useEffect(() => {
    if (!firstMount.current) return;
    firstMount.current = false;
    StatusBar.setBarStyle('light-content');

    // concurrently hide splash and load assets
    Promise.all([
      SplashScreenUtils.preventAutoHideAsync(),
      loadAssetsAsync(),
      rehydrateLanguageSelection(),
    ]).then(() => {
      setAssetsLoaded(true);
      SplashScreenUtils.hideAsync();
    });
  }, []);

  if (!assetsLoaded || !googleFontsLoaded) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
