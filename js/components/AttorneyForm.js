import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { textStyles, colors } from '../styles';
import setAttorneyNameAction from '../store/actions/settings/setAttorneyNameAction';
import setAttorneyNumberAction from '../store/actions/settings/setAttorneyNumberAction';
import NoAttorneyModal from './NoAttorneyModal';

const DEFAULT_ATTORNEY = 'CHIRLA Hotline';
const DEFAULT_NUMBER = '2133531333';

const AttorneyForm = ({ shouldFormSubmit, setInputValidated }) => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    validateInput();
    if (shouldFormSubmit) {
      dispatch(setAttorneyNameAction(name));
      dispatch(setAttorneyNumberAction(phoneNumber));
    }
  });

  const [nameIsValid, setNameIsValid] = useState('false');
  const [numberIsValid, setNumberIsValid] = useState('false');
  const validateInput = () => {
    if (name.trim().length > 0) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
    if (
      phoneNumber.trim().length === 10 &&
      // eslint-disable-next-line no-restricted-globals
      !isNaN(phoneNumber.replace('.', ''))
    ) {
      setNumberIsValid(true);
    } else {
      setNumberIsValid(false);
    }
    if (nameIsValid && numberIsValid) {
      setInputValidated(true);
    } else {
      setInputValidated(false);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const onModalSubmit = () => {
    setName(DEFAULT_ATTORNEY);
    setPhoneNumber(DEFAULT_NUMBER);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={[textStyles.h3, styles.title]}>{t('attorney_name')}</Text>
        {!nameIsValid && (
          <Text style={[textStyles.body1, styles.errorText]}>
            {'Attorney name field cannot be empty'}
          </Text>
        )}
        <TextInput
          style={[
            textStyles.h2,
            styles.textInput,
            nameIsValid ? styles.noErrorBorder : styles.errorBorder,
          ]}
          onChangeText={(text) => setName(text)}
          defaultValue={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[textStyles.h3, styles.title]}>{t('phone_number')}</Text>
        {!numberIsValid && (
          <Text style={[textStyles.body1, styles.errorText]}>
            {'Please enter a valid phone number'}
          </Text>
        )}
        <TextInput
          style={[
            textStyles.h2,
            styles.textInput,
            numberIsValid ? styles.noErrorBorder : styles.errorBorder,
          ]}
          keyboardType="numeric"
          onChangeText={(text) => setPhoneNumber(text)}
          defaultValue={phoneNumber}
        />
      </View>
      <NoAttorneyModal
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
        onSubmit={onModalSubmit}
      />
    </View>
  );
};

AttorneyForm.propTypes = {
  shouldFormSubmit: PropTypes.bool.isRequired,
  setInputValidated: PropTypes.func.isRequired,
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
    borderRadius: 3,
    paddingHorizontal: 10,
    color: colors.text,
  },
  title: {
    paddingBottom: 5,
    color: colors.text,
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
  noErrorBorder: {
    borderColor: 'gray',
  },
  errorBorder: {
    borderColor: 'red',
  },
});
