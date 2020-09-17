import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import React from 'react';

import RightsOverviewScreen from '../screens/rights/RightsOverviewScreen';
import VideoListScreen from '../screens/rights/videos/VideoListScreen';
import ScenarioListScreen from '../screens/rights/scenarios/ScenariosListScreen';
import ScenarioSublistScreen from '../screens/rights/scenarios/ScenariosSublistScreen';
import ScenariosDetailsScreen from '../screens/rights/scenarios/ScenariosDetailsScreen';

import routes from './routes';

import { textStyles } from '../styles';
import { SCENARIO_MAP } from '../../data/scenarios';

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

      {/* SCENARIOS */}
      <Stack.Screen
        component={ScenarioListScreen}
        name={routes.scenarios.overviewList}
        options={{
          headerBackTitle: t('tab_rights'),
          title: t('header_scenarios'),
        }}
      />
      <Stack.Screen
        component={ScenarioSublistScreen}
        name={routes.scenarios.sublist}
        options={({
          route: {
            params: { title },
          },
        }) => ({
          headerBackTitle: t('header_scenarios'),
          title: t(title),
        })}
      />
      <Stack.Screen
        component={ScenariosDetailsScreen}
        name={routes.scenarios.details}
        options={({
          route: {
            params: { scenarioId },
          },
        }) => ({
          title: SCENARIO_MAP[scenarioId].title,
        })}
      />

      {/* VIDEOS */}
      <Stack.Screen
        component={VideoListScreen}
        name={routes.videos.overviewList}
        options={{
          headerBackTitle: t('tab_rights'),
          title: t('header_videos'),
        }}
      />
    </Stack.Navigator>
  );
};

export default RightsStack;
