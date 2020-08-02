import React from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';
import ScenarioBullets from './ScenarioBullets';
import ScenarioItems from './ScenarioItems';

import { textStyles } from '../styles';

const RightsScenarios = ({ bullets, items }) => {
  return (
    <View>
      {(items || bullets) && (
        <Text style={[textStyles.h2, { paddingTop: 50 }]}>
          {'Potential Scenarios'}
        </Text>
      )}
      {bullets && (
        <ScenarioBullets title={bullets.title} bullets={bullets.bullets} />
      )}
      {items && (
        <View>
          {items.map(({ title, subtitle }) => {
            return (
              <View key={title}>
                <ScenarioItems title={title} subtitle={subtitle} />
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

RightsScenarios.propTypes = {
  // eslint-disable-next-line react/require-default-props
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ),
  // eslint-disable-next-line react/require-default-props
  bullets: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }),
};
export default RightsScenarios;
