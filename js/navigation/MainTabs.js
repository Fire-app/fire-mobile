/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import React from 'react';
import EmergencyScreen from '../screens/EmergencyScreen';
import { colors, textStyles, shadows } from '../styles';
import ResourcesStack from './ResourcesStack';
import RightsStack from './RightsStack';
import SettingsStack from './SettingsStack';
import routes from './routes';
import FireIcon, { ICON_NAMES } from '../components/FireIcon';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const FakeScreen = () => null;

const CreateTabLabel = (title) => ({ color }) => (
  // adjustsFontSizeToFit + numberOfLines allows this to scale nicely on smaller devices
  <Text
    adjustsFontSizeToFit
    maxFontSizeMultiplier={1.2}
    numberOfLines={1}
    style={{ color }}
  >
    {title}
  </Text>
);
const CreateTabIcon = (iconName) => ({ color, size }) => (
  <FireIcon
    color={color}
    maxFontSizeMultiplier={1}
    name={iconName}
    size={size}
    style={styles.icon}
  />
);

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
        tabStyle: { height: 60 },
      }}
    >
      <Tabs.Screen
        component={RightsStack}
        name={routes.main.rights}
        options={{
          tabBarIcon: CreateTabIcon(ICON_NAMES.SHIELD),
          tabBarLabel: CreateTabLabel(t('rights')),
        }}
      />
      <Tabs.Screen
        component={ResourcesStack}
        name={routes.main.resources}
        options={{
          tabBarIcon: CreateTabIcon(ICON_NAMES.USERS),
          tabBarLabel: CreateTabLabel(t('resources')),
        }}
      />
      <Tabs.Screen
        component={SettingsStack}
        name={routes.main.settings}
        options={{
          tabBarIcon: CreateTabIcon(ICON_NAMES.GEAR),
          tabBarLabel: CreateTabLabel(t('settings')),
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
              style={[
                {
                  alignItems: 'center',
                  backgroundColor: colors.primary,
                  borderRadius: 100,
                  elevation: 5,
                  justifyContent: 'center',
                  padding: 12,
                  position: 'absolute',
                },
                shadows.default,
              ]}
            >
              <View
                style={{
                  alignItems: 'center',
                  aspectRatio: 1,
                  justifyContent: 'center',
                }}
              >
                <FireIcon
                  color={colors.white}
                  maxFontSizeMultiplier={1.2}
                  name={ICON_NAMES.ALERT}
                  size={40}
                  style={{
                    alignContent: 'center',
                  }}
                />
              </View>
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

const windowWidth = Dimensions.get('window').width;
const isWide = windowWidth > 380;

const styles = StyleSheet.create({
  icon: {
    marginTop: 11,
  },
  tabBar: {
    height: 86,
    paddingHorizontal: isWide ? 20 : 10,
    paddingVertical: 4,
  },
});

export default MainTabs;
