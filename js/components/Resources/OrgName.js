import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../../styles';

const OrgName = ({ text }) => {
  return (
    <Text
      style={[
        textStyles.h2,
        colors.charcoalGrey,
        {
          textAlign: 'left',
          alignSelf: 'stretch',
          paddingBottom: 20,
        },
      ]}
    >
      {text}
    </Text>
  );
};

OrgName.propTypes = {
  text: PropTypes.string.isRequired,
};

export default OrgName;
