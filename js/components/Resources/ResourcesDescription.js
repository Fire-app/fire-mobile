import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../../styles';

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
    paddingBottom: 20,
    paddingTop: 20,
    width: '100%',
  },
  subtitle: {
    color: colors.subtext,
  },
});
