import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { textStyles, colors } from '../styles';
import setAttorneyNameAction from '../store/actions/attorney/setAttorneyNameAction';

const AttorneyForm = () => {
  const { t } = useTranslation();
  const [attorneyName, setAttorneyName] = useState('CHIRLA Hotline');
  const [phoneNumber, setPhoneNumber] = useState('(213) 353-1333');
  const reduxStateName = useSelector((state) => state.attorney.name);

  const dispatch = useDispatch();
  const saveName = () => dispatch(setAttorneyNameAction(attorneyName));

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={[textStyles.h3, styles.title]}>{t('attorney_name')}</Text>
        <TextInput
          style={[textStyles.h2, styles.textInput]}
          onChangeText={(text) => setAttorneyName(text)}
          defaultValue={attorneyName}
        />
      </View>
      <Text style={[textStyles.h3, styles.title]}>
        {reduxStateName || 'foo'}
      </Text>
      <Button title="submit" onPress={saveName} />

      {/* <View style={styles.inputContainer}>
        <Text style={[textStyles.h3, styles.title]}>{t('phone_number')}</Text>
        <TextInput
          style={[textStyles.h2, styles.textInput]}
          onChangeText={(text) => setPhoneNumber(text)}
          defaultValue={phoneNumber}
        />
      </View> */}
    </View>
  );
};

AttorneyForm.propTypes = {};

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
