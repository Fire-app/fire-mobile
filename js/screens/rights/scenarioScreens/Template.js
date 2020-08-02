import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

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
    <RightsScenarios bullets={scenarioBullets} items={scenarioItems} />
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
