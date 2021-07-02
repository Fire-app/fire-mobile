import React from 'react';
import { Button } from 'react-native';
import Toast from 'react-native-toast-message';
import { DEFAULT_NOTIFICATION } from '../../../data/notificationOptions';

const NotificationButton = () => (
  <Button
    color="rgba(0,0,0,0.85)"
    onPress={() => {
      Toast.show({
        autoHide: true,
        text1: 'example title',
        text2: 'example message',
        topOffset: DEFAULT_NOTIFICATION.offsetTop,
        visibilityTime: DEFAULT_NOTIFICATION.visibilityTime,
      });
    }}
    title="Toast Notification Test"
  />
);

export default NotificationButton;
