import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import resourceDetails from '../screens/resources/OrganizationTemplate';
import resourcesList from '../screens/resources/ResourcesListScreen';
import routes from './routes';

const Stack = createStackNavigator();

const ResourcesStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      name={routes.resourcesStack}
      initialRouteName={routes.resources.overviewList}
    >
      <Stack.Screen
        name={routes.resources.overviewList}
        component={resourcesList}
        options={{ title: t('header_resources') }}
      />
      <Stack.Screen
        name={routes.resources.cases.AAAJ}
        component={resourceDetails}
        options={{ title: t('header_AAAJ') }}
      />
      {/* <Stack.Screen
        name={routes.resources.cases.CARECEN}
        component={DetailsTemplate}
        options={{ title: t('header_CARECEN') }}
      />
      <Stack.Screen
        name={routes.resources.cases.CHIRLA}
        component={DetailsTemplate}
        options={{ title: t('header_CHIRLA') }}
      /> */}
    </Stack.Navigator>
  );
};

export default ResourcesStack;
