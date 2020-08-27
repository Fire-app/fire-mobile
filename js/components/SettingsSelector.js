import { Feather, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import React from 'react';
import { FEATHER, IconProp } from '../../data/fontFamilies';

import { colors, textStyles } from '../styles';

const SettingsIcon = ({ icon }) => (
  <View
    style={{
      alignItems: 'center',
      backgroundColor: colors.primaryLight,
      borderRadius: 34,
      height: 34,
      justifyContent: 'center',
      marginRight: 8,
      width: 34,
    }}
  >
    {icon.family === FEATHER ? (
      <Feather color={colors.primary} name={icon.name} size={24} />
    ) : (
      <Ionicons color={colors.primary} name={icon.name} size={24} />
    )}
  </View>
);

SettingsIcon.propTypes = {
  icon: IconProp.isRequired,
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
  <TouchableHighlight onPress={onPress} underlayColor={colors.primaryLight}>
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 14,
      }}
    >
      <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>
        {hasIcon && <SettingsIcon icon={icon} />}
        <Text style={[textStyles.h5, { flex: 1 }]}>{title}</Text>
      </View>
      <Feather color={colors.primary} name="chevron-right" size={34} />
    </View>
  </TouchableHighlight>
);
Row.propTypes = {
  hasIcon: PropTypes.bool,

  icon: IconProp,

  onPress: PropTypes.func.isRequired,

  title: PropTypes.string.isRequired,
};

Row.defaultProps = {
  hasIcon: false,
};
