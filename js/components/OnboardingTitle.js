import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../styles';

const OnboardingTitle = ({
  title,
  subtitle,
  // the following props only used for welcome screen and toolkit intro screen
  alignCenter,
  paddingHorizontal,
  paddingVertical,
}) => {
  return (
    <View style={{ paddingHorizontal, paddingVertical, width: '100%' }}>
      <Text
        style={[
          textStyles.h1,
          { paddingBottom: 6 },
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
  paddingHorizontal: PropTypes.number,
  paddingVertical: PropTypes.number,
};

OnboardingTitle.defaultProps = {
  subtitle: '',
  alignCenter: false,
  paddingHorizontal: 0,
  paddingVertical: 40,
};

export default OnboardingTitle;
