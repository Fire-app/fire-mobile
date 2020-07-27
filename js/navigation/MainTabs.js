/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTranslation } from 'react-i18next';

import EmergencyScreen from '../screens/EmergencyScreen';
import { textStyles, colors } from '../styles';

import routes from './routes';
import RightsStack from './RightsStack';
import SettingsStack from './SettingsStack';
import ResourcesStack from './ResourcesStack';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const FakeScreen = () => null;

const AppTabs = () => {
  const { t } = useTranslation();
  return (
    <Tabs.Navigator
      name="FOO" // TODO: what is this
      initialRouteName={routes.main.rights}
      tabBarOptions={{
        activeTintColor: colors.charcoalGrey,
        inactiveTintColor: colors.warmGrey,
        style: styles.tabBar,
        labelStyle: textStyles.tabLabel,
        tabStyle: styles.tabs,
        tabBarLabel: ({ tintColor, focused, item }) => {
          return focused ? (
            <Text style={{ fontWeight: 'bold' }}>{routes.name}</Text>
          ) : (
            <Text style={{ fontWeight: 'normal', fontSize: 15 }}>
              {routes.name}
            </Text>
          );
        },
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
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={routes.main.resources}
        component={ResourcesStack}
        options={{
          tabBarLabel: t('tab_resources'),
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document-outline"
              color={color}
              size={size}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={routes.main.settings}
        component={SettingsStack}
        options={{
          tabBarLabel: t('settings'),
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="settings"
              color={color}
              size={size}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();

            // Uses MainTabs stack navigator to navigate to emergency modal
            navigation.navigate(routes.emergencyModal);
          },
        })}
        name={routes.main.emergency}
        component={FakeScreen}
        options={{
          tabBarLabel: '',
          // eslint-disable-next-line no-unused-vars
          tabBarIcon: () => (
            <View
              style={{
                position: 'absolute',
                bottom: 2, // space from bottombar
                height: 64,
                width: 64,
                borderRadius: 100,
                backgroundColor: colors.primaryLight,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: 'black',
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
                shadowOpacity: 0.3,
                shadowRadius: 7,
              }}
            >
              <MaterialCommunityIcons
                name="alert-outline"
                color={colors.primary}
                size={40}
                style={{
                  top: 8,
                  left: 10,
                  width: 60,
                  height: 60,
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

const MainTabs = () => (
  <Stack.Navigator
    name={routes.mainTabs}
    initialRouteName="tabs"
    screenOptions={{ headerShown: false }}
    mode="modal"
  >
    <Tabs.Screen name="tabs" component={AppTabs} />
    <Tabs.Screen name="EMERGENCY_MODAL" component={EmergencyScreen} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    height: 85,
    paddingHorizontal: 30,
  },
  tabs: {
    height: 55,
  },
  icon: {
    marginTop: 11,
  },
});

export default MainTabs;
