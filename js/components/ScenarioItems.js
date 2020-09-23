import { Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../styles';
import Card from './Card';

export default function ScenarioItems({ title, subtitle }) {
  return (
    <Card
      style={{
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginVertical: 6,
        padding: 20,
      }}
    >
      <>
        <Text style={textStyles.h3}>{title}</Text>
        <Text
          style={[
            textStyles.body1,
            { color: colors.textLight, paddingVertical: 2 },
          ]}
        >
          {subtitle}
        </Text>
      </>
    </Card>
  );
}

ScenarioItems.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
