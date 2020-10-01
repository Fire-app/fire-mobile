import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../../styles';

const ResourcesTextBox = ({ title, text }) => {
  return (
    <View style={styles.container}>
      <Text style={textStyles.h3}>{title}</Text>
      <View style={{ height: 5 }} />
      <Text style={[textStyles.body1, colors.charcoalGrey]}>{text}</Text>
    </View>
  );
};

ResourcesTextBox.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ResourcesTextBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 4,
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
