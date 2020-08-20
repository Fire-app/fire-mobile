/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  ViewPropTypes,
} from 'react-native';
import { ButtonProp, PrimarySecondaryOptions } from './Buttons';

const CustomModal = ({
  children,
  isVisible,
  primaryButton,
  secondaryButton,
  contentContainerStyle,
}) => (
  <Modal transparent animationType="fade" visible={isVisible}>
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <View style={styles.modalContainer}>
        <View style={[styles.contentContainer, contentContainerStyle]}>
          <ScrollView alwaysBounceVertical={false} style={{ flexGrow: 1 }}>
            {children}
            <PrimarySecondaryOptions
              primaryButton={primaryButton}
              secondaryButton={secondaryButton}
            />
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  </Modal>
);

CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  /* eslint-disable react/require-default-props */
  primaryButton: ButtonProp,
  secondaryButton: ButtonProp,
  contentContainerStyle: ViewPropTypes.style,
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 28,
    backgroundColor: '#00000080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    maxHeight: '90%',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
  },
});
