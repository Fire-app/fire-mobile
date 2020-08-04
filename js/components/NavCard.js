import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import textStyles from '../styles/textStyles';
import { colors } from '../styles';
import Card from './Card';

export default function NavCard({ title, description, onPress, icon }) {
  return (
    <Card onPress={onPress} style={{ padding: 24 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color={colors.charcoalGrey}
            style={{ paddingRight: 14 }}
          />
        )}
        <View>
          <Text style={textStyles.h2}>{title}</Text>
          {description && (
            <Text style={[textStyles.body2, { paddingTop: 4 }]}>
              {description}
            </Text>
          )}
        </View>
      </View>

      <MaterialCommunityIcons
        name="chevron-right"
        size={40}
        color={colors.primary}
      />
    </Card>
  );
}

NavCard.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  /* eslint-disable react/require-default-props */
  description: PropTypes.string,
  icon: PropTypes.string,
  /* eslint-enable react/require-default-props */
};
