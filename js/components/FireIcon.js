/* eslint-disable no-restricted-imports */
// Explicitly allow @expo/vector-icons import in this file

import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import {
  MaterialCommunityIcons,
  Feather,
  Ionicons,
  FontAwesome,
} from '@expo/vector-icons';
import { colors } from '../styles';

const FireIcon = ({ name, size, color, style, raised }) => {
  const IconComponent =
    iconNamesToFamilyComponent(name) || MaterialCommunityIcons;
  return (
    <View
      style={[
        raised && {
          alignItems: 'center',
          aspectRatio: 1,
          backgroundColor: colors.primaryLight,
          borderRadius: 100,
          justifyContent: 'center',
          padding: 8,
        },
      ]}
    >
      <Text
        style={[
          style,
          raised && {
            aspectRatio: 1,
            textAlign: 'center',
          },
        ]}
      >
        <IconComponent color={color} name={name} size={size} />
      </Text>
    </View>
  );
};

const FEATHER_ICONS = {
  ALERT: 'alert-triangle',
  BELL: 'bell',
  BRIEFCASE: 'briefcase',
  CHEVRON_RIGHT: 'chevron-right',
  CREDIT_CARD: 'credit-card',
  FACEBOOK: 'facebook',
  GEAR: 'settings',
  HOME: 'home',
  INFO: 'info',
  INSTAGRAM: 'instagram',
  PHONE: 'phone',
  ROTATE_CCW: 'rotate-ccw',
  SHIELD: 'shield',
  TWITTER: 'twitter',
  USERS: 'users',
  YOUTUBE: 'youtube',
};

const ION_NAMES = {
  CAR: 'md-car',
  CHECKMARK: 'ios-checkmark-circle',
  GLOBE: 'md-globe',
  HELP: 'ios-help-circle',
  SUBWAY: 'ios-subway',
  WALK: 'ios-walk',
};

const MATERIAL_ICONS = {
  CIRCLE: 'circle',
  CLOSE: 'close',
};

const FONT_AWESOME = {
  EXCLAMATION: 'exclamation',
};

export const ICON_NAMES = {
  ...FEATHER_ICONS,
  ...ION_NAMES,
  ...MATERIAL_ICONS,
  ...FONT_AWESOME,
};

const iconNamesToFamilyComponent = (name) => {
  const hasName = (v) => v === name;
  if (Object.values(FEATHER_ICONS).find(hasName)) return Feather;
  if (Object.values(MATERIAL_ICONS).find(hasName))
    return MaterialCommunityIcons;
  if (Object.values(ION_NAMES).find(hasName)) return Ionicons;
  if (Object.values(FONT_AWESOME).find(hasName)) return FontAwesome;

  throw new Error(`Cannot find icon component for icon: '${name}'`);
};

export const IconNamePropType = PropTypes.oneOf(Object.values(ICON_NAMES));
FireIcon.propTypes = {
  color: PropTypes.string,
  name: IconNamePropType.isRequired,
  raised: PropTypes.bool,
  size: PropTypes.number,
  style: Text.propTypes.style,
};

export default FireIcon;
