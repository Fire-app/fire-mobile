/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import {
  StatusBar,
  Text,
  View,
  Button,
  Vibration,
  Platform,
} from "react-native";
import { SplashScreen as SplashScreenUtils } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

import {
  useFonts,
  /* eslint-disable camelcase */
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
  /* eslint-enable camelcase */
} from "@expo-google-fonts/roboto";

import { Provider as ReduxProvider } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import { PersistGate } from "redux-persist/integration/react";
import createPersistedStore from "./js/store/createPersistedStore";
import Navigation from "./js/navigation";
import "./js/config"; // Load our build time configs

const welcomeImage = require("./assets/welcomeImage.png");
const completeImage = require("./assets/completedImage.png");
const chirlaLogo = require("./assets/chirlaLogo.png");

// Assets we need to load before app starts:
const iconFonts = [FontAwesome.font];
const textFonts = [];
const localImages = [welcomeImage, completeImage, chirlaLogo]; // Ensure that you add all images here! Otherwise they flicker on load!

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
  const [expoPushToken, setexpoPushToken] = useState("");
  const [notification, setNotification] = useState({});

  const googleFontsLoaded = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  const registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      console.log("token:", token);
      setexpoPushToken(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("default", {
        name: "default",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleNotification = (_notification) => {
    Vibration.vibrate();
    console.log("notification", _notification);
    setNotification({ notification: _notification });
  };

  // this will send teh push notificaiotn
  const sendPushNotification = async () => {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Original Title",
      body: "And here is the body!",
      data: { data: "goes here" },
      _displayInForeground: true,
    };
    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  useEffect(() => {
    registerForPushNotificationsAsync();
    // eslint-disable-next-line no-underscore-dangle
    const _notificationSubscription = Notifications.addListener(
      handleNotification
    );
    // sendPushNotification();
  });

  const [assetsLoaded, setAssetsLoaded] = useState(false);
  // If application has an online step, that can occur here too, as a redux action.

  // Prevent the splash screen from hiding until our fake splash screen is ready
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    SplashScreenUtils.preventAutoHide();
    loadAssetsAsync().then(() => {
      setAssetsLoaded(true);
      SplashScreenUtils.hide();
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
