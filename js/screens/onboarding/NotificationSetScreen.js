import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import { Switch } from 'react-native-gesture-handler';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { textStyles, colors } from '../../styles';
import routes from '../../navigation/routes';

const onboardingRoutes = routes.onboarding;

const SwitchRow = ({ title, subtitle, onChange, value, disabled }) => {
  return (
    <View
      style={{
        backgroundColor: disabled ? '#EEEEEE' : colors.primaryLight,
        borderRadius: 4,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ ...textStyles.h3, paddingBottom: 5 }}>{title}</Text>
        <Text style={{ ...textStyles.body1 }}>{subtitle}</Text>
      </View>

      <Switch disabled={disabled} onValueChange={onChange} value={value} />
    </View>
  );
};

SwitchRow.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
};

async function registerForPushNotificationsAsync() {
  if (Constants.isDevice) {
    const {
      status: existingStatus,
    } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      importance: Notifications.AndroidImportance.MAX,
      lightColor: '#FF231F7C',
      name: 'default',
      vibrationPattern: [0, 250, 250, 250],
    });
  }
}

export default function NotificationSetScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
  });

  //   // This listener is fired whenever a notification is received while the app is foregrounded
  //   notificationListener.current = Notifications.addNotificationReceivedListener(
  //     // eslint-disable-next-line no-shadow
  //     (notification) => {
  //       setNotification(notification);
  //     }
  //   );

  //   // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(
  //     (response) => {
  //       console.log(response);
  //     }
  //   );

  //   return () => {
  //     Notifications.removeNotificationSubscription(
  //       notificationListener.current
  //     );
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <SwitchRow
        onChange={(enabled) => {
          if (enabled) {
            setNotificationsEnabled(true);
            navigation.navigate(onboardingRoutes.complete);
          } else {
            setNotificationsEnabled(false);
            // TODO the logic for opting out of notifications still leading to complete
          }
        }}
        title="Enable Push Notifications"
        value={notificationsEnabled}
      />
      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

NotificationSetScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
});
