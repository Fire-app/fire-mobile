import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../../../styles';

import Service from './Service';

export default function ServiceList({ services }) {
  const servicesList = services.map((item) => (
    <Service key={item} name={item} />
  ));

  return (
    <View>
      <Text
        style={[
          textStyles.h2,
          colors.charcoalGrey,
          { paddingBottom: 14, paddingTop: 20 },
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
