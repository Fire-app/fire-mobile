import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import React from 'react';

import NotificationList from '../screens/notifications/NotificationListScreen';
import routes from './routes';
import textStyles from '../styles/textStyles';

const Stack = createStackNavigator();

const NotificationStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName={routes.notification.notificationList}
      name={routes.notificationStack}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleStyle: textStyles.h2,
      }}
    >
      <Stack.Screen
        component={NotificationList}
        name={routes.notification.notificationList}
        options={{ title: t('Notifications') }}
      />
    </Stack.Navigator>
  );
};

export default NotificationStack;
