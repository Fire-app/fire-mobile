/* eslint-disable global-require */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../styles';

const PrimaryButton = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 120,
          paddingVertical: 20,
          borderRadius: 3,
          backgroundColor: colors.primary,
        }}
      >
        <Text style={[textStyles.h3, { color: 'white' }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default PrimaryButton;
