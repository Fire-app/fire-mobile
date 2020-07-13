import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../../styles';

const SecondaryButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[textStyles.h3, { color: colors.primary }]}>{title}</Text>
  </TouchableOpacity>
);

SecondaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SecondaryButton;
