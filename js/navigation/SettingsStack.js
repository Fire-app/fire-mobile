import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import React from 'react';

import {
  AboutScreen,
  AcknowledgementsScreen,
  HotlineScreen,
  NotificationsScreen,
  PartnersInfoScreen,
  PrivacyPolicyScreen,
  LanguageScreen,
  OverviewScreen,
  TermsOfServiceScreen,
} from '../screens/settings';

import routes from './routes';
import textStyles from '../styles/textStyles';

const Stack = createStackNavigator();

const SettingsStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName={routes.settings.overview}
      name={routes.settingsStack}
      screenOptions={{
        headerBackTitleStyle: textStyles.headerBackStyle,
        headerTitleStyle: textStyles.h2,
      }}
    >
      <Stack.Screen
        component={OverviewScreen}
        name={routes.settings.overview}
        options={{
          title: t('settings'),
        }}
      />
      <Stack.Screen
        component={LanguageScreen}
        name={routes.settings.language}
        options={{
          title: t('language'),
        }}
      />
      <Stack.Screen
        component={NotificationsScreen}
        name={routes.settings.notifications}
        options={{
          title: t('notifications'),
        }}
      />
      <Stack.Screen
        component={HotlineScreen}
        name={routes.settings.hotline}
        options={{
          title: t('emergency_hotline'),
        }}
      />
      <Stack.Screen
        component={AboutScreen}
        name={routes.settings.about}
        options={{
          title: t('about'),
        }}
      />
      <Stack.Screen
        component={PrivacyPolicyScreen}
        name={routes.settings.privacy_policy}
        options={{
          title: t('privacy_policy'),
        }}
      />
      <Stack.Screen
        component={TermsOfServiceScreen}
        name={routes.settings.terms_of_service}
        options={{
          title: t('terms_of_service'),
        }}
      />
      <Stack.Screen
        component={AcknowledgementsScreen}
        name={routes.settings.acknowledgements}
        options={{
          title: t('acknowledgements'),
        }}
      />
      <Stack.Screen
        component={PartnersInfoScreen}
        name={routes.settings.partners}
        options={{
          title: t('partners'),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
