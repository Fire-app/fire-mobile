import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const PrimarySecondaryOptions = ({ primaryButton, secondaryButton }) => (
  <View
    style={[
      {
        paddingHorizontal: 40,
        flexDirection: 'row',
        // If font size scaled up, allow these to wrap with primary button on top
        flexWrap: 'wrap-reverse',
        justifyContent: 'space-between',
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
          title={primaryButton.title}
          onPress={primaryButton.onPress}
          disabled={primaryButton.disabled}
        />
      </View>
    )}
  </View>
);

export const ButtonProp = PropTypes.shape({
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
});

PrimarySecondaryOptions.propTypes = {
  /* eslint-disable react/require-default-props */
  primaryButton: ButtonProp,
  secondaryButton: ButtonProp,
};
export default PrimarySecondaryOptions;
