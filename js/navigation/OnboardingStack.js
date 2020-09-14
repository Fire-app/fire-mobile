import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import {
  CompleteScreen,
  HotlineScreen,
  IntroScreen,
  LanguageScreen,
  ToolkitIntroScreen,
  WelcomeScreen,
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
    <Stack.Screen component={IntroScreen} name={onboardingRoutes.intro} />
    <Stack.Screen
      component={ToolkitIntroScreen}
      name={onboardingRoutes.toolkitIntro}
    />
    <Stack.Screen component={HotlineScreen} name={onboardingRoutes.hotline} />
    <Stack.Screen component={CompleteScreen} name={onboardingRoutes.complete} />
  </Stack.Navigator>
);

export default OnboardingStack;
