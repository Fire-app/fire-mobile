import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import RightsWarning from '../../../components/RightsWarning';
import RightsScenarios from '../../../components/RightsScenarios';
import RightsTips from '../../../components/RightsTips';
import { colors } from '../../../styles';

const KnowYourRightsTemplate = ({
  warning,
  scenarioBullets,
  scenarioItems,
  tips,
}) => (
  <ScrollView
    alwaysBounceVertical={false}
    contentContainerStyle={{
      flexGrow: 1,
      backgroundColor: colors.backgroundColor,
      paddingVertical: 36,
      paddingHorizontal: 20,
    }}
  >
    <RightsWarning title={warning.title} subtitle={warning.subtitle} />
    {(scenarioItems || scenarioBullets) && <View style={{ height: 50 }} />}
    <RightsScenarios bullets={scenarioBullets} items={scenarioItems} />
    {tips && <View style={{ height: 50 }} />}
    <RightsTips tips={tips} />
  </ScrollView>
);

KnowYourRightsTemplate.propTypes = {
  warning: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/require-default-props
  scenarioBullets: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }),
  // eslint-disable-next-line react/require-default-props
  scenarioItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ),
  tips: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default KnowYourRightsTemplate;
