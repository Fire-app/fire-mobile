/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { textStyles, colors } from '../styles';
import ModalButtons from './ModalButtons';

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
              <Text style={[textStyles.h2, { paddingBottom: 10 }]}>
                {t('attorney_default_title')}
              </Text>
              <Text style={textStyles.body1}>
                {t('attorney_default_subtitle')}
              </Text>
            </View>
            <ModalButtons
              onRightPress={() => setIsVisible(false)}
              onLeftPress={onSubmit}
              rightTitle={t('cancel')}
              leftTitle={t('use_chirla')}
            />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
  },
  contentContainer: {
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
});
