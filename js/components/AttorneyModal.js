/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { textStyles, colors } from '../styles';
import OnboardingButtons from './OnboardingButtons';

const AttorneyModal = ({ isVisible, setIsVisible, onSubmit }) => {
  const { t } = useTranslation();
  return (
    <View>
      <TouchableOpacity
        style={styles.noAttorneyButton}
        onPress={() => setIsVisible(true)}
      >
        <Text style={[textStyles.h3, { color: colors.primary }]}>
          {t('no_attorney')}
        </Text>
      </TouchableOpacity>
      <Modal transparent animationType="fade" visible={isVisible}>
        <View style={styles.modalContainer}>
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
    </View>
  );
};

AttorneyModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AttorneyModal;

const styles = StyleSheet.create({
  noAttorneyButton: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  innerContainer: {
    height: '35%',
    width: '90%',
    backgroundColor: 'white',
    justifyContent: 'center',
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
