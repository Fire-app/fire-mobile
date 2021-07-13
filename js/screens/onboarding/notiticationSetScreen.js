import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { Switch } from 'react-native-gesture-handler';
import { textStyles, colors } from '../../styles';
import routes from '../../navigation/routes';

import setupPush from '../../push_notifications/PushNotifications'


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

export default function notificationSetScreen ({ navigation }){
    
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef(null);

  setupPush(
    setExpoPushToken,
    setNotification,
    notificationListener,
    responseListener,
    navigation,
  );
  
  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <SwitchRow
        onChange={(enabled) => {
          if (enabled) {
            //setNotificationsEnabled(true);
            navigation.navigate(onboardingRoutes.complete);
          } else {
            navigation.navigate(onboardingRoutes.complete);
            //setNotificationsEnabled(false);
          }
        }}
        title="Enable Push Notifications"
        subtitle="temp"
        value={notificationsEnabled}
      />
      <View style={{ height: 80 }} />
    </ScrollView>
  );
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
