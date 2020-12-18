import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import { Switch } from 'react-native-gesture-handler';
import { textStyles, colors } from '../../styles';
import enablePushNotifications from '../../util/enablePushNotifications';
import i18n from '../../config/i18n';
import { logError } from '../../diagnostics/sentry';

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const flipCoin = () => Math.floor(Math.random() * 2) % 2 === 0;

// eslint-disable-next-line camelcase
const registerNotificationsApi_MOCK = async ({
  token,
  language,
  subscriptions,
}) => {
  await sleep(500);

  if (flipCoin()) throw new Error('Aww shucks, the API request failed!');

  // return the same payload, to indicate this is the state of the server
  return {
    language,
    subscriptions,
    token,
  };
};

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

const SettingsNotificationScreen = () => {
  // used to control the layout and optimistic ui.
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // used only when full confidence this token is valid.
  const [token, setToken] = useState(null);

  const [subscriptions, setSubscriptions] = useState({});

  const enableNotifications = async () => {
    setNotificationsEnabled(true); // set optimistic value
    const newToken = await enablePushNotifications();
    if (!newToken) {
      // enablePushNotification will throw an alert for settings if needed.
      setNotificationsEnabled(false);
    }
    setToken(newToken);
  };

  const confirmedSubscriptions = useRef({});
  const isReverting = useRef(false);

  useEffect(() => {
    if (isReverting.current) {
      isReverting.current = false;
      return; // only fire API when triggered by client
    }

    // only call API when setting new notification information
    if (token) {
      const payload = {
        language: i18n.language,
        subscriptions,
        token,
      };

      registerNotificationsApi_MOCK(payload)
        .then((confirmedSettings) => {
          confirmedSubscriptions.current = confirmedSettings.subscriptions;
          Alert.alert('Success');
        })
        .catch((e) => {
          isReverting.current = true;
          setSubscriptions(confirmedSubscriptions.current);
          if (confirmedSubscriptions.current) {
            setNotificationsEnabled(true);
          }
          Alert.alert('Failure');
          logError(e, 'Error saving notification settings', { payload });
        });
    }
  }, [token, subscriptions]);

  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <SwitchRow
        onChange={(enabled) => {
          if (enabled) {
            enableNotifications();
          } else {
            setNotificationsEnabled(false);
            setSubscriptions({});
          }
        }}
        subtitle="Subtitle"
        title="Enable Push Notifications"
        value={notificationsEnabled}
      />

      <View style={{ height: 80 }} />

      <SwitchRow
        disabled={!notificationsEnabled}
        onChange={(enabled) => {
          setSubscriptions({
            ...subscriptions,
            iceArrests: enabled,
          });
        }}
        subtitle="Subscription option 1"
        title="ICE ARRESTS"
        value={!!subscriptions.iceArrests}
      />

      <View style={{ height: 20 }} />
      <SwitchRow
        disabled={!notificationsEnabled}
        onChange={(enabled) => {
          setSubscriptions({
            ...subscriptions,
            chirlaEvents: enabled,
          });
        }}
        subtitle="Subscription option 2"
        title="CHIRLA EVENTS"
        value={!!subscriptions.chirlaEvents}
      />

      <View style={{ height: 20 }} />

      <SwitchRow
        disabled={!notificationsEnabled}
        onChange={(enabled) => {
          setSubscriptions({
            ...subscriptions,
            announcements: enabled,
          });
        }}
        subtitle="Subscription option 3"
        title="ANNOUNCEMENTS"
        value={!!subscriptions.announcements}
      />
    </ScrollView>
  );
};

SettingsNotificationScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SettingsNotificationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
});
