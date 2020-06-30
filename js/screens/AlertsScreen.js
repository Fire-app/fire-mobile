/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { textStyles } from '../styles';

export default function Alerts() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.h1}>{'This is the Alerts page!'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
