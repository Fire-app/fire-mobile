import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { colors, textStyles } from '../styles';

const AlertCircle = () => (
  <View
    style={{
      aspectRatio: 1,
      borderRadius: 999,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4,
    }}
  >
    <FontAwesome name="exclamation" color="white" size={20} />
  </View>
);

export default function RightsWarning({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 3 }}>
        <AlertCircle />
      </View>
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
