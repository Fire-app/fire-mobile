import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const OnboardingStack = () => (
  <Stack.Navigator name={routes.onboardingStack}>
    <Tabs.Screen name={onboardingRoutes.welcome} component={WelcomeScreen} />
    <Tabs.Screen name={onboardingRoutes.language} component={LanguageScreen} />
    <Tabs.Screen name={onboardingRoutes.hotline} component={HotlineScreen} />
    <Tabs.Screen name={onboardingRoutes.attorney} component={AttorneyScreen} />
    <Tabs.Screen name={onboardingRoutes.complete} component={CompleteScreen} />
  </Stack.Navigator>
);

export default OnboardingStack;
