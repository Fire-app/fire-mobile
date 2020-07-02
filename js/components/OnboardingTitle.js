import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles } from '../styles';

const OnboardingTitle = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={[textStyles.h1, styles.title]}>{title}</Text>
      <Text style={textStyles.body1}>{subtitle}</Text>
    </View>
  );
};

OnboardingTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default OnboardingTitle;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingRight: 10,
    width: '100%',
  },
  title: {
    paddingBottom: 5,
  },
});