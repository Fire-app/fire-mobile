import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';
import { colors, textStyles } from '../styles';

export default function ScenarioItems({ title, subtitle }) {
  return (
    <Card
      style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 20,
        marginVertical: 6,
      }}
    >
      <Text style={textStyles.h3}>{title}</Text>
      <Text
        style={[
          textStyles.body1,
          { color: colors.textLight, paddingVertical: 2 },
        ]}
      >
        {subtitle}
      </Text>
    </Card>
  );
}

ScenarioItems.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
