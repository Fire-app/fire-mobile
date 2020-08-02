import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { colors, textStyles } from '../styles';

export default function RightsWarning({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Ionicons name="md-alert" color={colors.primary} size={34} />
      <View style={styles.textContainer}>
        <Text style={[textStyles.h2, { color: 'white', paddingBottom: 2 }]}>
          {title}
        </Text>
        <Text style={[textStyles.body2, { color: 'white' }]}>{subtitle}</Text>
      </View>
    </View>
  );
}

RightsWarning.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.charcoalGrey,
  },
  textContainer: {
    paddingLeft: 15,
    width: '85%',
  },
});
