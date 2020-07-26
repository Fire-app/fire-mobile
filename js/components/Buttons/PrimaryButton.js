import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { textStyles, colors } from '../../styles';

const PrimaryButton = ({ title, onPress, disabled, darkMode }) => (
  <Button
    title={title}
    onPress={onPress}
    disabled={disabled}
    darkMode={darkMode}
    containerStyle={{ flexGrow: 1 }}
    titleStyle={StyleSheet.flatten([textStyles.h2, { color: 'white' }])}
    buttonStyle={
      darkMode
        ? {
            borderRadius: 3,
            backgroundColor: colors.charcoalGrey,
            paddingHorizontal: 48,
            paddingVertical: 16,
            marginBottom: 10,
          }
        : {
            borderRadius: 3,
            backgroundColor: colors.primary,
            padding: 16,
          }
    }
  />
);

PrimaryButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  darkMode: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  disabled: false,
  darkMode: false,
};

export default PrimaryButton;
