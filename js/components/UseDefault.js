import React from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../styles';

const UseDefault = ({ title, subtitle, value, onToggle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[textStyles.h2, styles.title]}>{title}</Text>
        <Text style={[textStyles.body2, styles.subtitle]}>{subtitle}</Text>
      </View>
      <View style={styles.toggleContainer}>
        <Switch
          trackColor={{ false: colors.buttonDisabled, true: colors.primary }}
          thumbColor="white"
          ios_backgroundColor={colors.buttonDisabled}
          onValueChange={onToggle}
          value={value}
        />
      </View>
    </View>
  );
};

UseDefault.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default UseDefault;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'column',
    width: '75%',
  },
  title: {
    paddingBottom: 5,
    color: colors.text,
  },
  subtitle: {
    color: colors.subtext,
  },
  toggleContainer: {
    paddingHorizontal: 20,
  },
});
