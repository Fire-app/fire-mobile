import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles } from '../../styles';

const PartnersInfoScreen = () => {
  return (
    <View style={styles.container}>
      {/* TODO: */}
      <Text style={[textStyles.h1, { textAlign: 'center' }]}>
        {'This is the Rapid Response Network Partners screen!'}
      </Text>
    </View>
  );
};

PartnersInfoScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default PartnersInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
