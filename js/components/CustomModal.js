import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { ButtonProp, PrimarySecondaryOptions } from './Buttons';

const CustomModal = ({
  children,
  isVisible,
  primaryButton,
  secondaryButton,
  contentContainerStyle,
}) => (
  <Modal animationType="fade" transparent visible={isVisible}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flexGrow: 1 }}
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
  contentContainerStyle: ViewPropTypes.style,
  isVisible: PropTypes.bool.isRequired,
  primaryButton: ButtonProp,
  secondaryButton: ButtonProp,
};

export default CustomModal;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    borderRadius: 3,
    justifyContent: 'center',
    maxHeight: '90%',
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: '100%',
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: '#00000080',
    flex: 1,
    justifyContent: 'center',
    padding: 28,
  },
});
