import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../styles';

const OnboardingTitle = ({
  title,
  subtitle,
  // the following props only used for welcome screen and toolkit intro screen
  alignCenter,
  paddingHorizontal,
  paddingVertical,
}) => {
  return (
    <View style={[{ paddingHorizontal, paddingVertical, width: '100%' }]}>
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
  alignCenter: PropTypes.bool,
  paddingHorizontal: PropTypes.number,
  paddingVertical: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

OnboardingTitle.defaultProps = {
  alignCenter: false,
  paddingHorizontal: 0,
  paddingVertical: 40,
  subtitle: '',
};

export default OnboardingTitle;
