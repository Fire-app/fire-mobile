import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { textStyles, colors } from '../../styles';

const titleStyle = StyleSheet.flatten([textStyles.h3, { color: 'white' }]);
const PrimaryButton = ({ title, onPress, disabled }) => (
  <Button
    title={title}
    onPress={onPress}
    disabled={disabled}
    titleStyle={titleStyle}
    buttonStyle={{
      borderRadius: 3,
      backgroundColor: colors.primary,
      padding: 16,
    }}
  />
);

PrimaryButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  disabled: false,
};

export default PrimaryButton;
