/* eslint-disable no-underscore-dangle */
import React from "react";
import { Vibration, Platform } from "react-native";

import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import firebase, { addToken } from "./firebase";

export const registerForPushNotificationsAsync = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    const token = await Notifications.getExpoPushTokenAsync();
    addToken(token);
    // console.log("Ma'am this is the token thank you:", token);
    // setexpoPushToken(token);
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
export const handleNotification = (_notification) => {
  Vibration.vibrate();
  console.log("notification", _notification);
  //   setNotification({ notification: _notification });
};

export const _notificationSubscription = Notifications.addListener(
  handleNotification
);
