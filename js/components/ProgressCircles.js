/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
              style={{ fontSize: 18, color: colors.primary, padding: 8 }}
            />
          );
        }
        return (
          <MaterialCommunityIcons
            key={n}
            name="circle"
            style={{ fontSize: 18, color: colors.border, padding: 8 }}
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
