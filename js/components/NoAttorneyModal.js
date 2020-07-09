/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { textStyles, colors } from '../styles';
import OnboardingButtons from './OnboardingButtons';

const NoAttorneyModal = ({ isVisible, setIsVisible, onSubmit }) => {
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
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.contentContainer}>
              <Text style={[textStyles.h2, { paddingBottom: 20 }]}>
                {t('attorney_default_title')}
              </Text>
              <Text style={textStyles.body1}>
                {t('attorney_default_subtitle')}
              </Text>
            </View>
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

NoAttorneyModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NoAttorneyModal;

const styles = StyleSheet.create({
  noAttorneyButton: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#00000080',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  innerContainer: {
    height: '35%',
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 3,
  },
  contentContainer: {
    flex: 1,
    flexGrow: 2.5,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    paddingBottom: 10,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flex: 1,
    alignSelf: 'stretch',
    margin: 5,
  },
});
