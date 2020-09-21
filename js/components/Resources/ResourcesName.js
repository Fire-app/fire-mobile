import { Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../../styles';

const ResourcesName = ({ text }) => {
  return (
    <Text
      style={[
        textStyles.h1,
        colors.charcoalGrey,
        {
          alignSelf: 'stretch',
          paddingBottom: 10,
          textAlign: 'left',
        },
      ]}
    >
      {text}
    </Text>
  );
};

ResourcesName.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ResourcesName;
