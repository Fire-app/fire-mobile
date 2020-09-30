import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../styles';
import FireIcon, { ICON_NAMES } from './FireIcon';

const AlertCircle = () => (
  <View
    style={{
      alignItems: 'center',
      aspectRatio: 1,
      backgroundColor: colors.primary,
      borderRadius: 999,
      justifyContent: 'center',
      padding: 4,
    }}
  >
    <FireIcon color={colors.white} name={ICON_NAMES.EXCLAMATION} size={20} />
  </View>
);

export default function RightsWarning({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 3 }}>
        <AlertCircle />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[textStyles.h2, { color: colors.white, paddingBottom: 2 }]}
        >
          {title}
        </Text>
        <Text style={[textStyles.body2, { color: colors.white }]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}

RightsWarning.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.charcoalGrey,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  textContainer: {
    paddingLeft: 15,
    width: '85%',
  },
});
