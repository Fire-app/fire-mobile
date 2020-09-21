import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors, textStyles } from '../../styles';

export default function ResourcesLanguages({ title, languages }) {
  return (
    <View style={styles.languageContainer}>
      <Text style={textStyles.h3}>{title}</Text>
      <View style={{ height: 5 }} />
      <View>
        <Text style={[textStyles.body1, colors.textLight]}>{languages}</Text>
      </View>
    </View>
  );
}

ResourcesLanguages.propTypes = {
  languages: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  languageContainer: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 4,
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 15,
    padding: 1,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
});
