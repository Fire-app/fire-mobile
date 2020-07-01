/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import routes from '../../navigation/routes';

const onBoardingRoutes = routes.onboarding;

const AttorneyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'AttorneyScreen'}</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
      <Button
        title="Next"
        onPress={() => navigation.navigate(onBoardingRoutes.complete)}
      />
    </View>
  );
};

AttorneyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default AttorneyScreen;

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
