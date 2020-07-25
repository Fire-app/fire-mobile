import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import {
  SettingsOverviewScreen,
  SettingsLanguageScreen,
  EmergencyToolkitScreen,
  HotlineSelectionScreen,
  RightsCardScreen,
  AboutScreen,
  PrivacyPolicyScreen,
  TermsOfServiceScreen,
  PartnersInfoScreen,
  AcknowledgementsScreen,
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
      <Stack.Screen
        name={routes.settings.about}
        component={AboutScreen}
        options={{
          title: t('about'),
        }}
      />
      <Stack.Screen
        name={routes.settings.privacy_policy}
        component={PrivacyPolicyScreen}
        options={{
          title: t('privacy_policy'),
        }}
      />
      <Stack.Screen
        name={routes.settings.terms_of_service}
        component={TermsOfServiceScreen}
        options={{
          title: t('terms_of_service'),
        }}
      />
      <Stack.Screen
        name={routes.settings.acknowledgements}
        component={AcknowledgementsScreen}
        options={{
          title: t('acknowledgements'),
        }}
      />
      <Stack.Screen
        name={routes.settings.partners}
        component={PartnersInfoScreen}
        options={{
          title: t('partners'),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
