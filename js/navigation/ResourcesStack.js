import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import React from 'react';

import { RESOURCES_MAP } from '../../data/resources';
import ResourcesDetails from '../screens/resources/ResourcesDetailsScreen';
import ResourcesList from '../screens/resources/ResourcesListScreen';
import routes from './routes';
import textStyles from '../styles/textStyles';

const Stack = createStackNavigator();

const ResourcesStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName={routes.resources.overviewList}
      name={routes.resourcesStack}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleStyle: textStyles.h2,
      }}
    >
      <Stack.Screen
        component={ResourcesList}
        name={routes.resources.overviewList}
        options={{ title: t('header_resources') }}
      />
      <Stack.Screen
        component={ResourcesDetails}
        name={routes.resources.details}
        options={({ route }) => ({
          title: RESOURCES_MAP[route.params.resourceId].shortName,
        })}
      />
    </Stack.Navigator>
  );
};

export default ResourcesStack;
