import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import PrimaryInput from './PrimaryInput';
import { isValid } from '../util/phoneNumber';

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
    if (isValid(_number)) {
      setNumberIsInvalid(false);
    } else {
      setNumberIsInvalid(true);
    }
  };

  return (
    <View style={{ alignSelf: 'stretch' }}>
      <PrimaryInput
        errorMessage={t('attorney_name_error')}
        isInvalid={nameIsInvalid}
        keyboardType="default"
        label={t('attorney_name')}
        setValue={setName}
        validate={validateName}
        value={name}
      />
      <PrimaryInput
        errorMessage={t('phone_number_error')}
        isInvalid={numberIsInvalid}
        keyboardType="numeric"
        label={t('phone_number')}
        setValue={setNumber}
        validate={validateNumber}
        value={number}
      />
    </View>
  );
};

AttorneyForm.propTypes = {
  name: PropTypes.string.isRequired,
  nameIsInvalid: PropTypes.bool.isRequired,
  number: PropTypes.string.isRequired,
  numberIsInvalid: PropTypes.bool.isRequired,
  setName: PropTypes.func.isRequired,
  setNameIsInvalid: PropTypes.func.isRequired,
  setNumber: PropTypes.func.isRequired,
  setNumberIsInvalid: PropTypes.func.isRequired,
};

export default AttorneyForm;
