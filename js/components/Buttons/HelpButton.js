import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { colors, textStyles } from '../../styles';

const HelpButton = ({ title, onPress, centered }) => (
  <TouchableOpacity
    style={[
      {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
      },
      centered && { justifyContent: 'center' },
    ]}
    onPress={onPress}
  >
    <Ionicons
      name="ios-help-circle"
      color={colors.primary}
      size={20}
      style={{ paddingTop: 2 }}
    />
    <Text style={[textStyles.h3, { paddingLeft: 4, color: colors.primary }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

HelpButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  centered: PropTypes.bool,
};

HelpButton.defaultProps = {
  centered: false,
};

export default HelpButton;
