import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const HotlineSelectionScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{'HotlineSelection'}</Text>
    </View>
  );
};

HotlineSelectionScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HotlineSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
