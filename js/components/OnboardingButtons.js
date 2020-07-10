import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { PrimaryButton, SecondaryButton } from './Buttons';

const OnboardingButtons = ({
  onRightPress,
  onLeftPress,
  rightTitle,
  leftTitle,
  nextIsDisabled,
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SecondaryButton title={rightTitle} onPress={onRightPress} />
      </View>
      <View style={{ width: 5 }} />
      <View style={{ flex: 1 }}>
        <PrimaryButton
          title={leftTitle}
          onPress={onLeftPress}
          disabled={nextIsDisabled}
        />
      </View>
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
