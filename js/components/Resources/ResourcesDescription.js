import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../../styles';

const ResourcesDescription = ({ title, text }) => {
  return (
    <View style={styles.container}>
      <Text style={textStyles.h3}>{title}</Text>
      <View style={{ height: 5 }} />
      <View>
        <Text style={[textStyles.body1, colors.charcoalGrey]}>{text}</Text>
      </View>
    </View>
  );
};

ResourcesDescription.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ResourcesDescription;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 4,
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 1,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
});
