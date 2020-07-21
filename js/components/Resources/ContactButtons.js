import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { PrimaryButton } from '../Buttons';

const ContactButtons = ({
  onRightPress,
  onLeftPress,
  rightTitle,
  leftTitle,
  callDisabled,
  websiteDisabled,
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        <PrimaryButton
          title={leftTitle}
          onPress={onLeftPress}
          disabled={callDisabled}
        />
      </View>
      <View style={{ width: 12 }} />
      <View style={{ flex: 1 }}>
        <PrimaryButton
          title={rightTitle}
          onPress={onRightPress}
          disabled={websiteDisabled}
        />
      </View>
    </View>
  );
};

ContactButtons.propTypes = {
  onRightPress: PropTypes.func.isRequired,
  onLeftPress: PropTypes.func.isRequired,
  rightTitle: PropTypes.string.isRequired,
  leftTitle: PropTypes.string.isRequired,
  callDisabled: PropTypes.bool.isRequired,
  websiteDisabled: PropTypes.bool.isRequired,
};

export default ContactButtons;
