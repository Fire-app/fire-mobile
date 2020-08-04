import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../../../styles';

import Service from './Service';

export default function ServiceList({ services }) {
  const servicesList = services.map((service) => <Service name={service} />);

  return (
    <View>
      <Text
        style={[
          textStyles.h2,
          colors.charcoalGrey,
          { paddingTop: 20, paddingBottom: 14 },
        ]}
      >
        {'Services'}
      </Text>
      <View>{servicesList}</View>
    </View>
  );
}

ServiceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
