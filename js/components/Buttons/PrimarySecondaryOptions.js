import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
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
      },
      // secondaryButton && { paddingBottom: 24 },
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
    {secondaryButton && (
      <View
        style={{
          // actually 8 but secondary btn not centered in modal otherwise.
          // flexGrow: 1 doesn't work either.
          // spacing is not *super* weird w/ larger text sizes.
          width: 14,
        }}
      />
    )}
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
  primaryButton: ButtonProp.isRequired,
  // eslint-disable-next-line react/require-default-props
  secondaryButton: ButtonProp,
};
export default PrimarySecondaryOptions;
