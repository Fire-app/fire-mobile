import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import {
  CompleteScreen,
  HotlineScreen,
  LanguageScreen,
  WelcomeScreen,
  InfoScreen,
  NotificationSetScreen,
} from '../screens/onboarding';

import routes from './routes';

const onboardingRoutes = routes.onboarding;

const Stack = createStackNavigator();

const OnboardingStack = () => (
  <Stack.Navigator
    name={routes.onboardingStack}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen component={LanguageScreen} name={onboardingRoutes.language} />
    <Stack.Screen component={WelcomeScreen} name={onboardingRoutes.welcome} />
    <Stack.Screen component={InfoScreen} name={onboardingRoutes.info} />
    <Stack.Screen component={HotlineScreen} name={onboardingRoutes.hotline} />
    <Stack.Screen
      component={NotificationSetScreen}
      name={onboardingRoutes.notificationSet}
    />
    <Stack.Screen component={CompleteScreen} name={onboardingRoutes.complete} />
  </Stack.Navigator>
);

export default OnboardingStack;
