import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import ScenarioBullets from './ScenarioBullets';
import ScenarioItems from './ScenarioItems';

import { textStyles } from '../styles';

const RightsScenarios = ({ bullets, items }) => {
  const { t } = useTranslation();
  return (
    <View>
      {(items || bullets) && (
        <Text style={textStyles.h2}>{t('potential_scenarios')}</Text>
      )}
      {bullets && (
        <ScenarioBullets bullets={bullets.bullets} title={bullets.title} />
      )}
      {items && (
        <View>
          {items.map(({ title, subtitle }) => (
            <ScenarioItems key={title} subtitle={subtitle} title={title} />
          ))}
        </View>
      )}
    </View>
  );
};

RightsScenarios.propTypes = {
  bullets: PropTypes.shape({
    bullets: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    title: PropTypes.string.isRequired,
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
export default RightsScenarios;
