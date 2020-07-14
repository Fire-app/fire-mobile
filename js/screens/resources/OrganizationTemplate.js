import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Constants from 'expo-constants';

export default function resourceDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'This is the Emergency pop-up!'}</Text>
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
