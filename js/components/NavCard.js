import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { Feather, Ionicons } from '@expo/vector-icons';
import textStyles from '../styles/textStyles';
import { colors } from '../styles';
import { IconProp, FEATHER } from '../../data/fontFamilies';

export default function NavCard({
  title,
  description,
  onPress,
  icon,
  isSmall,
}) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View
        style={[styles.navCard, isSmall && { padding: 10, paddingLeft: 16 }]}
      >
        {icon && (
          <View style={{ minWidth: 30, alignItems: 'center', marginRight: 14 }}>
            {icon.family === FEATHER ? (
              <Feather name={icon.name} size={24} color={colors.charcoalGrey} />
            ) : (
              <Ionicons
                name={icon.name}
                size={24}
                color={colors.charcoalGrey}
              />
            )}
          </View>
        )}
        <View style={{ flex: 1 }}>
          <Text style={isSmall ? textStyles.h3 : textStyles.h2}>{title}</Text>
          {description && (
            <Text style={[textStyles.body2, { paddingTop: 4 }]}>
              {description}
            </Text>
          )}
        </View>
        <Feather name="chevron-right" size={34} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
}

NavCard.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  /* eslint-disable react/require-default-props */
  description: PropTypes.string,
  icon: IconProp,
  isSmall: PropTypes.bool,
  /* eslint-enable react/require-default-props */
};

const styles = StyleSheet.create({
  navCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#eeeeee',
    padding: 24,
  },
});
