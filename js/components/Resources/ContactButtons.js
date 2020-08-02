import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
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
          title={leftTitle}
          onPress={onLeftPress}
          disabled={leftDisabled}
        />
      </View>
      <View style={{ width: 12 }} />
      <View style={{ flex: 1 }}>
        <PrimaryButton
          title={rightTitle}
          onPress={onRightPress}
          disabled={rightDisabled}
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
  rightDisabled: PropTypes.bool,
  leftDisabled: PropTypes.bool,
};

ContactButtons.defaultProps = {
  rightDisabled: false,
  leftDisabled: false,
};
export default ContactButtons;
