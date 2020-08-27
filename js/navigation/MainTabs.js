/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import React from 'react';
import EmergencyScreen from '../screens/EmergencyScreen';
import { colors, textStyles } from '../styles';
import ResourcesStack from './ResourcesStack';
import RightsStack from './RightsStack';
import SettingsStack from './SettingsStack';
import routes from './routes';
import FireIcon, { ICON_NAMES } from '../components/FireIcon';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const FakeScreen = () => null;

const AppTabs = () => {
  const { t } = useTranslation();
  return (
    <Tabs.Navigator
      initialRouteName={routes.main.rights} // TODO: what is this
      name="FOO"
      tabBarOptions={{
        activeTintColor: colors.charcoalGrey,
        inactiveTintColor: colors.warmGrey,
        labelStyle: textStyles.tabLabel,
        style: styles.tabBar,
        tabStyle: { height: 56 },
      }}
    >
      <Tabs.Screen
        component={RightsStack}
        name={routes.main.rights}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FireIcon
              color={color}
              name={ICON_NAMES.SHIELD}
              size={size}
              style={styles.icon}
            />
          ),

          tabBarLabel: t('tab_rights'),
        }}
      />
      <Tabs.Screen
        component={ResourcesStack}
        name={routes.main.resources}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FireIcon
              color={color}
              name={ICON_NAMES.USERS}
              size={size}
              style={styles.icon}
            />
          ),

          tabBarLabel: t('tab_resources'),
        }}
      />
      <Tabs.Screen
        component={SettingsStack}
        name={routes.main.settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FireIcon
              color={color}
              name={ICON_NAMES.GEAR}
              size={size}
              style={styles.icon}
            />
          ),

          tabBarLabel: t('settings'),
        }}
      />
      <Tabs.Screen
        component={FakeScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();

            // Uses MainTabs stack navigator to navigate to emergency modal
            navigation.navigate(routes.emergencyModal);
          },
        })}
        name={routes.main.emergency}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                alignItems: 'center',
                backgroundColor: colors.primary,
                borderRadius: 100,
                height: 64,
                justifyContent: 'center',
                position: 'absolute',
                width: 64,
              }}
            >
              <FireIcon
                color={colors.white}
                name={ICON_NAMES.ALERT}
                size={40}
                style={{
                  alignContent: 'center',
                }}
              />
            </View>
          ),
          tabBarLabel: '',
        }}
      />
    </Tabs.Navigator>
  );
};

const MainTabs = () => (
  <Stack.Navigator
    initialRouteName="tabs"
    mode="modal"
    name={routes.mainTabs}
    screenOptions={{ headerShown: false }}
  >
    <Tabs.Screen component={AppTabs} name="tabs" />
    <Tabs.Screen component={EmergencyScreen} name="EMERGENCY_MODAL" />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  icon: {
    marginTop: 11,
  },
  tabBar: {
    height: 86,
    paddingHorizontal: 28,
    paddingVertical: 4,
  },
});

export default MainTabs;
