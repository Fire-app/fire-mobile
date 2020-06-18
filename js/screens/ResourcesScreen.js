/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Constants from 'expo-constants';

export default function Resources() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'This is the Resources page!'}</Text>
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
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
