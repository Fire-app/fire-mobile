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
          styles.title,
          alignCenter && { textAlign: 'center' },
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
  subtitle: PropTypes.string.isRequired,
  alignCenter: PropTypes.bool,
};

OnboardingTitle.defaultProps = {
  alignCenter: false,
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
    color: colors.text,
  },
  subtitle: {
    color: colors.subtext,
  },
});
