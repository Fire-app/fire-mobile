import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../styles';

const OnboardingTitle = ({ title, subtitle, alignCenter }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          textStyles.h1,
          alignCenter && { textAlign: 'center', paddingBottom: 5 },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          textStyles.body1,
          styles.subtitle,
          alignCenter && { textAlign: 'center' },
        ]}
      >
        {subtitle}
      </Text>
    </View>
  );
};

OnboardingTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  alignCenter: PropTypes.bool,
};

OnboardingTitle.defaultProps = {
  subtitle: '',
  alignCenter: false,
};

export default OnboardingTitle;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingRight: 10,
    width: '100%',
  },
  subtitle: {
    color: colors.textLight,
  },
});
