import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const PrimarySecondaryOptions = ({ primaryButton, secondaryButton }) => (
  <View
    style={[
      {
        flexDirection: 'row',
        // If font size scaled up, allow these to wrap with primary button on top
        flexWrap: 'wrap-reverse',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
      },
      secondaryButton && { paddingHorizontal: 15 },
    ]}
  >
    {secondaryButton && (
      <View style={{ flexGrow: 1 }}>
        <SecondaryButton
          onPress={secondaryButton.onPress}
          title={secondaryButton.title}
        />
      </View>
    )}
    {secondaryButton && <View style={{ width: 10 }} />}
    {primaryButton && (
      <View style={{ flexGrow: 1 }}>
        <PrimaryButton
          disabled={primaryButton.disabled}
          onPress={primaryButton.onPress}
          title={primaryButton.title}
        />
      </View>
    )}
  </View>
);

export const ButtonProp = PropTypes.shape({
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
});

PrimarySecondaryOptions.propTypes = {
  primaryButton: ButtonProp,
  secondaryButton: ButtonProp,
};
export default PrimarySecondaryOptions;
