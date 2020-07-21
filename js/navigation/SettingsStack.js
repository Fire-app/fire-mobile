import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import {
  SettingsOverviewScreen,
  SettingsLanguageScreen,
  EmergencyToolkitScreen,
  HotlineSelectionScreen,
  RightsCardScreen,
} from '../screens/settings';

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
        component={SettingsLanguageScreen}
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
      <Stack.Screen
        name={routes.settings.hotline}
        component={HotlineSelectionScreen}
        options={{
          title: t('emergency_hotline'),
        }}
      />
      <Stack.Screen
        name={routes.settings.rights_card}
        component={RightsCardScreen}
        options={{
          title: t('rights_card'),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
