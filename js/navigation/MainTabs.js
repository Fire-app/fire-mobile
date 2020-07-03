/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTranslation } from 'react-i18next';

import Resources from '../screens/ResourcesScreen';
import Emergency from '../screens/EmergencyScreen';
import EmergencyBtn from '../components/EmergencyBtn';

import routes from './routes';
import RightsStack from './RightsStack';
import SettingsStack from './SettingsStack';

const Tabs = createBottomTabNavigator();

// TODO: use custom icons for these
const MainTabs = () => {
  const { t } = useTranslation();
  return (
    <Tabs.Navigator
      name={routes.mainTabs}
      initialRouteName={routes.main.rights}
      tabBarOptions={{
        activeTintColor: '#fb5600',
        inactiveTintColor: '#373643',
        style: styles.tabBar,
        labelStyle: styles.tabLabel,
        tabStyle: styles.tabs,
      }}
    >
      <Tabs.Screen
        name={routes.main.rights}
        component={RightsStack}
        options={{
          tabBarLabel: t('tab_rights'),
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shield-half-full"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={routes.main.resources}
        component={Resources}
        options={{
          tabBarLabel: t('tab_resources'),
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      {/* TODO: This should probably not be a tab */}
      <Tabs.Screen
        name={routes.main.settings}
        component={SettingsStack}
        options={{
          tabBarLabel: t('settings'),
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="circle" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name={routes.main.emergency}
        component={Emergency}
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarLabel: '',
          // eslint-disable-next-line no-unused-vars
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                position: 'absolute',
                bottom: 0, // space from bottombar
                height: 64,
                width: 64,
                borderRadius: 100,
                backgroundColor: '#FFF4ED',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MaterialCommunityIcons
                name="alert-outline"
                color="white"
                size={40}
                style={{
                  top: 8,
                  left: 10,
                  width: 60,
                  height: 60,
                  color: '#FC5333',
                  alignContent: 'center',
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 85,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  tabLabel: {
    fontSize: 14,
  },
  tabs: {
    height: 55,
  },
});

export default MainTabs;
