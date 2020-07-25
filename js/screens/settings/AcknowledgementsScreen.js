import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles } from '../../styles';

const AcknowledgementsScreen = () => {
  return (
    <View style={styles.container}>
      {/* TODO: */}
      <Text style={[textStyles.h1, { textAlign: 'center' }]}>
        {'This is the Acknowledgements screen!'}
      </Text>
    </View>
  );
};

AcknowledgementsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AcknowledgementsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
