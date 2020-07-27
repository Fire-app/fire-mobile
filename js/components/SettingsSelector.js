import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { FEATHER, IconProp } from '../../data/fontFamilies';

import { textStyles, colors } from '../styles';

const SettingsIcon = ({ name, family }) => (
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
    {family === FEATHER ? (
      <Feather name={name} size={24} color={colors.primary} />
    ) : (
      <Ionicons name={name} size={24} color={colors.primary} />
    )}
  </View>
);

SettingsIcon.propTypes = {
  name: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
};

export const Divider = () => (
  <View
    style={{
      borderColor: colors.border,
      borderWidth: StyleSheet.hairlineWidth,
    }}
  />
);

export const Row = ({ hasIcon, icon, title, onPress }) => (
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
        {hasIcon && <SettingsIcon name={icon.name} family={icon.family} />}
        <Text style={textStyles.h5}>{title}</Text>
      </View>
      <Feather name="chevron-right" size={34} color="blue" />
    </View>
  </TouchableHighlight>
);
Row.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  hasIcon: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  icon: IconProp,
};

Row.defaultProps = {
  hasIcon: false,
};
