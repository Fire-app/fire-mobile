import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import FireIcon from './FireIcon';
import { colors } from '../styles';

const ProgressCircles = ({ numSteps, step }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
    }}
  >
    {new Array(numSteps).map((_, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <View key={i} style={{ padding: 8 }}>
        <FireIcon
          color={i === step ? colors.primary : colors.border}
          name="circle"
          size={18}
        />
      </View>
    ))}
  </View>
);

ProgressCircles.propTypes = {
  numSteps: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default ProgressCircles;
