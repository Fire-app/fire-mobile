import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import { Switch } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { textStyles, colors } from '../../styles';
import enablePushNotifications from '../../util/enablePushNotifications';
import i18n from '../../config/i18n';
import { logError } from '../../diagnostics/sentry';

import toggleIceNotification from '../../store/actions/notification/toggleIceAction';

import toggleDefaultNotification from '../../store/actions/notification/toggleDefaultAction';

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
  const dispatch = useDispatch();
  const toggleIce = () => dispatch(toggleIceNotification());
  const toggleDefault = () => dispatch(toggleDefaultNotification());
  const iceState = useSelector((state) => state.notifications.ice_notification);
  const defaultState = useSelector(
    (state) => state.notifications.default_notifications
  );
  // used to control the layout and optimistic ui.
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // used only when full confidence this token is valid.
  const [token, setToken] = useState(null);

  /* const [subscriptions, setSubscriptions] = useState({}); */

  const enableNotifications = async () => {
    setNotificationsEnabled(true); // set optimistic value
    const newToken = await enablePushNotifications();
    if (!newToken) {
      // enablePushNotification will throw an alert for settings if needed.
      setNotificationsEnabled(false);
    }
    setToken(newToken);
  };
  
  /*   THIS IS USEFUL, BUT WORRY ABOUT IT WHEN NOT MOCK API CALLS
  
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
  }, [token, subscriptions]); */

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
            /* setSubscriptions({}); */
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
          /* setSubscriptions({
            ...subscriptions,
            iceArrests: enabled,
          }); */
          toggleIce();
        }}
        subtitle="Subscription option 1"
        title="ICE ARRESTS"
        value={iceState}
      />
      <View style={{ height: 20 }} />

      <SwitchRow
        disabled={!notificationsEnabled}
        onChange={(enabled) => {
          /* setSubscriptions({
            ...subscriptions,
            announcements: enabled,
          }); */
          toggleDefault();
        }}
        subtitle="Subscription option 3"
        title="ANNOUNCEMENTS"
        value={defaultState}
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
