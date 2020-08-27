import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../../styles';
import FireIcon, { ICON_NAMES } from '../FireIcon';

const HelpButton = ({ title, onPress, centered }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 10,
      },
      centered && { justifyContent: 'center' },
    ]}
  >
    <FireIcon
      color={colors.primary}
      name={ICON_NAMES.HELP}
      size={20}
      style={{ paddingTop: 2 }}
    />
    <Text style={[textStyles.h3, { color: colors.primary, paddingLeft: 4 }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

HelpButton.propTypes = {
  centered: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

HelpButton.defaultProps = {
  centered: false,
};

export default HelpButton;
