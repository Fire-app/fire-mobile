import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import React from 'react';

import HomeOverviewScreen from '../screens/rights/HomeOverviewScreen';
import RightsOverviewScreen from '../screens/rights/RightsOverviewScreen';
import ScenarioListScreen from '../screens/rights/ScenarioListScreen';
import VideoListScreen from '../screens/rights/VideoListScreen';

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
import { textStyles } from '../styles';

const Stack = createStackNavigator();

const RightsStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName={routes.rights.overviewList}>
      <Stack.Screen
        component={RightsOverviewScreen}
        name={routes.rights.overviewList}
        options={{
          headerTitleStyle: textStyles.h2,
          title: t('header_rights'),
        }}
      />
      <Stack.Screen
        component={ScenarioListScreen}
        name={routes.scenarios.overviewList}
        options={{
          headerBackTitle: t('tab_rights'),
          headerTitleStyle: textStyles.h2,
          title: t('header_scenarios'),
        }}
      />
      <Stack.Screen
        component={HomeOverviewScreen}
        name={routes.scenarios.homeOverview}
        options={{
          headerBackTitle: t('tab_rights'),
          title: t('Home'),
        }}
      />
      <Stack.Screen
        component={VideoListScreen}
        name={routes.videos.overviewList}
        options={{ title: t('header_videos') }}
      />

      {/* SCENARIOS */}
      <Stack.Screen
        component={InsideHomeScreen}
        name={routes.scenarios.cases.insideHome}
        options={{
          headerTitleStyle: textStyles.h2,
          title: t('header_inside_home'),
        }}
      />
      <Stack.Screen
        component={OutsideHomeScreen}
        name={routes.scenarios.cases.outsideHome}
        options={{
          headerTitleStyle: textStyles.h2,
          title: t('header_outside_home'),
        }}
      />
      <Stack.Screen
        component={HomeArrestScreen}
        name={routes.scenarios.cases.homeArrest}
        options={{
          headerTitleStyle: textStyles.h2,
          title: t('header_home_arrest'),
        }}
      />
      <Stack.Screen
        component={DrivingScreen}
        name={routes.scenarios.cases.driving}
        options={{
          headerTitleStyle: textStyles.h2,
          title: t('header_driving'),
        }}
      />
      <Stack.Screen
        component={PublicTransportScreen}
        name={routes.scenarios.cases.publicTransport}
        options={{
          headerTitleStyle: textStyles.h2,
          title: t('header_public_transport'),
        }}
      />
      <Stack.Screen
        component={OnStreetScreen}
        name={routes.scenarios.cases.street}
        options={{ headerTitleStyle: textStyles.h2, title: t('header_street') }}
      />
      <Stack.Screen
        component={WorkScreen}
        name={routes.scenarios.cases.work}
        options={{ headerTitleStyle: textStyles.h2, title: t('header_work') }}
      />
    </Stack.Navigator>
  );
};

export default RightsStack;
