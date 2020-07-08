import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../styles';

const OnboardingButtons = ({
  onRightPress,
  onLeftPress,
  rightTitle,
  leftTitle,
  nextIsDisabled,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onRightPress}>
        <Text style={[textStyles.h3, { color: colors.primary }]}>
          {rightTitle}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.nextButton,
          nextIsDisabled ? styles.nextButtonDisabled : null,
        ]}
        onPress={onLeftPress}
        disabled={nextIsDisabled}
      >
        <Text style={[textStyles.h3, { color: 'white' }]}>{leftTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

OnboardingButtons.propTypes = {
  onRightPress: PropTypes.func.isRequired,
  onLeftPress: PropTypes.func.isRequired,
  nextIsDisabled: PropTypes.bool.isRequired,
  rightTitle: PropTypes.string.isRequired,
  leftTitle: PropTypes.string.isRequired,
};

export default OnboardingButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    flexGrow: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginRight: 5,
    backgroundColor: 'white',
  },
  nextButton: {
    flexDirection: 'row',
    flexGrow: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginLeft: 5,
    backgroundColor: colors.primary,
  },
  nextButtonDisabled: {
    backgroundColor: colors.buttonDisabled,
  },
});
