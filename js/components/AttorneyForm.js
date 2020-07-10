import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import NoAttorneyModal from './NoAttorneyModal';
import PrimaryInput from './PrimaryInput';
import { SecondaryButton } from './Buttons';

const DEFAULT_ATTORNEY = 'CHIRLA Hotline';
const DEFAULT_NUMBER = '2133531333';

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

  const [modalVisible, setModalVisible] = useState(false);
  const onModalSubmit = () => {
    setName(DEFAULT_ATTORNEY);
    setNumber(DEFAULT_NUMBER);
    setModalVisible(false);
  };

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
    <View>
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
      <SecondaryButton
        title={t('no_attorney')}
        onPress={() => setModalVisible(true)}
      />
      <NoAttorneyModal
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
        onSubmit={onModalSubmit}
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
