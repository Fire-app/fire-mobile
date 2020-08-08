import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Feather, Ionicons } from '@expo/vector-icons';
import textStyles from '../styles/textStyles';
import { colors } from '../styles';
import { IconProp, FEATHER } from '../../data/fontFamilies';

import Card from './Card';

export default function NavCard({
  title,
  description,
  onPress,
  icon,
  smallMode,
}) {
  return (
    <Card
      onPress={onPress}
      style={smallMode ? { padding: 10, paddingLeft: 16 } : { padding: 24 }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon && (
          <View
            style={{
              height: 34,
              width: 34,
              borderRadius: 34,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 8,
              backgroundColor: colors.primaryLight,
            }}
          >
            {icon.family === FEATHER ? (
              <Feather name={icon.name} size={22} color={colors.primary} />
            ) : (
              <Ionicons name={icon.name} size={22} color={colors.primary} />
            )}
          </View>
        )}
        <View style={{ flex: 1 }}>
          <Text style={smallMode ? textStyles.h3 : textStyles.h2}>{title}</Text>
          {description && (
            <Text style={[textStyles.body2, { paddingTop: 4 }]}>
              {description}
            </Text>
          )}
        </View>
        <Feather name="chevron-right" size={34} color={colors.primary} />
      </View>
    </Card>
  );
}

NavCard.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  /* eslint-disable react/require-default-props */
  description: PropTypes.string,
  icon: IconProp,
  smallMode: PropTypes.bool,
  /* eslint-enable react/require-default-props */
};
