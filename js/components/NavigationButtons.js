import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../styles';

const NavigationButtons = ({
  onRightPress,
  onLeftPress,
  rightTitle,
  leftTitle,
  nextIsDisabled,
  hasLongTitle,
}) => {
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
            hasLongTitle && {
              paddingHorizontal: 40,
            },
          ]}
        >
          <Text style={[textStyles.h3, { color: colors.primary }]}>
            {rightTitle}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ padding: 10 }} />
      <TouchableOpacity onPress={onLeftPress} disabled={nextIsDisabled}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: colors.primary,
            },
            hasLongTitle && {
              paddingHorizontal: 40,
            },
            nextIsDisabled && {
              backgroundColor: colors.buttonDisabled,
            },
          ]}
        >
          <Text style={[textStyles.h3, { color: 'white' }]}>{leftTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

NavigationButtons.propTypes = {
  onRightPress: PropTypes.func.isRequired,
  onLeftPress: PropTypes.func.isRequired,
  nextIsDisabled: PropTypes.bool.isRequired,
  rightTitle: PropTypes.string.isRequired,
  leftTitle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  hasLongTitle: PropTypes.bool,
};

export default NavigationButtons;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 3,
  },
});
