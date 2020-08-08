import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import ScenarioListScreen from '../screens/rights/ScenarioListScreen';
import VideoListScreen from '../screens/rights/VideoListScreen';
import RightsOverviewScreen from '../screens/rights/RightsOverviewScreen';
import HomeOverviewScreen from '../screens/rights/HomeOverviewScreen';

import routes from './routes';

import {
  DrivingScreen,
  HomeArrestScreen,
  InsideHomeScreen,
  OnStreetScreen,
  OutsideHomeScreen,
  PublicTransportScreen,
  WorkScreen,
} from '../screens/rights/scenarioScreens';
import textStyles from '../styles/textStyles';

const Stack = createStackNavigator();

const RightsStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName={routes.rights.overviewList}>
      <Stack.Screen
        name={routes.rights.overviewList}
        component={RightsOverviewScreen}
        options={{
          title: t('header_rights'),
          headerTitleStyle: textStyles.h2,
        }}
      />
      <Stack.Screen
        name={routes.scenarios.overviewList}
        component={ScenarioListScreen}
        options={{
          title: t('header_scenarios'),
          headerBackTitle: t('tab_rights'),
          headerTitleStyle: textStyles.h2,
        }}
      />
      <Stack.Screen
        name={routes.scenarios.homeOverview}
        component={HomeOverviewScreen}
        options={{
          title: t('Home'),
          headerBackTitle: t('tab_rights'),
        }}
      />
      <Stack.Screen
        name={routes.videos.overviewList}
        component={VideoListScreen}
        options={{ title: t('header_videos') }}
      />

      {/* SCENARIOS */}
      <Stack.Screen
        name={routes.scenarios.cases.insideHome}
        component={InsideHomeScreen}
        options={{
          title: t('header_inside_home'),
          headerTitleStyle: textStyles.h2,
        }}
      />
      <Stack.Screen
        name={routes.scenarios.cases.outsideHome}
        component={OutsideHomeScreen}
        options={{
          title: t('header_outside_home'),
          headerTitleStyle: textStyles.h2,
        }}
      />
      <Stack.Screen
        name={routes.scenarios.cases.homeArrest}
        component={HomeArrestScreen}
        options={{
          title: t('header_home_arrest'),
          headerTitleStyle: textStyles.h2,
        }}
      />
      <Stack.Screen
        name={routes.scenarios.cases.driving}
        component={DrivingScreen}
        options={{
          title: t('header_driving'),
          headerTitleStyle: textStyles.h2,
        }}
      />
      <Stack.Screen
        name={routes.scenarios.cases.publicTransport}
        component={PublicTransportScreen}
        options={{
          title: t('header_public_transport'),
          headerTitleStyle: textStyles.h2,
        }}
      />
      <Stack.Screen
        name={routes.scenarios.cases.street}
        component={OnStreetScreen}
        options={{ title: t('header_street'), headerTitleStyle: textStyles.h2 }}
      />
      <Stack.Screen
        name={routes.scenarios.cases.work}
        component={WorkScreen}
        options={{ title: t('header_work'), headerTitleStyle: textStyles.h2 }}
      />
    </Stack.Navigator>
  );
};

export default RightsStack;
