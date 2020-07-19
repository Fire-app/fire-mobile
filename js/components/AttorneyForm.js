import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { textStyles, colors } from '../styles';

const AttorneyInput = ({
  label,
  value,
  setValue,
  isInvalid,
  validate,
  errorMessage,
  keyboardType,
  placeholder,
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
          textStyles.h3,
          styles.textInput,
          isInvalid
            ? {
                borderColor: 'red',
              }
            : {
                borderColor: 'gray',
              },
        ]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={(text) => setValue(text)}
        defaultValue={value}
        onBlur={validate(value)}
      />
    </View>
  );
};

AttorneyInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  validate: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  keyboardType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

const AttorneyForm = ({
  name,
  setName,
  number,
  setNumber,
  nameIsInvalid,
  setNameIsInvalid,
  numberIsInvalid,
  setNumberIsInvalid,
}) => {
  const { t } = useTranslation();

  const validateName = (_name) => {
    if (_name.trim().length > 0) {
      setNameIsInvalid(false);
    } else {
      setNameIsInvalid(true);
    }
  };

  const validateNumber = (_number) => {
    // eslint-disable-next-line no-restricted-globals
    if (_number.trim().length === 10 && !isNaN(_number.replace('.', ''))) {
      setNumberIsInvalid(false);
    } else {
      setNumberIsInvalid(true);
    }
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.container}>
        <AttorneyInput
          label={t('attorney_name')}
          value={name}
          setValue={setName}
          isInvalid={nameIsInvalid}
          validate={validateName}
          errorMessage={t('attorney_name_error')}
          keyboardType="default"
          placeholder="Enter your attorney's name"
        />
        <AttorneyInput
          label={t('phone_number')}
          value={number}
          setValue={setNumber}
          isInvalid={numberIsInvalid}
          validate={validateNumber}
          errorMessage={t('phone_number_error')}
          keyboardType="numeric"
          placeholder="Enter your attorney's phone number"
        />
      </View>
    </View>
  );
};

AttorneyForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setNumber: PropTypes.func.isRequired,
  nameIsInvalid: PropTypes.bool.isRequired,
  setNameIsInvalid: PropTypes.func.isRequired,
  numberIsInvalid: PropTypes.bool.isRequired,
  setNumberIsInvalid: PropTypes.func.isRequired,
};

export default AttorneyForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 5,
    paddingRight: 10,
  },
  textInput: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 3,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: colors.text,
  },
  title: {
    paddingBottom: 5,
    color: colors.text,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    paddingBottom: 4,
  },
});
