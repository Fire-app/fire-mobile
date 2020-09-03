import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { PrimaryButton } from '../Buttons';

const ContactButtons = ({
  onRightPress,
  onLeftPress,
  rightTitle,
  leftTitle,
  rightDisabled,
  leftDisabled,
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        <PrimaryButton
          disabled={leftDisabled}
          onPress={onLeftPress}
          title={leftTitle}
        />
      </View>
      <View style={{ width: 12 }} />
      <View style={{ flex: 1 }}>
        <PrimaryButton
          disabled={rightDisabled}
          onPress={onRightPress}
          title={rightTitle}
        />
      </View>
    </View>
  );
};

ContactButtons.propTypes = {
  leftDisabled: PropTypes.bool.isRequired,
  leftTitle: PropTypes.string.isRequired,
  onLeftPress: PropTypes.func.isRequired,
  onRightPress: PropTypes.func.isRequired,
  rightDisabled: PropTypes.bool.isRequired,
  rightTitle: PropTypes.string.isRequired,
};

export default ContactButtons;
