import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import routes from '../navigation/routes';

import registerForPushNotificationsAsync from './registerForPushNotificationsAsync';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});

// Navigation is erroring out.
// No token being printed. Double check all the things that are upsets.

function test(navigation) {
  console.log("a")
  console.log("b")
  console.log(typeof navigation)
  navigation.navigate(routes.main.notification)
  console.log("c")
}

export default function setupPush(
  setExpoPushToken,
  setNotification,
  notificationListener,
  responseListener,
  navigation,
) {
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token).catch((error) => {
        console.log(error)
      })
    );
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );
    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      () => {
        return ( test(navigation) )
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
}

setupPush.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};