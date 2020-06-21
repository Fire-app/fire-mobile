import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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

const RightsStack = () => (
  <Stack.Navigator
    name={routes.rightsStack}
    initialRouteName={routes.rights.overviewList}
  >
    <Stack.Screen
      name={routes.rights.overviewList}
      component={knowYourRights}
    />
    <Stack.Screen
      name={routes.rights.cases.insideHome}
      component={InsideHomeScreen}
    />
    <Stack.Screen
      name={routes.rights.cases.outsideHome}
      component={OutsideHomeScreen}
    />
    <Stack.Screen
      name={routes.rights.cases.homeArrest}
      component={HomeArrestScreen}
    />
    <Stack.Screen
      name={routes.rights.cases.driving}
      component={DrivingScreen}
    />
    <Stack.Screen
      name={routes.rights.cases.publicTransport}
      component={PublicTransportScreen}
    />
    <Stack.Screen
      name={routes.rights.cases.street}
      component={OnStreetScreen}
    />
    <Stack.Screen name={routes.rights.cases.work} component={WorkScreen} />
  </Stack.Navigator>
);

export default RightsStack;
