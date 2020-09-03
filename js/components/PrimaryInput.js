import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../styles';

const PrimaryInput = ({
  label,
  value,
  setValue,
  isInvalid,
  validate,
  errorMessage,
  keyboardType,
}) => {
  return (
    <View
      style={{
        paddingBottom: 15,
      }}
    >
      <Text style={[textStyles.h3, styles.title]}>{label}</Text>
      {isInvalid && (
        <Text style={[textStyles.body1, styles.errorText]}>{errorMessage}</Text>
      )}
      <TextInput
        defaultValue={value}
        keyboardType={keyboardType}
        onBlur={validate(value)}
        onChangeText={(text) => setValue(text)}
        style={[
          textStyles.h2,
          styles.textInput,
          isInvalid
            ? {
                borderColor: 'red',
              }
            : {
                borderColor: 'gray',
              },
        ]}
      />
    </View>
  );
};

PrimaryInput.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  keyboardType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PrimaryInput;

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 14,
    paddingBottom: 4,
  },
  textInput: {
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    color: colors.charcoalGrey,
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  title: {
    color: colors.charcoalGrey,
    paddingBottom: 5,
  },
});
