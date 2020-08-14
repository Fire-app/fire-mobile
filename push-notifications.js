/* eslint-disable no-underscore-dangle */
import { Vibration, Platform, Alert } from 'react-native';

import { Notifications } from 'expo';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export const sendTokenToBackend = (_token) => {
  fetch('https://fire-app-web.herokuapp.com/send-token', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: _token,
    }),
  })
    .then((response) => response.json())
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log(res);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
};

export const RegisterForPushNotificationsAsync = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notification!');
      return;
    }
    const token = await Notifications.getExpoPushTokenAsync();
    // send post request to store token in backend
    sendTokenToBackend(token);
  } else {
    Alert.alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.createChannelAndroidAsync('default', {
      name: 'default',
      sound: true,
      priority: 'max',
      vibrate: [0, 250, 250, 250],
    });
  }
};

// eslint-disable-next-line no-unused-vars
export const handleNotification = (_notification) => {
  Vibration.vibrate();
};

export const _notificationSubscription = Notifications.addListener(
  handleNotification
);
