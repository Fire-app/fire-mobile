import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SplashScreen as SplashScreenUtils } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import {
  useFonts,
  // eslint-disable-next-line camelcase
  Roboto_400Regular,
  // eslint-disable-next-line camelcase
  Roboto_500Medium,
  // eslint-disable-next-line camelcase
  Roboto_700Bold,
  // eslint-disable-next-line camelcase
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

import { Provider as ReduxProvider } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import { PersistGate } from 'redux-persist/integration/react';
import createPersistedStore from './js/store/createPersistedStore';
import Navigation from './js/navigation';
import './js/config'; // Load our build time configs

// Preload all images
const example1 = require('./assets/example/banksy1.png');
const example2 = require('./assets/example/banksy2.png');
const example3 = require('./assets/example/banksy3.png');

// Assets we need to load before app starts:
const iconFonts = [FontAwesome.font];
const textFonts = [];
const localImages = [example1, example2, example3]; // Ensure that you add all images here! Otherwise they flicker on load!

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
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  // If application has an online step, that can occur here too, as a redux action.

  // Prevent the splash screen from hiding until our fake splash screen is ready
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    SplashScreenUtils.preventAutoHide();
    loadAssetsAsync().then(() => {
      setAssetsLoaded(true);
      SplashScreenUtils.hide();
    });
  }, []);

  const googleFontsLoaded = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

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
