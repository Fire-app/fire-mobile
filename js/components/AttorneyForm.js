import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { textStyles, colors } from '../styles';
import setAttorneyNameAction from '../store/actions/attorney/setAttorneyNameAction';
import setAttorneyNumberAction from '../store/actions/attorney/setAttorneyNumberAction';

const AttorneyForm = ({ isDefault }) => {
  const { t } = useTranslation();
  const [attorneyName, setAttorneyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const reduxStateName = useSelector((state) => state.attorney.name);

  const dispatch = useDispatch();
  const saveName = () => dispatch(setAttorneyNameAction(attorneyName));
  const savePhoneNumber = () => dispatch(setAttorneyNumberAction(phoneNumber));

  const onChangeName = (text) => {
    if (isDefault) {
      setAttorneyName('CHIRLA Hotline');
    } else {
      setAttorneyName(text);
    }
  };

  const onChangeNumber = (text) => {
    if (isDefault) {
      setPhoneNumber('(213)-353-1333');
    } else {
      setPhoneNumber(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={[textStyles.h3, styles.title]}>{t('attorney_name')}</Text>
        <TextInput
          style={[textStyles.h2, styles.textInput]}
          onChangeText={onChangeName}
          defaultValue={attorneyName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[textStyles.h3, styles.title]}>{t('phone_number')}</Text>
        <TextInput
          style={[textStyles.h2, styles.textInput]}
          onChangeText={onChangeNumber}
          defaultValue={phoneNumber}
        />
      </View>
      {/* <Button title="Save Name" onPress={saveName} />
      <Button title="Save Phone Number" onPress={savePhoneNumber} /> */}
    </View>
  );
};

AttorneyForm.propTypes = {
  isDefault: PropTypes.bool.isRequired,
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
