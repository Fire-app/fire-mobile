import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import {
  DrivingScreen,
  HomeArrestScreen,
  InsideHomeScreen,
  OnStreetScreen,
  OutsideHomeScreen,
  PublicTransportScreen,
  WorkScreen,
} from '../screens/rightsScreens';
import knowYourRights from '../screens/KnowYourRightsScreen';

import routes from './routes';

const Stack = createStackNavigator();

const RightsStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      name={routes.rightsStack}
      initialRouteName={routes.rights.overviewList}
    >
      <Stack.Screen
        name={routes.rights.overviewList}
        component={knowYourRights}
        options={{ title: t('header_rights') }}
      />
      <Stack.Screen
        name={routes.rights.cases.insideHome}
        component={InsideHomeScreen}
        options={{ title: t('header_inside_home') }}
      />
      <Stack.Screen
        name={routes.rights.cases.outsideHome}
        component={OutsideHomeScreen}
        options={{ title: t('header_outside_home') }}
      />
      <Stack.Screen
        name={routes.rights.cases.homeArrest}
        component={HomeArrestScreen}
        options={{ title: t('header_home_arrest') }}
      />
      <Stack.Screen
        name={routes.rights.cases.driving}
        component={DrivingScreen}
        options={{ title: t('header_driving') }}
      />
      <Stack.Screen
        name={routes.rights.cases.publicTransport}
        component={PublicTransportScreen}
        options={{ title: t('header_public_transport') }}
      />
      <Stack.Screen
        name={routes.rights.cases.street}
        component={OnStreetScreen}
        options={{ title: t('header_street') }}
      />
      <Stack.Screen
        name={routes.rights.cases.work}
        component={WorkScreen}
        options={{ title: t('header_work') }}
      />
    </Stack.Navigator>
  );
};

export default RightsStack;
