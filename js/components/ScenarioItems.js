import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { colors, textStyles } from '../styles';

export default function ScenarioItems({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={textStyles.h3}>{title}</Text>
      <Text
        style={[
          textStyles.body1,
          { color: colors.textLight, paddingVertical: 2 },
        ]}
      >
        {subtitle}
      </Text>
    </View>
  );
}

ScenarioItems.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 3,
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 6,
    width: '100%',
  },
});
