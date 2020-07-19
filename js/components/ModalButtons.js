import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../styles';

const ModalButtons = ({ onRightPress, onLeftPress, rightTitle, leftTitle }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <TouchableOpacity onPress={onRightPress}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: 'white',
            },
          ]}
        >
          <Text style={[textStyles.h3, { color: colors.primary }]}>
            {rightTitle}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ padding: 10 }} />
      <TouchableOpacity onPress={onLeftPress}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: colors.primary,
            },
          ]}
        >
          <Text style={[textStyles.h3, { color: 'white' }]}>{leftTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

ModalButtons.propTypes = {
  onRightPress: PropTypes.func.isRequired,
  onLeftPress: PropTypes.func.isRequired,
  rightTitle: PropTypes.string.isRequired,
  leftTitle: PropTypes.string.isRequired,
};

export default ModalButtons;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderRadius: 3,
  },
});
