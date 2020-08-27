import { Feather, Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../styles';
import { FEATHER, IconProp } from '../../data/fontFamilies';
import textStyles from '../styles/textStyles';

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
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        {icon && (
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
              <Feather color={colors.primary} name={icon.name} size={22} />
            ) : (
              <Ionicons color={colors.primary} name={icon.name} size={22} />
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
        <Feather color={colors.primary} name="chevron-right" size={34} />
      </View>
    </Card>
  );
}

NavCard.propTypes = {
  description: PropTypes.string,
  icon: IconProp,
  onPress: PropTypes.func.isRequired,
  smallMode: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
