import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function RightsTitle({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>{'Know Your Rights'}</Text>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}

RightsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 15,
  },
  subText: {
    fontSize: 10,
    textTransform: 'uppercase',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
