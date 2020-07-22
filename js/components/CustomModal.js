/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { SecondaryButton } from './Buttons';

const CustomModal = ({ children, buttonTitle, isVisible, setIsVisible }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalRevealButton}>
        <SecondaryButton
          title={buttonTitle}
          onPress={() => setIsVisible(true)}
        />
      </View>
      <Modal transparent animationType="fade" visible={isVisible}>
        <KeyboardAvoidingView style={{ flexGrow: 1 }} behavior="padding">
          <View style={{ flex: 1 }}>
            <ScrollView
              alwaysBounceVertical={false}
              style={{ flex: 1 }}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              <View style={styles.modalContainer}>
                <View style={styles.contentContainer}>{children}</View>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default CustomModal;

const styles = StyleSheet.create({
  modalRevealButton: {
    alignItems: 'flex-end',
    padding: 10,
  },
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#00000080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
  },
});
