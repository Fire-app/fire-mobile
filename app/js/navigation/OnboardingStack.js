import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ExampleOnboarding from '../screens/example/ExampleOnboardingScreen';
import routes from './routes';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const OnboardingStack = () => (
  <Stack.Navigator name={routes.onboardingStack}>
    <Tabs.Screen name={routes.onboarding.start} component={ExampleOnboarding} />
  </Stack.Navigator>
);

export default OnboardingStack;
