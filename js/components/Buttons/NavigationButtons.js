import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../../styles';

const NavigationButtons = ({
  onSecondaryPress,
  onPrimaryPress,
  secondaryTitle,
  primaryTitle,
  primaryIsDisabled,
  hasLongTitles,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <TouchableOpacity onPress={onSecondaryPress}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: 'white',
            },
            hasLongTitles && {
              paddingHorizontal: 40,
            },
          ]}
        >
          <Text style={[textStyles.h3, { color: colors.primary }]}>
            {secondaryTitle}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ padding: 10 }} />
      <TouchableOpacity onPress={onPrimaryPress} disabled={primaryIsDisabled}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: colors.primary,
            },
            hasLongTitles && {
              paddingHorizontal: 40,
            },
            primaryIsDisabled && {
              backgroundColor: colors.buttonDisabled,
            },
          ]}
        >
          <Text style={[textStyles.h3, { color: 'white' }]}>
            {primaryTitle}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

NavigationButtons.propTypes = {
  onSecondaryPress: PropTypes.func.isRequired,
  onPrimaryPress: PropTypes.func.isRequired,
  primaryIsDisabled: PropTypes.bool,
  secondaryTitle: PropTypes.string.isRequired,
  primaryTitle: PropTypes.string.isRequired,
  hasLongTitles: PropTypes.bool,
};

NavigationButtons.defaultProps = {
  primaryIsDisabled: false,
  hasLongTitles: false,
};

export default NavigationButtons;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 16,
    borderRadius: 3,
  },
});
