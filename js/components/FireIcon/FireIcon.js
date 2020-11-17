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
  createIconSetFromFontello,
} from '@expo/vector-icons';

import { colors } from '../../styles';
import {
  ICON_NAMES,
  FEATHER_ICONS,
  MATERIAL_ICONS,
  ION_NAMES,
  FONT_AWESOME,
  CUSTOM_ICONS,
} from './iconNames';

import fontelloConfig from './config.json';

// Both the font name and files exported from Fontello are most likely called "fontello"
const CustomIcon = createIconSetFromFontello(
  fontelloConfig,
  'fontello',
  'fontello.ttf'
);

const FireIcon = ({
  name,
  size,
  color,
  style,
  raised,
  maxFontSizeMultiplier,
}) => {
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
        maxFontSizeMultiplier={maxFontSizeMultiplier}
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

const iconNamesToFamilyComponent = (name) => {
  const hasName = (v) => v === name;
  if (Object.values(FEATHER_ICONS).find(hasName)) return Feather;
  if (Object.values(MATERIAL_ICONS).find(hasName))
    return MaterialCommunityIcons;
  if (Object.values(ION_NAMES).find(hasName)) return Ionicons;
  if (Object.values(FONT_AWESOME).find(hasName)) return FontAwesome;
  if (Object.values(CUSTOM_ICONS).find(hasName)) return CustomIcon;

  throw new Error(`Cannot find icon component for icon: '${name}'`);
};

export const IconNamePropType = PropTypes.oneOf(Object.values(ICON_NAMES));
FireIcon.propTypes = {
  color: PropTypes.string,
  maxFontSizeMultiplier: Text.propTypes.maxFontSizeMultiplier,
  name: IconNamePropType.isRequired,
  raised: PropTypes.bool,
  size: PropTypes.number,
  style: Text.propTypes.style,
};

export default FireIcon;
