import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import SettingsOverviewScreen from '../screens/settings/SettingsOverviewScreen';
import LanguageScreen from '../screens/settings/SettingsLanguageScreen';
import EmergencyToolkitScreen from '../screens/settings/EmergencyToolkitScreen';

import routes from './routes';

const Stack = createStackNavigator();

const SettingsStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      name={routes.settingsStack}
      initialRouteName={routes.settings.overview}
    >
      <Stack.Screen
        name={routes.settings.overview}
        component={SettingsOverviewScreen}
        options={{
          title: t('settings'),
        }}
      />
      <Stack.Screen
        name={routes.settings.language}
        component={LanguageScreen}
        options={{
          title: t('language'),
        }}
      />
      <Stack.Screen
        name={routes.settings.toolkit}
        component={EmergencyToolkitScreen}
        options={{
          title: t('emergency_toolkit'),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
