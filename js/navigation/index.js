/* eslint-disable no-nested-ternary */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import ExampleTab from '../screens/example/ExampleTabScreen';
import ExampleOnboarding from '../screens/example/ExampleOnboardingScreen';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const Onboarding = () => (
  <Stack.Navigator name="MainApp">
    <Tabs.Screen name="Onboarding 1" component={ExampleOnboarding} />
  </Stack.Navigator>
);

const MainApp = () => (
  <Tabs.Navigator name="MainApp">
    <Tabs.Screen name="Alerts" component={ExampleTab} />
    <Tabs.Screen name="Home" component={ExampleTab} />
    <Tabs.Screen name="Resources" component={ExampleTab} />
  </Tabs.Navigator>
);

const Navigation = () => {
  const { complete: onboardingComplete } = useSelector(
    (state) => state.onboarding
  );
  return (
    <NavigationContainer>
      {onboardingComplete ? <MainApp /> : <Onboarding />}
    </NavigationContainer>
  );
};

export default Navigation;
