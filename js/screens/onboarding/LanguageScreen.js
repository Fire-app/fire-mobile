/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import routes from '../../navigation/routes';

const onBoardingRoutes = routes.onboarding;

const LanguageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'LanguageScreen'}</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
      <Button
        title="Next"
        onPress={() => navigation.navigate(onBoardingRoutes.hotline)}
      />
    </View>
  );
};

LanguageScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default LanguageScreen;

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
