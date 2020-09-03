import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../../../styles';
import RightsScenarios from '../../../components/RightsScenarios';
import RightsTips from '../../../components/RightsTips';
import RightsWarning from '../../../components/RightsWarning';

const KnowYourRightsTemplate = ({
  warning,
  scenarioBullets,
  scenarioItems,
  tips,
}) => (
  <ScrollView
    alwaysBounceVertical={false}
    contentContainerStyle={{
      backgroundColor: colors.backgroundColor,
      flexGrow: 1,
      paddingHorizontal: 20,
      paddingVertical: 36,
    }}
  >
    <RightsWarning subtitle={warning.subtitle} title={warning.title} />
    {(scenarioItems || scenarioBullets) && <View style={{ height: 50 }} />}
    <RightsScenarios bullets={scenarioBullets} items={scenarioItems} />
    {tips && <View style={{ height: 50 }} />}
    <RightsTips tips={tips} />
  </ScrollView>
);

KnowYourRightsTemplate.propTypes = {
  scenarioBullets: PropTypes.shape({
    bullets: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    title: PropTypes.string.isRequired,
  }),

  scenarioItems: PropTypes.arrayOf(
    PropTypes.shape({
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),

  tips: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  warning: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default KnowYourRightsTemplate;
