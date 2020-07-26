import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../styles';

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
        keyboardType={keyboardType}
        onChangeText={(text) => setValue(text)}
        defaultValue={value}
        onBlur={validate(value)}
      />
    </View>
  );
};

PrimaryInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  validate: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  keyboardType: PropTypes.string.isRequired,
};

export default PrimaryInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 3,
    paddingHorizontal: 12,
    paddingVertical: 15,
    color: colors.charcoalGrey,
  },
  title: {
    paddingBottom: 5,
    color: colors.charcoalGrey,
  },
  noAttorney: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    paddingBottom: 4,
  },
});
