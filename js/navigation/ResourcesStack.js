import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import routes from './routes';
import ResourcesList from '../screens/resources/ResourcesListScreen';
import ResourcesDetails from '../screens/resources/DetailsScreen';
import { RESOURCES_MAP } from '../../data/resources';
import textStyles from '../styles/textStyles';

const Stack = createStackNavigator();

const ResourcesStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      name={routes.resourcesStack}
      initialRouteName={routes.resources.overviewList}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleStyle: textStyles.h2,
      }}
    >
      <Stack.Screen
        name={routes.resources.overviewList}
        component={ResourcesList}
        options={{ title: t('header_resources') }}
      />
      <Stack.Screen
        name={routes.resources.details}
        component={ResourcesDetails}
        options={({ route }) => ({
          title: RESOURCES_MAP[route.params.mapId].shortName,
        })}
      />
    </Stack.Navigator>
  );
};

export default ResourcesStack;
