import React from 'react';
import { Button } from 'react-native';
import Toast from 'react-native-toast-message';
import { DEFAULT_NOTIFICATION } from '../../../data/notificationOptions';

const NotificationButton = (props) => (
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
      // THIS IS KINDA TEMPORARY, MOVE IT TO ANOTHER FILE AND BLABALBAL
      props.addNotification([
        ...props.currNotification,
        {
          date: '2021-06-03T06:24:44.124Z',
          message: 'THIS IS A TEST',
          title: 'TESTING 123, ICE SUCKS',
          type: 'ice',
        },
      ]);
    }}
    title="Toast Notification Test"
  />
);

export default NotificationButton;
