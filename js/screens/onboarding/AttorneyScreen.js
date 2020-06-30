/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import routes from '../../navigation/routes';

const onBoardingRoutes = routes.onboarding;

// eslint-disable-next-line react/prop-types
const AttorneyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'AttorneyScreen'}</Text>
      <Button
        title="Next"
        // eslint-disable-next-line react/prop-types
        onPress={() => navigation.navigate(onBoardingRoutes.complete)}
      />
    </View>
  );
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
