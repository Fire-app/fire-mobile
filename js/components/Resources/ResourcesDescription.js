import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../../styles';

const ResourcesDescription = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={[textStyles.body1, styles.subtitle]}>{text}</Text>
    </View>
  );
};

ResourcesDescription.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ResourcesDescription;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
  },
  subtitle: {
    color: colors.subtext,
  },
});
