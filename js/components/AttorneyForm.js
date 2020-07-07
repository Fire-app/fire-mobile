import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { textStyles, colors } from '../styles';
import setAttorneyNameAction from '../store/actions/settings/setAttorneyNameAction';
import setAttorneyNumberAction from '../store/actions/settings/setAttorneyNumberAction';
import AttorneyModal from './AttorneyModal';

const AttorneyForm = ({ shouldFormSubmit }) => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (shouldFormSubmit) {
      dispatch(setAttorneyNameAction(name));
      dispatch(setAttorneyNumberAction(phoneNumber));
    }
  });

  const [modalVisible, setModalVisible] = useState(false);
  const onModalSubmit = () => {
    setName('CHIRLA Hotline');
    setPhoneNumber('1234567890');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <AttorneyModal
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
        onSubmit={onModalSubmit}
      />
      <View style={styles.inputContainer}>
        <Text style={[textStyles.h3, styles.title]}>{t('attorney_name')}</Text>
        <TextInput
          style={[textStyles.h2, styles.textInput]}
          onChangeText={(text) => setName(text)}
          defaultValue={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[textStyles.h3, styles.title]}>{t('phone_number')}</Text>
        <TextInput
          style={[textStyles.h2, styles.textInput]}
          keyboardType="numeric"
          onChangeText={(text) => setPhoneNumber(text)}
          defaultValue={phoneNumber}
        />
      </View>
      <TouchableOpacity
        style={styles.noAttorney}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[textStyles.h3, { color: colors.primary }]}>
          {t('no_attorney')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

AttorneyForm.propTypes = {
  shouldFormSubmit: PropTypes.bool.isRequired,
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
  noAttorney: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
});
