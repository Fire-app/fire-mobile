import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const PrimarySecondaryOptions = ({ primaryButton, secondaryButton }) => (
  <View
    style={{
      paddingHorizontal: 24,
      flexDirection: 'row',
      // If font size scaled up, allow these to wrap with primary button on top
      flexWrap: 'wrap-reverse',
      justifyContent: 'center',
    }}
  >
    {secondaryButton && (
      <View
        style={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SecondaryButton
          onPress={secondaryButton.onPress}
          title={secondaryButton.title}
        />
      </View>
    )}
    {primaryButton && (
      <PrimaryButton
        title={primaryButton.title}
        onPress={primaryButton.onPress}
      />
    )}
  </View>
);

export const ButtonProp = PropTypes.shape({
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
});

PrimarySecondaryOptions.propTypes = {
  primaryButton: ButtonProp.isRequired,
  // eslint-disable-next-line react/require-default-props
  secondaryButton: ButtonProp,
};
export default PrimarySecondaryOptions;
