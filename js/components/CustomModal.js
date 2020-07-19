/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
import { textStyles, colors } from '../styles';

const CustomModal = ({ children, buttonTitle, isVisible, setIsVisible }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.noAttorneyButton}
        onPress={() => setIsVisible(true)}
      >
        <Text style={[textStyles.h3, { color: colors.primary }]}>
          {buttonTitle}
        </Text>
      </TouchableOpacity>
      <Modal transparent animationType="fade" visible={isVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>{children}</View>
        </View>
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
  noAttorneyButton: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#00000080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
  },
});
