import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Proptypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/textStyles';
// import { useTranslation } from 'react-i18next';

export default function EmergencyButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={buttonStyles.EmergencyButton}
      onPress={() => onPress()}
    >
      <Text style={[styles.h2, { color: 'white' }, { textAlign: 'center' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

EmergencyButton.propTypes = {
  title: Proptypes.string.isRequired,
  onPress: Proptypes.func.isRequired,
};

const buttonStyles = StyleSheet.create({
  EmergencyButton: {
    backgroundColor: '#333333',
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 3,
  },
  // ButtonText: {
  //   color: 'ffffff',
  // },
});
