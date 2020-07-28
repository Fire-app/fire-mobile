import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { TouchableHighlight } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { textStyles, colors } from '../styles';

const SettingsIcon = ({ name }) => (
  <View
    style={{
      height: 34,
      width: 34,
      borderRadius: 34,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primaryLight,
      marginRight: 8,
    }}
  >
    <MaterialCommunityIcons name={name} size={24} color={colors.primary} />
  </View>
);

SettingsIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export const Divider = () => (
  <View
    style={{
      borderColor: colors.border,
      borderWidth: StyleSheet.hairlineWidth,
    }}
  />
);

export const Row = ({ hasIcon, iconName, title, onPress }) => (
  <TouchableHighlight underlayColor={colors.primaryLight} onPress={onPress}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 24,
      }}
    >
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        {/* TODO: real icons */}
        {hasIcon && <SettingsIcon name={iconName} />}
        <Text style={textStyles.h5}>{title}</Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={34}
        color={colors.primary}
      />
    </View>
  </TouchableHighlight>
);
Row.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  hasIcon: PropTypes.bool,
  iconName: PropTypes.string,
};

Row.defaultProps = {
  hasIcon: false,
  iconName: '',
};
