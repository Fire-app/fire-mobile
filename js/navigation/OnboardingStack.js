import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  WelcomeScreen,
  LanguageScreen,
  HotlineScreen,
  AttorneyScreen,
  CompleteScreen,
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
    <Stack.Screen name={onboardingRoutes.welcome} component={WelcomeScreen} />
    <Stack.Screen name={onboardingRoutes.language} component={LanguageScreen} />
    <Stack.Screen name={onboardingRoutes.hotline} component={HotlineScreen} />
    <Stack.Screen name={onboardingRoutes.attorney} component={AttorneyScreen} />
    <Stack.Screen name={onboardingRoutes.complete} component={CompleteScreen} />
  </Stack.Navigator>
);

export default OnboardingStack;
