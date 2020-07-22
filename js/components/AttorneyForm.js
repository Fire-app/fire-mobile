import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import PrimaryInput from './PrimaryInput';

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
    <View style={{ alignSelf: 'stretch' }}>
      <PrimaryInput
        label={t('attorney_name')}
        value={name}
        setValue={setName}
        isInvalid={nameIsInvalid}
        validate={validateName}
        errorMessage={t('attorney_name_error')}
        keyboardType="default"
      />
      <PrimaryInput
        label={t('phone_number')}
        value={number}
        setValue={setNumber}
        isInvalid={numberIsInvalid}
        validate={validateNumber}
        errorMessage={t('phone_number_error')}
        keyboardType="numeric"
      />
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
