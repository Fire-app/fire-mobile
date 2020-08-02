import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import ScenarioListScreen from '../screens/rights/ScenarioListScreen';
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

const Stack = createStackNavigator();

const SettingsStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName={routes.rights.overviewList}>
      <Stack.Screen
        name={routes.rights.overviewList}
        component={RightsOverviewScreen}
        options={{
          title: t('header_rights'),
        }}
      />
      <Stack.Screen
        name={routes.scenarios.overviewList}
        component={ScenarioListScreen}
        options={{
          title: t('header_scenarios'),
          headerBackTitle: t('tab_rights'),
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

      {/* SCENARIOS */}
      <Stack.Screen
        name={routes.scenarios.cases.insideHome}
        component={InsideHomeScreen}
        options={{ title: t('header_inside_home') }}
      />
      <Stack.Screen
        name={routes.scenarios.cases.outsideHome}
        component={OutsideHomeScreen}
        options={{ title: t('header_outside_home') }}
      />
      <Stack.Screen
        name={routes.scenarios.cases.homeArrest}
        component={HomeArrestScreen}
        options={{ title: t('header_home_arrest') }}
      />
      <Stack.Screen
        name={routes.scenarios.cases.driving}
        component={DrivingScreen}
        options={{ title: t('header_driving') }}
      />
      <Stack.Screen
        name={routes.scenarios.cases.publicTransport}
        component={PublicTransportScreen}
        options={{ title: t('header_public_transport') }}
      />
      <Stack.Screen
        name={routes.scenarios.cases.street}
        component={OnStreetScreen}
        options={{ title: t('header_street') }}
      />
      <Stack.Screen
        name={routes.scenarios.cases.work}
        component={WorkScreen}
        options={{ title: t('header_work') }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
