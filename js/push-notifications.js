import { Vibration, Platform, Alert } from 'react-native';

import * as Notifications from 'expo-notifications';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export const sendTokenToBackend = (_token) => {
  fetch('http://07267f1eb61a.ngrok.io/new-expo-token', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: _token,
      language: "chinese",
      notification_types: ["alert", "announcement", "chirla_event"]
    }),
  })
    .then((response) => {
		console.log('Response:', JSON.stringify(response))
    	response.json()
    })
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
    console.log(token.data)
    // send post request to store token in backend
    sendTokenToBackend(token.data);
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