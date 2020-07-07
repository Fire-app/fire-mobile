/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import completeOnboardingAction from '../../store/actions/completeOnboarding';

export default function ExampleOnboardingScreen() {
  const dispatch = useDispatch();
  // This will set 'onboarding.complete: true' in the store.
  // in navigation/index.js this will cause us to enter the main app
  const exitOnboarding = () => dispatch(completeOnboardingAction());
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {"You are seeing this screen because it's your first time in the app!"}
      </Text>
      <Button title="Whatever, let me into the app!" onPress={exitOnboarding} />
    </View>
  );
}

ExampleOnboardingScreen.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

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
