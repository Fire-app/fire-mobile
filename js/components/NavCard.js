import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import textStyles from '../styles/textStyles';
import { colors } from '../styles';

export default function NavCard({ title, description, onPress, icon }) {
  return (
    <TouchableOpacity style={styles.navCard} onPress={() => onPress()}>
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
    </TouchableOpacity>
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

const styles = StyleSheet.create({
  navCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#eeeeee',
  },
});
