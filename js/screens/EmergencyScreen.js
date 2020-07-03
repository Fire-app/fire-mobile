/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from 'expo-constants';
import styles from '../styles/textStyles';
import EmergencyButton from '../components/EmergencyButton';

export default function Alerts() {
  return (
    <View style={localstyles.container}>
      <View style={localstyles.titleRow}>
        <MaterialCommunityIcons name="alert-outline" color="orange" size={30} />
        <Text style={styles.h1}>{' Emergency Toolkit'}</Text>
      </View>
      <View style={localstyles.buttonStack}>
        <EmergencyButton
          title="Emergency Hotline"
          onPress={() => Alert.alert('hotline pressed')}
        />
        <EmergencyButton
          title="Rights Card"
          onPress={() => Alert.alert('rights pressed')}
        />
      </View>
    </View>
  );
}

const localstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  titleRow: {
    flexDirection: 'row',
  },
  buttonStack: {
    flexDirection: 'column',
    paddingTop: 20,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
