/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// eslint-disable-next-line react/prop-types
const CompleteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'CompleteScreen'}</Text>
    </View>
  );
};

export default CompleteScreen;

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
