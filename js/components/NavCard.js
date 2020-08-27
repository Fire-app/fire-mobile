import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../styles';
import textStyles from '../styles/textStyles';

import Card from './Card';
import FireIcon, { ICON_NAMES, IconNamePropType } from './FireIcon';

export default function NavCard({
  title,
  description,
  onPress,
  iconName,
  smallMode,
}) {
  return (
    <Card
      onPress={onPress}
      style={smallMode ? { padding: 10, paddingLeft: 16 } : { padding: 24 }}
    >
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        {iconName && (
          <View
            style={{
              alignItems: 'center',
              backgroundColor: colors.primaryLight,
              borderRadius: 34,
              height: 34,
              justifyContent: 'center',
              marginRight: 12,
              width: 34,
            }}
          >
            <FireIcon color={colors.primary} name={iconName} size={22} />
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
        <FireIcon
          color={colors.primary}
          name={ICON_NAMES.CHEVRON_RIGHT}
          size={34}
        />
      </View>
    </Card>
  );
}

NavCard.propTypes = {
  description: PropTypes.string,
  iconName: IconNamePropType,
  onPress: PropTypes.func.isRequired,
  smallMode: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
