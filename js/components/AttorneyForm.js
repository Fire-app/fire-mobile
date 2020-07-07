import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { textStyles, colors } from '../styles';

const AttorneyForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  isLocked,
}) => {
  const { t } = useTranslation();

  const updateName = (text) => {
    if (isLocked) {
      setName('CHIRLA');
    } else {
      setName(text);
    }
  };

  const updateNumber = (text) => {
    if (isLocked) {
      setPhoneNumber('1234567890');
    } else {
      setPhoneNumber(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{isLocked ? 'true' : 'false'}</Text>
      <View style={styles.inputContainer}>
        <Text style={[textStyles.h3, styles.title]}>{t('attorney_name')}</Text>
        <TextInput
          style={[textStyles.h2, styles.textInput]}
          onChangeText={updateName}
          defaultValue={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[textStyles.h3, styles.title]}>{t('phone_number')}</Text>
        <TextInput
          style={[textStyles.h2, styles.textInput]}
          keyboardType="numeric"
          onChangeText={updateNumber}
          defaultValue={phoneNumber}
        />
      </View>
    </View>
  );
};

AttorneyForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  isLocked: PropTypes.bool.isRequired,
};

export default AttorneyForm;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingRight: 10,
  },
  inputContainer: {
    paddingBottom: 15,
  },
  textInput: {
    height: 55,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    borderRadius: 3,
    paddingHorizontal: 10,
    color: colors.text,
  },
  title: {
    paddingBottom: 5,
    color: colors.text,
  },
});
