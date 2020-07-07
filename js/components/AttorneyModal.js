/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Modal, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { textStyles } from '../styles';
import OnboardingButtons from './OnboardingButtons';

const AttorneyModal = ({ isVisible, setIsVisible, onSubmit }) => {
  const { t } = useTranslation();
  return (
    <Modal
      transparent
      animationType="fade"
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={[styles.padding, textStyles.h2]}>
            {t('attorney_default_title')}
          </Text>
          <Text style={[styles.padding, textStyles.body1]}>
            {t('attorney_default_subtitle')}
          </Text>
          <View style={styles.buttonContainer}>
            <OnboardingButtons
              onRightPress={() => setIsVisible(false)}
              onLeftPress={onSubmit}
              rightTitle={t('cancel')}
              leftTitle={t('use_chirla')}
              nextIsDisabled={false}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

AttorneyModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AttorneyModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  innerContainer: {
    height: '35%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 30,
  },
  buttonContainer: {
    height: '24%',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  padding: {
    paddingBottom: 20,
  },
});
