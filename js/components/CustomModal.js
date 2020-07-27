/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Modal } from 'react-native';
import { ButtonProp, PrimarySecondaryOptions } from './Buttons';

const CustomModal = ({
  children,
  isVisible,
  primaryButton,
  secondaryButton,
}) => (
  <Modal transparent animationType="fade" visible={isVisible}>
    <View style={styles.modalContainer}>
      <View style={styles.contentContainer}>
        {children}
        <PrimarySecondaryOptions
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
        />
      </View>
    </View>
  </Modal>
);

CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  primaryButton: ButtonProp.isRequired,
  // eslint-disable-next-line react/require-default-props
  secondaryButton: ButtonProp,
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    padding: 20,
    backgroundColor: '#00000080',
    alignItems: 'center',
    justifyContent: 'center',
    // explicitly defined to be full screen without flex
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    position: 'absolute',
  },
});
