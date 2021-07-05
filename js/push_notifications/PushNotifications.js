import * as Notifications from "expo-notifications";
import { useEffect } from "react";

import routes from '../../js/navigation/routes';

import registerForPushNotificationsAsync from "./registerForPushNotificationsAsync";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});


function test (navigation) {
  console.log("a")
  console.log("b")
  navigation.navigate(routes.notificationStack)
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
      setExpoPushToken(token)
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
