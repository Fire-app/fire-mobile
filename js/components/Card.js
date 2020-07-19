import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

export default function Card({ children, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={() => onPress()}>
      {children}
    </TouchableOpacity>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  /* eslint-disable react/require-default-props */
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#eeeeee',
  },
});
