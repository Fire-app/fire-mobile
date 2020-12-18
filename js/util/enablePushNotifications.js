import Constants from 'expo-constants';
import { Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

const enablePushNotifications = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      // TODO: add a Linking.openSettings button option here.
      Alert.alert('Please enable push notifications in settings.');
      return null;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;
  }
  Alert.alert('Must use physical device for Push Notifications');
  return null;
};

export default enablePushNotifications;
