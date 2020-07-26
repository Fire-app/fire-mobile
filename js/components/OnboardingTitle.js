import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../styles';

const OnboardingTitle = ({ title, subtitle, alignCenter }) => {
  return (
    <View
      style={[
        { paddingVertical: 30, width: '100%' },
        alignCenter && { paddingVertical: 0 },
      ]}
    >
      <Text
        style={[
          textStyles.h1,
          { paddingBottom: 5 },
          alignCenter && { textAlign: 'center' },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          textStyles.body1,
          { color: colors.textLight },
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
