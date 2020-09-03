import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../styles';

const ProgressCircles = ({ numSteps, step }) => {
  const array = new Array(numSteps);
  for (let i = 0; i < numSteps; i += 1) array[i] = i + 1;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      {array.map((n) => {
        if (n === step) {
          return (
            <MaterialCommunityIcons
              key={n}
              name="circle"
              style={{ color: colors.primary, fontSize: 18, padding: 8 }}
            />
          );
        }
        return (
          <MaterialCommunityIcons
            key={n}
            name="circle"
            style={{ color: colors.border, fontSize: 18, padding: 8 }}
          />
        );
      })}
    </View>
  );
};

ProgressCircles.propTypes = {
  numSteps: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default ProgressCircles;
